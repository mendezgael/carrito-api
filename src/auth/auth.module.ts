import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [UsuariosModule],
  providers: [AuthService],
})
export class AuthModule {}
