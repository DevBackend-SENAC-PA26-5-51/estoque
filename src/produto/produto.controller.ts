import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProdutoService } from './produto.service.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto.js';
import { SaidaEstoqueDto } from './dto/saida-estoque.dto.js';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Post('entrada/:id')
  entradaEstoque(
    @Param('id', ParseIntPipe) id: number,
    @Body() entradaEstoqueDto: EntradaEstoqueDto,
  ) {
    return this.produtoService.entradaEstoque(id, entradaEstoqueDto);
  }

  @Post('saida/:id')
  saidaEstoque(
    @Param('id', ParseIntPipe) id: number,
    @Body() saidaEstoqueDto: SaidaEstoqueDto,
  ) {
    return this.produtoService.saidaEstoque(id, saidaEstoqueDto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
