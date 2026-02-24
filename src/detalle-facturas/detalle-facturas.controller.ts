import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DetalleFacturasService } from './detalle-facturas.service';

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
}
