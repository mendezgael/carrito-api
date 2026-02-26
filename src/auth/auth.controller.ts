import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from 'src/usuarios/dto';
import { LoginDto } from 'src/usuarios/dto/login.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
    private readonly usuariosService: UsuariosService,
    private readonly authService: AuthService,
  ) {}

    @Post('register')
      register(@Body() dto: RegisterDto) {
        const result = this.usuariosService.register(dto);
        if (result.error) {
          return result;
        }
        return result;
      }
    
      @Post('login')
      login(@Body() dto: LoginDto) {
        const result = this.usuariosService.login(dto);
        if (result.error) {
          return result;
        }
        // Generar JWT token
        const token = this.authService.generateToken(result.user.id, result.user.email);
        return { user: result.user, ...token };
      }

}
