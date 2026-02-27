import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductosService } from './productos.service';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('productos')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiResponse({ status: 200, description: 'Lista de productos obtenida correctamente' })
  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un producto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto encontrado' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({ status: 201, description: 'Producto creado correctamente' })
  @Post()
  create(@Body() dto: any) {
    return this.productosService.create(dto);
  }

  @ApiOperation({ summary: 'Actualizar un producto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto actualizado correctamente' })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.productosService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Eliminar un producto por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto eliminado correctamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
