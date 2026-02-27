import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

  @ApiProperty({
    example: 'gael@email.com',
    description: 'Correo electrónico del usuario',
  })
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  password!: string;

  @ApiProperty({
    example: 'Gael Martínez',
    description: 'Nombre completo del usuario',
  })
  nombreCompleto!: string;

  @ApiProperty({
    example: '40123456',
    description: 'Documento Nacional de Identidad',
  })
  dni!: string;

  @ApiProperty({
    example: '1998-05-21',
    description: 'Fecha de nacimiento del usuario',
    type: String,
    format: 'date',
  })
  fechaNacimiento!: Date;

  @ApiProperty({
    example: 'Masculino',
    description: 'Sexo del usuario',
  })
  sexo!: string;

  @ApiProperty({
    example: 'Soltero',
    description: 'Estado civil del usuario',
  })
  estadoCivil!: string;
}