import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsDateString,
} from 'class-validator';
import { Produto_Status } from '../../../generated/prisma/client.js';

export class CreateProdutoDto {
  /*
        model Produto {
        idProduto                       Int                    @id @default(autoincrement())
        nome                            String                 @db.VarChar(255)
        descricao                       String?                @db.Text
        estoque_atual                   Int
        estoque_minimo                  Int
        preco_venda                     Decimal                @db.Decimal(10, 2)
        codigo_barras                   String?                @unique(map: "codigo_barras_UNIQUE") @db.VarChar(50)
        data_validade                   DateTime?              @db.Date
        Status                          Produto_Status
        Categoria_idCategoria           Int
        Local_idLocal                   Int
        Marca_idMarca                   Int?
        Unidade_Medida_idUnidade_Medida Int
        Item_Entrada                    Item_Entrada[]
        Item_Saida                      Item_Saida[]
        Movimentacao_Estoque            Movimentacao_Estoque[]
        Categoria                       Categoria              @relation(fields: [Categoria_idCategoria], references: [idCategoria], onDelete: NoAction, onUpdate: NoAction, map: "fk_Produto_Categoria")
        Local                           Local                  @relation(fields: [Local_idLocal], references: [idLocal], onDelete: NoAction, onUpdate: NoAction, map: "fk_Produto_Local")
        Marca                           Marca?                 @relation(fields: [Marca_idMarca], references: [idMarca], onDelete: NoAction, onUpdate: NoAction, map: "fk_Produto_Marca")
        Unidade_Medida                  Unidade_Medida         @relation(fields: [Unidade_Medida_idUnidade_Medida], references: [idUnidade_Medida], onDelete: NoAction, onUpdate: NoAction, map: "fk_Produto_Unidade_Medida")
        Produto_Fornecedor              Produto_Fornecedor[]

        @@index([Categoria_idCategoria], map: "fk_Produto_Categoria_idx")
        @@index([Local_idLocal], map: "fk_Produto_Local_idx")
        @@index([Marca_idMarca], map: "fk_Produto_Marca_idx")
        @@index([Unidade_Medida_idUnidade_Medida], map: "fk_Produto_Unidade_Medida_idx")
        }
    */
  @IsString() nome!: string;
  @IsOptional() @IsString() descricao?: string;
  @IsInt() estoque_atual!: number;
  @IsInt() estoque_minimo!: number;
  @IsNumber() preco_venda!: number;
  @IsOptional() @IsString() codigo_barras?: string;
  @IsOptional() @IsDateString() data_validade?: string;
  @IsEnum(Produto_Status) status!: Produto_Status;
  @IsInt() categoria_idCategoria!: number;
  @IsInt() local_idLocal!: number;
  @IsOptional() @IsInt() marca_idMarca?: number;
  @IsInt() unidade_medida_idUnidade_Medida!: number;
}
