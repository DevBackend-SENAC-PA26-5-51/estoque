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
   nome: string;
   descricao?: string;
   estoque_atual: number;
   estoque_minimo: number;
   preco_venda: number;
   codigo_barras?: string;
   data_validade?: Date;
   status: string;

   constructor(nome: string, descricao: string, estoque_atual: number, estoque_minimo: number, preco_venda: number, codigo_barras: string, data_validade: Date, status: string) {
     this.nome = nome;
     this.descricao = descricao;
     this.estoque_atual = estoque_atual;
     this.estoque_minimo = estoque_minimo;
     this.preco_venda = preco_venda;
     this.codigo_barras = codigo_barras;
     this.data_validade = data_validade;
     this.status = status;
   }
}