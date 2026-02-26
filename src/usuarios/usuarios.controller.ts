import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { AuthService } from '../auth/auth.service';
import { JwtGuard } from '../auth/jwt.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RegisterDto, LoginDto } from './dto';

@ApiTags('Usuarios')
@ApiBearerAuth()
@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly authService: AuthService,
  ) {}

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
