import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProdutoEntity {
  @ApiProperty({ example: 1, description: 'ID único do produto' })
  idProduto!: number;

  @ApiProperty({ example: 'Produto A', description: 'Nome do produto' })
  nome!: string;

  @ApiPropertyOptional({
    example: 'Descrição do produto',
    description: 'Descrição detalhada',
  })
  descricao?: string | null;

  @ApiProperty({ example: 100, description: 'Quantidade atual em estoque' })
  estoque_atual!: number;

  @ApiProperty({ example: 10, description: 'Quantidade mínima para alerta' })
  estoque_minimo!: number;

  @ApiProperty({ example: 29.99, description: 'Preço de venda do produto' })
  preco_venda!: number;

  @ApiPropertyOptional({
    example: '7891234567890',
    description: 'Código de barras',
  })
  codigo_barras?: string | null;

  @ApiPropertyOptional({
    example: '2025-12-31',
    description: 'Data de validade',
  })
  data_validade?: string | null;

  @ApiProperty({ example: 'Ativo', description: 'Status do produto' })
  status!: string;

  @ApiProperty({ example: 1, description: 'ID da categoria' })
  categoria_idCategoria!: number;

  @ApiProperty({ example: 1, description: 'ID do local de armazenamento' })
  local_idLocal!: number;

  @ApiPropertyOptional({ example: 1, description: 'ID da marca' })
  marca_idMarca?: number | null;

  @ApiProperty({ example: 1, description: 'ID da unidade de medida' })
  unidade_medida_idUnidade_Medida!: number;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'Data de criação',
  })
  createdAt!: Date;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'Data de atualização',
  })
  updatedAt!: Date;
}
