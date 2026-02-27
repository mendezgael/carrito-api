import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { DetalleFacturasService } from './detalle-facturas.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';

@ApiTags  ('detalle-facturas')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('detalle-facturas')
export class DetalleFacturasController {
  constructor(private readonly detalleFacturasService: DetalleFacturasService) {}

  @ApiOperation({ summary: 'Obtener todos los detalles de facturas' })
  @ApiResponse({ status: 200, description: 'Lista de detalles obtenida correctamente' })
  @Get()
  findAll() {
    return this.detalleFacturasService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un detalle de factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del detalle de factura' })
  @ApiResponse({ status: 200, description: 'Detalle encontrado' })
  @ApiResponse({ status: 404, description: 'Detalle no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleFacturasService.findOne(+id);
  }

  @ApiOperation({ summary: 'Crear un nuevo detalle de factura' })
  @ApiResponse({ status: 201, description: 'Detalle creado correctamente' })
  @Post()
  create(@Body() dto: any) {
    return this.detalleFacturasService.create(dto);
  }

  @ApiOperation({ summary: 'Actualizar un detalle de factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del detalle de factura' })
  @ApiResponse({ status: 200, description: 'Detalle actualizado correctamente' })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.detalleFacturasService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Eliminar un detalle de factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID del detalle de factura' })
  @ApiResponse({ status: 200, description: 'Detalle eliminado correctamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleFacturasService.remove(+id);
  }
}
