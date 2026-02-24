import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FacturasService } from './facturas.service';

@Controller('facturas')
export class FacturasController {
  constructor(private readonly facturasService: FacturasService) {}

  @Get()
  findAll() {
    return this.facturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturasService.findOne(+id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.facturasService.create(dto);
  }
}
