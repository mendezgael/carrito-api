import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/jwt.guard';
import { RegisterDto, LoginDto } from './dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    const result = this.usuariosService.register(dto);
    if (result.error) {
      return result;
    }
    return result;
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    const result = this.usuariosService.login(dto);
    if (result.error) {
      return result;
    }
    // Generar JWT token
    const token = this.authService.generateToken(result.user.id, result.user.email);
    return { user: result.user, ...token };
  }

  @Get()
  @UseGuards(JwtGuard)
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() dto: any) {
    return this.usuariosService.create(dto);
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() dto: any) {
    return this.usuariosService.update(+id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
