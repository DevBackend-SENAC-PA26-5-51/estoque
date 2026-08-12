<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
=======
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto.js';
import { SaidaEstoqueDto } from './dto/saida-estoque.dto.js';
import { Prisma, Produto_Status } from '../../generated/prisma/client.js';
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({
<<<<<<< HEAD
      data: createProdutoDto
=======
      data: {
        nome: createProdutoDto.nome,
        descricao: createProdutoDto.descricao,
        estoque_atual: createProdutoDto.estoque_atual,
        estoque_minimo: createProdutoDto.estoque_minimo,
        preco_venda: createProdutoDto.preco_venda,
        codigo_barras: createProdutoDto.codigo_barras,
        data_validade: createProdutoDto.data_validade,
        Status: createProdutoDto.status as unknown as Produto_Status,
        Categoria_idCategoria: createProdutoDto.categoria_idCategoria,
        Local_idLocal: createProdutoDto.local_idLocal,
        Marca_idMarca: createProdutoDto.marca_idMarca,
        Unidade_Medida_idUnidade_Medida:
          createProdutoDto.unidade_medida_idUnidade_Medida,
      },
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
    });
    */
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.prisma.produto.findUnique({
      where: { idProduto: id },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    try {
      return await this.prisma.produto.update({
        where: { idProduto: id },
        data: {
          nome: updateProdutoDto.nome,
          descricao: updateProdutoDto.descricao,
          estoque_atual: updateProdutoDto.estoque_atual,
          estoque_minimo: updateProdutoDto.estoque_minimo,
          preco_venda: updateProdutoDto.preco_venda,
          codigo_barras: updateProdutoDto.codigo_barras,
          data_validade: updateProdutoDto.data_validade,
          Status: updateProdutoDto.status as unknown as Produto_Status,
          Categoria_idCategoria: updateProdutoDto.categoria_idCategoria,
          Local_idLocal: updateProdutoDto.local_idLocal,
          Marca_idMarca: updateProdutoDto.marca_idMarca,
          Unidade_Medida_idUnidade_Medida:
            updateProdutoDto.unidade_medida_idUnidade_Medida,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Código de barras já cadastrado');
      }
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }

  async entradaEstoque(id: number, dto: EntradaEstoqueDto) {
    return this.prisma.$transaction(async (tx) => {
      const produto = await tx.produto.findUnique({ where: { idProduto: id } });
      if (!produto) throw new NotFoundException('Produto não encontrado');

      const entrada = await tx.entrada.create({
        data: {
          data_entrada: new Date(),
          numero_documento: dto.numero_documento,
          Fornecedor_idFornecedor: dto.fornecedor_idFornecedor,
          Usuario_idUsuario: dto.usuario_idUsuario,
          Item_Entrada: {
            create: {
              quantidade: dto.quantidade,
              valor_unitario: dto.valor_unitario,
              lote: dto.lote,
              data_validade: dto.data_validade,
              Produto_idProduto: id,
            },
          },
        },
      });

      await tx.produto.update({
        where: { idProduto: id },
        data: { estoque_atual: { increment: dto.quantidade } },
      });

      return entrada;
    });
  }

  async saidaEstoque(id: number, dto: SaidaEstoqueDto) {
    return this.prisma.$transaction(async (tx) => {
      const produto = await tx.produto.findUnique({
        where: { idProduto: id },
      });

      if (!produto) {
        throw new NotFoundException('Produto não encontrado');
      }

      if (produto.estoque_atual < dto.quantidade) {
        throw new BadRequestException(
          'Estoque insuficiente para realizar a saída',
        );
      }

      const saida = await tx.saida.create({
        data: {
          tipo_saida: dto.tipo_saida,
          numero_documento: dto.numero_documento,
          data_saida: new Date(),
          observacao: dto.observacao,
          Fornecedor_idFornecedor: dto.fornecedor_idFornecedor,
          Usuario_idUsuario: dto.usuario_idUsuario,
          Item_Saida: {
            create: {
              quantidade: dto.quantidade,
              valor_unitario: dto.valor_unitario ?? produto.preco_venda,
              observacao: dto.observacao,
              Produto_idProduto: id,
            },
          },
        },
        include: { Item_Saida: true },
      });

      await tx.produto.update({
        where: { idProduto: id },
        data: { estoque_atual: { decrement: dto.quantidade } },
      });

      return saida;
    });
  }
}
