// src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthEntity } from './entity/auth.entity.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, senha }: LoginDto): Promise<AuthEntity> {
    return this.authService.login(email, senha);
  }
}