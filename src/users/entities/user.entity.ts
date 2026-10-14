// src/users/entity/user.entity.ts

import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty({ example: 1, description: 'ID único do usuário' })
  idUsuario!: number;

  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do usuário',
  })
  nome!: string;

  @ApiProperty({ example: '12345678901', description: 'CPF do usuário' })
  cpf!: string;

  @ApiProperty({ example: 'joao@email.com', description: 'Email do usuário' })
  email!: string;

  @ApiProperty({ example: 'joaosilva', description: 'Login do usuário' })
  login!: string;

  @ApiProperty({ example: 'Ativo', description: 'Status do usuário' })
  status!: string;

  @ApiProperty({
    example: '1995-05-20',
    description: 'Data de nascimento',
    nullable: true,
  })
  data_nascimento!: Date | null;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'Data de criação',
  })
  data_cracao!: Date;

  @ApiProperty({
    example: '2024-01-20T15:45:00Z',
    description: 'Último login',
    nullable: true,
  })
  ultimo_login!: Date | null;

  @ApiProperty({ example: 1, description: 'ID do perfil do usuário' })
  Perfil_idPerfil!: number;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
