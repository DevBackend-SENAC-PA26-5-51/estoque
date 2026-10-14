import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Saida_tipo_saida } from '../../../generated/prisma/client.js';

export class SaidaEstoqueDto {
  @ApiProperty({ example: 10, description: 'Quantidade de produtos saída' })
  @IsInt()
  @IsPositive()
  quantidade!: number;

  @ApiProperty({
    enum: Saida_tipo_saida,
    example: 'VENDA',
    description: 'Tipo de saída',
  })
  @IsEnum(Saida_tipo_saida)
  tipo_saida!: Saida_tipo_saida;

  @ApiProperty({ example: 1, description: 'ID do fornecedor/cliente' })
  @IsInt()
  fornecedor_idFornecedor!: number;

  @ApiProperty({ example: 1, description: 'ID do usuário responsável' })
  @IsInt()
  usuario_idUsuario!: number;

  @ApiPropertyOptional({
    example: 'NF-12345',
    description: 'Número do documento fiscal',
  })
  @IsOptional()
  @IsString()
  numero_documento?: string;

  @ApiPropertyOptional({
    example: 'Venda para cliente X',
    description: 'Observação sobre a saída',
  })
  @IsOptional()
  @IsString()
  observacao?: string;

  @ApiPropertyOptional({
    example: 29.99,
    description: 'Valor unitário (opcional)',
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  valor_unitario?: number;
}
