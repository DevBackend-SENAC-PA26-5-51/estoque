import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsDateString,
} from 'class-validator';

export class EntradaEstoqueDto {
  @IsInt() @IsPositive() quantidade!: number;
  @IsNumber() @IsPositive() valor_unitario!: number;
  @IsInt() fornecedor_idFornecedor!: number;
  @IsInt() usuario_idUsuario!: number;
  @IsOptional() @IsString() lote?: string;
  @IsOptional() @IsDateString() data_validade?: string;
  @IsOptional() @IsString() numero_documento?: string;
}
