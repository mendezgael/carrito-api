import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('facturas')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('facturas')
export class FacturasController {
  constructor(private readonly facturasService: FacturasService) {}

  @ApiOperation({ summary: 'Obtener todas las facturas' })
  @ApiResponse({ status: 200, description: 'Lista de facturas obtenida correctamente' })
  @Get()
  findAll() {
    return this.facturasService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID de la factura' })
  @ApiResponse({ status: 200, description: 'Factura encontrada' })
  @ApiResponse({ status: 404, description: 'Factura no encontrada' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturasService.findOne(+id);
  }

  @ApiOperation({ summary: 'Crear una nueva factura' })
  @ApiResponse({ status: 201, description: 'Factura creada correctamente' })
  @Post()
  create(@Body() dto: any) {
    return this.facturasService.create(dto);
  }

  @ApiOperation({ summary: 'Actualizar una factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID de la factura' })
  @ApiResponse({ status: 200, description: 'Factura actualizada correctamente' })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.facturasService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Eliminar una factura por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID de la factura' })
  @ApiResponse({ status: 200, description: 'Factura eliminada correctamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturasService.remove(+id);
  }
}
