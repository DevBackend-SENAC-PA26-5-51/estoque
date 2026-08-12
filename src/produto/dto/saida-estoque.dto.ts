import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
<<<<<<< HEAD
import { Saida_tipo_saida } from '../../../generated/prisma/client.js'
=======
import { Saida_tipo_saida } from '../../../generated/prisma/client.js';
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03

export class SaidaEstoqueDto {
  @IsInt()
  @IsPositive()
  quantidade!: number;

  @IsEnum(Saida_tipo_saida)
  tipo_saida!: Saida_tipo_saida;

  @IsInt()
  fornecedor_idFornecedor!: number;

  @IsInt()
  usuario_idUsuario!: number;

  @IsOptional()
  @IsString()
  numero_documento?: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  valor_unitario?: number;
}