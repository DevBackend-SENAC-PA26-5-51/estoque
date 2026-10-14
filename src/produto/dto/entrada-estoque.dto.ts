import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class EntradaEstoqueDto {
  @ApiProperty({ example: 50, description: 'Quantidade de produtos entrada' })
  @IsInt()
  @IsPositive()
  quantidade!: number;

  @ApiProperty({ example: 15.5, description: 'Valor unitário do produto' })
  @IsNumber()
  @IsPositive()
  valor_unitario!: number;

  @ApiProperty({ example: 1, description: 'ID do fornecedor' })
  @IsInt()
  fornecedor_idFornecedor!: number;

  @ApiProperty({ example: 1, description: 'ID do usuário responsável' })
  @IsInt()
  usuario_idUsuario!: number;

  @ApiPropertyOptional({
    example: 'LOTE-2024-001',
    description: 'Número do lote',
  })
  @IsOptional()
  @IsString()
  lote?: string;

  @ApiPropertyOptional({
    example: '2025-12-31',
    description: 'Data de validade (YYYY-MM-DD)',
  })
  @IsOptional()
  @IsDateString()
  data_validade?: string;

  @ApiPropertyOptional({
    example: 'NF-12345',
    description: 'Número do documento fiscal',
  })
  @IsOptional()
  @IsString()
  numero_documento?: string;
}
