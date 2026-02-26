import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    UsuariosModule,
    JwtModule.register({
      secret: 'secreto_super_seguro',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}