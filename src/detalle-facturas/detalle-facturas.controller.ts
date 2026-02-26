import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DetalleFacturasService } from './detalle-facturas.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags  ('detalle-facturas')
@ApiBearerAuth()
@Controller('detalle-facturas')
export class DetalleFacturasController {
  constructor(private readonly detalleFacturasService: DetalleFacturasService) {}

  @Get()
  findAll() {
    return this.detalleFacturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleFacturasService.findOne(+id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.detalleFacturasService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.detalleFacturasService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleFacturasService.remove(+id);
  }
}
