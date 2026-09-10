import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
  IsDate,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum ProdutoStatus {
  Ativo = 'Ativo',
  Inativo = 'Inativo',
}

export class CreateProdutoDto {
  @ApiProperty({ example: 'Produto A', description: 'Nome do produto' })
  @IsString()
  nome!: string;

  @ApiPropertyOptional({
    example: 'Descrição do produto',
    description: 'Descrição detalhada',
  })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({ example: 100, description: 'Quantidade atual em estoque' })
  @IsInt()
  estoque_atual!: number;

  @ApiProperty({ example: 10, description: 'Quantidade mínima para alerta' })
  @IsInt()
  estoque_minimo!: number;

  @ApiProperty({ example: 29.99, description: 'Preço de venda do produto' })
  @IsNumber()
  preco_venda!: number;

  @ApiPropertyOptional({
    example: '7891234567890',
    description: 'Código de barras',
  })
  @IsOptional()
  @IsString()
  codigo_barras?: string;

  @ApiPropertyOptional({
    example: '2025-12-31',
    description: 'Data de validade (YYYY-MM-DD)',
  })
  @IsOptional()
  @Type(()=>Date)
  @IsDate()
  data_validade?: string;

  @ApiProperty({
    enum: ProdutoStatus,
    example: ProdutoStatus.Ativo,
    description: 'Status do produto',
  })
  @IsEnum(ProdutoStatus)
  status!: ProdutoStatus;

  @ApiProperty({ example: 1, description: 'ID da categoria' })
  @IsInt()
  categoria_idCategoria!: number;

  @ApiProperty({ example: 1, description: 'ID do local de armazenamento' })
  @IsInt()
  local_idLocal!: number;

  @ApiPropertyOptional({ example: 1, description: 'ID da marca (opcional)' })
  @IsOptional()
  @IsInt()
  marca_idMarca?: number;

  @ApiProperty({ example: 1, description: 'ID da unidade de medida' })
  @IsInt()
  unidade_medida_idUnidade_Medida!: number;
}
