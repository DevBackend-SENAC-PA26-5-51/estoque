// src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service.js';
import { AuthEntity } from './entity/auth.entity.js';
import { LoginDto } from './dto/login.dto.js';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso',
    type: AuthEntity,
  })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async login(@Body() { email, senha }: LoginDto): Promise<AuthEntity> {
    return this.authService.login(email, senha);
  }
}
