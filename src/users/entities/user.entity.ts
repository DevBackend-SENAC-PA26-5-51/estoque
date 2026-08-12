// src/users/entity/user.entity.ts

import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty()
  idUsuario!: number;

  @ApiProperty()
  nome!: string;

  @ApiProperty()
  cpf!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  login!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty({
    nullable: true,
  })
  data_nascimento!: Date | null;

  @ApiProperty()
  data_cracao!: Date;

  @ApiProperty({
    nullable: true,
  })
  ultimo_login!: Date | null;

  @ApiProperty()
  Perfil_idPerfil!: number;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}