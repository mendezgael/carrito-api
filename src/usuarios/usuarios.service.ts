import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.usuario.findMany({
      where: { disponible: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findFirst({
      where: {
        email,
        disponible: true,
      },
    });
  }

  async create(dto: any) {
    return this.prisma.usuario.create({
      data: {
        ...dto,
      },
    });
  }

  async update(id: number, dto: any) {
    try {
      return await this.prisma.usuario.update({
        where: { id },
        data: dto,
      });
    } catch {
      return null;
    }
  }

  // Borrado lógico
  async remove(id: number) {
    try {
      return await this.prisma.usuario.update({
        where: { id },
        data: { disponible: false },
      });
    } catch {
      return null;
    }
  }

  // REGISTER
  /* async register(dto: RegisterDto) {
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      return { error: 'El email ya está registrado' };
    }

    const newUser = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        password: dto.password,
        nombreCompleto: dto.nombreCompleto,
        dni: dto.dni,
        fechaNacimiento: new Date(dto.fechaNacimiento),
        sexo: dto.sexo,
        estadoCivil: dto.estadoCivil,
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
      message: 'Usuario registrado exitosamente',
    };
  } */

  // LOGIN
  /* async login(dto: LoginDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (!user || user.disponible === false) {
      return { error: 'Usuario no encontrado' };
    }

    if (user.password !== dto.password) {
      return { error: 'Contraseña incorrecta' };
    }

    const { password, ...userWithoutPassword } = user;

    return { user: userWithoutPassword };
  } */
}