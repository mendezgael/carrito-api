import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
//import { AuthService } from '../auth/auth.service';
import { JwtGuard } from '../auth/jwt.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { RegisterDto, LoginDto } from './dto';

@ApiTags('Usuarios')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    //private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente' })
  @Get()
  @UseGuards(JwtGuard)
  findAll() {
    return this.usuariosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @Get(':id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente' })
  @Post()
  @UseGuards(JwtGuard)
  create(@Body() dto: any) {
    return this.usuariosService.create(dto);
  }

  @ApiOperation({ summary: 'Actualizar un usuario por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario actualizado correctamente' })
  @Put(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() dto: any) {
    return this.usuariosService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Eliminar un usuario por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
