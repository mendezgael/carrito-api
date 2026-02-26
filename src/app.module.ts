import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { FacturasModule } from './facturas/facturas.module';
import { DetalleFacturasModule } from './detalle-facturas/detalle-facturas.module';

@Module({
  imports: [UsuariosModule,
            AuthModule,
            ProductosModule,
            FacturasModule,
            DetalleFacturasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
