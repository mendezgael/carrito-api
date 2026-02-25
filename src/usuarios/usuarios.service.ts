import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class UsuariosService {
  private readonly items: any[] = [];

  findAll() {
    // Solo usuarios disponibles
    return this.items.filter((i) => i.disponible !== false);
  }

  findOne(id: number) {
    return this.items.find((i) => i.id === id);
  }

  findByEmail(email: string) {
    return this.items.find((i) => i.email === email && i.disponible !== false);
  }

  create(dto: any) {
    const id = this.items.length + 1;
    const item = { id, disponible: true, ...dto };
    this.items.push(item);
    return item;
  }

  update(id: number, dto: any) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    const updated = { ...this.items[idx], ...dto, id };
    this.items[idx] = updated;
    return updated;
  }

  // Borrado lógico: setear `disponible` a false
  remove(id: number) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.items[idx].disponible = false;
    return this.items[idx];
  }

  // Autenticación: Register
  register(dto: RegisterDto) {
    // Verificar si el email ya existe
    if (this.findByEmail(dto.email)) {
      return { error: 'El email ya está registrado' };
    }

    // Crear nuevo usuario (sin hashear, texto plano como solicitaste)
    const id = this.items.length + 1;
    const newUser = {
      id,
      disponible: true,
      email: dto.email,
      password: dto.password, // Sin hashear
      nombreCompleto: dto.nombreCompleto,
      dni: dto.dni,
      fechaNacimiento: dto.fechaNacimiento,
      sexo: dto.sexo,
      estadoCivil: dto.estadoCivil,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.items.push(newUser);
    return { id: newUser.id, email: newUser.email, message: 'Usuario registrado exitosamente' };
  }

  // Autenticación: Login
  login(dto: LoginDto) {
    const user = this.findByEmail(dto.email);
    if (!user) {
      return { error: 'Usuario no encontrado' };
    }

    // Validar contraseña (sin hashear, comparación directa)
    if (user.password !== dto.password) {
      return { error: 'Contraseña incorrecta' };
    }

    // Return user sin password
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token: null }; // Token será generado por JWT service
  }
}
