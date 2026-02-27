import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterDto } from 'src/usuarios/dto';
import { LoginDto } from 'src/usuarios/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  // Genera JWT
  generateToken(userId: number, email: string) {
    const payload = { sub: userId, email };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1h',
      }),
    };
  }

  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }

  // Registro de usuario
  async register(dto: RegisterDto) {
    // Verificar si el email ya existe
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      return { error: 'El email ya está registrado' };
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Crear usuario en la base de datos
    const user = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        nombreCompleto: dto.nombreCompleto,
        dni: dto.dni,
        fechaNacimiento: new Date(dto.fechaNacimiento),
        sexo: dto.sexo,
        estadoCivil: dto.estadoCivil,
      },
    });

    return { id: user.id, email: user.email, message: 'Usuario registrado exitosamente' };
  }

  
  async login(dto: LoginDto) {
  const user = await this.prisma.usuario.findUnique({
    where: { email: dto.email },
  });

  if (!user) {
    return { error: 'Usuario no encontrado' };
  }

  const isPasswordValid = await bcrypt.compare(
    dto.password,
    user.password,
  );

  if (!isPasswordValid) {
    return { error: 'Contraseña incorrecta' };
  }

  const token = this.generateToken(user.id, user.email);

  const { password, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, ...token };
}
}