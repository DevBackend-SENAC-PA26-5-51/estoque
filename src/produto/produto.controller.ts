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
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProdutoService } from './produto.service.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { UpdateProdutoDto } from './dto/update-produto.dto.js';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto.js';
import { SaidaEstoqueDto } from './dto/saida-estoque.dto.js';
import { ProdutoEntity } from './entities/produto.entity.js';

@ApiTags('Produtos')
@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo produto' })
  @ApiResponse({
    status: 201,
    description: 'Produto criado com sucesso',
    type: ProdutoEntity,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Post('entrada/:id')
  @ApiOperation({ summary: 'Registrar entrada de estoque' })
  @ApiParam({ name: 'id', description: 'ID do produto', example: 1 })
  @ApiResponse({
    status: 201,
    description: 'Entrada registrada com sucesso',
    type: ProdutoEntity,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  entradaEstoque(
    @Param('id', ParseIntPipe) id: number,
    @Body() entradaEstoqueDto: EntradaEstoqueDto,
  ) {
    return this.produtoService.entradaEstoque(id, entradaEstoqueDto);
  }

  @Post('saida/:id')
  @ApiOperation({ summary: 'Registrar saída de estoque' })
  @ApiParam({ name: 'id', description: 'ID do produto', example: 1 })
  @ApiResponse({
    status: 201,
    description: 'Saída registrada com sucesso',
    type: ProdutoEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos ou estoque insuficiente',
  })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  saidaEstoque(
    @Param('id', ParseIntPipe) id: number,
    @Body() saidaEstoqueDto: SaidaEstoqueDto,
  ) {
    return this.produtoService.saidaEstoque(id, saidaEstoqueDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos',
    type: [ProdutoEntity],
  })
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar produto por ID' })
  @ApiParam({ name: 'id', description: 'ID do produto', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado',
    type: ProdutoEntity,
  })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar produto' })
  @ApiParam({ name: 'id', description: 'ID do produto', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso',
    type: ProdutoEntity,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover produto' })
  @ApiParam({ name: 'id', description: 'ID do produto', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Produto removido com sucesso',
    type: ProdutoEntity,
  })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
