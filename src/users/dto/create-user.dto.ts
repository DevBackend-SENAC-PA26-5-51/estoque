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
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty()
  @IsString()
  @Length(11, 14)
  cpf!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  login!: string;

  @ApiProperty()
  @IsString()
  @Length(6, 255)
  senha!: string;

  @ApiProperty({
    example: 'Ativo',
  })
  @IsString()
  status!: string;

  @ApiProperty({
    example: '1995-05-20',
  })
  @IsDateString()
  data_nascimento!: string;

  @ApiProperty({
    example: 1,
  })
  @IsInt()
  perfilIdPerfil!: number;
}