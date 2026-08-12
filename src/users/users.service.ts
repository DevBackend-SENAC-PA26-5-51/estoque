import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {

    const hashedPassword = await bcrypt.hash(
      createUserDto.senha,
      roundsOfHashing,
    );

    return this.prisma.usuario.create({
      data: {
        nome: createUserDto.nome,
        cpf: createUserDto.cpf,
        email: createUserDto.email,
        login: createUserDto.login,
        senha: hashedPassword ,
        status: createUserDto.status as any,
        data_nascimento: createUserDto.data_nascimento ? new Date(createUserDto.data_nascimento) : null,
        data_criacao: new Date(),
        Pefil_idPefil: createUserDto.perfilIdPerfil,
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(idUsuario: number) {
    return this.prisma.usuario.findUnique({
      where: { idUsuario },
    });
  }

  async update(idUsuario: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.senha) {
      updateUserDto.senha = await bcrypt.hash(
        updateUserDto.senha,
        roundsOfHashing,
      );
    }
    const data: any = {};
    if (updateUserDto.nome !== undefined) data.nome = updateUserDto.nome;
    if (updateUserDto.cpf !== undefined) data.cpf = updateUserDto.cpf;
    if (updateUserDto.email !== undefined) data.email = updateUserDto.email;
    if (updateUserDto.login !== undefined) data.login = updateUserDto.login;
    if (updateUserDto.senha !== undefined) data.senha = updateUserDto.senha;
    if (updateUserDto.status !== undefined) data.status = updateUserDto.status;
    if (updateUserDto.data_nascimento !== undefined) data.data_nascimento = new Date(updateUserDto.data_nascimento);
    if (updateUserDto.perfilIdPerfil !== undefined) data.Pefil_idPefil = updateUserDto.perfilIdPerfil;

    return this.prisma.usuario.update({
      where: { idUsuario },
      data,
    });
  }

  async remove(idUsuario: number) {
    return this.prisma.usuario.delete({
      where: { idUsuario },
    });
  }
}
