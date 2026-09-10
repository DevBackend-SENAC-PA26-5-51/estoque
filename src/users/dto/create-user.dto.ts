// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do usuário',
  })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({
    example: '12345678901',
    description: 'CPF do usuário (11-14 dígitos)',
  })
  @IsString()
  @Length(11, 14)
  cpf!: string;

  @ApiProperty({ example: 'joao@email.com', description: 'Email do usuário' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'joaosilva', description: 'Login do usuário' })
  @IsString()
  @IsNotEmpty()
  login!: string;

  @ApiProperty({
    example: 'senha123',
    description: 'Senha do usuário (mínimo 6 caracteres)',
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 255)
  senha!: string;

  @ApiProperty({ example: 'Ativo', description: 'Status do usuário' })
  @IsString()
  status!: string;

  @ApiProperty({
    example: '1995-05-20',
    description: 'Data de nascimento (YYYY-MM-DD)',
  })
  @IsDateString()
  data_nascimento!: string;

  @ApiProperty({ example: 1, description: 'ID do perfil do usuário' })
  @IsInt()
  perfilIdPerfil!: number;
}
