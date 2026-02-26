import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('facturas')
@ApiBearerAuth()
@UseGuards(JwtGuard)
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

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.facturasService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturasService.remove(+id);
  }
}
