import { Module } from '@nestjs/common';
import { DetalleFacturasController } from './detalle-facturas.controller';
import { DetalleFacturasService } from './detalle-facturas.service';

@Module({
  controllers: [DetalleFacturasController],
  providers: [DetalleFacturasService],
})
export class DetalleFacturasModule {}
