import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto';
import { SaidaEstoqueDto } from './dto/saida-estoque.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }

  async entradaEstoque(id: number, entradaEstoqueDto: EntradaEstoqueDto) {
    const produto = await this.prisma.produto.findUnique({
      where: {
        idProduto: id,
      },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    if (
      !Number.isInteger(entradaEstoqueDto.quantidadeEstoque) ||
      entradaEstoqueDto.quantidadeEstoque <= 0
    ) {
      throw new BadRequestException(
        'A quantidade deve ser um número inteiro maior que zero',
      );
    }

    return this.prisma.produto.update({
      where: {
        idProduto: id,
      },
      data: {
        estoque_atual: {
          increment: entradaEstoqueDto.quantidadeEstoque,
        },
      },
    });
  }

  async saidaEstoque(id: number, saidaEstoqueDto: SaidaEstoqueDto) {
    const produto = await this.prisma.produto.findUnique({
      where: {
        idProduto: id,
      },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    if (
      !Number.isInteger(saidaEstoqueDto.quantidadeEstoque) ||
      saidaEstoqueDto.quantidadeEstoque <= 0
    ) {
      throw new BadRequestException(
        'A quantidade deve ser um número inteiro maior que zero',
      );
    }

    if (produto.estoque_atual < saidaEstoqueDto.quantidadeEstoque) {
      throw new BadRequestException(
        'Estoque insuficiente para realizar a saída',
      );
    }

    return this.prisma.produto.update({
      where: {
        idProduto: id,
      },
      data: {
        estoque_atual: {
          decrement: saidaEstoqueDto.quantidadeEstoque,
        },
      },
    });
  }
}
