-- CreateTable
CREATE TABLE `Categoria` (
    `idCategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `nome_UNIQUE`(`nome`),
    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entrada` (
    `idEntrada` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_documento` VARCHAR(30) NULL,
    `data_entrada` DATETIME(0) NOT NULL,
    `observacao` TEXT NULL,
    `Fornecedor_idFornecedor` INTEGER NOT NULL,
    `Usuario_idUsuario` INTEGER NOT NULL,

    INDEX `fk_Entrada_Fornecedor_idx`(`Fornecedor_idFornecedor`),
    INDEX `fk_Entrada_Usuario_idx`(`Usuario_idUsuario`),
    PRIMARY KEY (`idEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedor` (
    `idFornecedor` INTEGER NOT NULL AUTO_INCREMENT,
    `razao_social` VARCHAR(150) NOT NULL,
    `nome_fantasia` VARCHAR(150) NULL,
    `cnpj` VARCHAR(18) NOT NULL,
    `telefone` VARCHAR(20) NULL,
    `email` VARCHAR(120) NOT NULL,
    `endereco` VARCHAR(150) NULL,
    `numero_endereco` VARCHAR(10) NULL,
    `bairro` VARCHAR(80) NULL,
    `cidade` VARCHAR(80) NULL,
    `uf` CHAR(2) NULL,
    `cep` VARCHAR(9) NULL,
    `status` ENUM('Ativo', 'Inativo') NOT NULL,

    UNIQUE INDEX `cnpj_UNIQUE`(`cnpj`),
    PRIMARY KEY (`idFornecedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item_Entrada` (
    `idItem_Entrada` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `valor_unitario` DECIMAL(10, 2) NOT NULL,
    `lote` VARCHAR(50) NULL,
    `data_validade` DATE NULL,
    `Produto_idProduto` INTEGER NOT NULL,
    `Entrada_idEntrada` INTEGER NOT NULL,

    INDEX `fk_Item_Entrada_Entrada_idx`(`Entrada_idEntrada`),
    INDEX `fk_Item_Entrada_Produto_idx`(`Produto_idProduto`),
    PRIMARY KEY (`idItem_Entrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item_Saida` (
    `idItem_Saida` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `valor_unitario` DECIMAL(10, 2) NOT NULL,
    `observacao` TEXT NULL,
    `Produto_idProduto` INTEGER NOT NULL,
    `Saida_idSaida` INTEGER NOT NULL,

    INDEX `fk_Item_Saida_Produto_idx`(`Produto_idProduto`),
    INDEX `fk_Item_Saida_Saida_idx`(`Saida_idSaida`),
    PRIMARY KEY (`idItem_Saida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Local` (
    `idLocal` INTEGER NOT NULL AUTO_INCREMENT,
    `corredor` VARCHAR(20) NULL,
    `prateleira` INTEGER NULL,
    `nivel` INTEGER NULL,
    `posicao` INTEGER NULL,

    UNIQUE INDEX `corredor_UNIQUE`(`corredor`),
    UNIQUE INDEX `prateleira_UNIQUE`(`prateleira`),
    UNIQUE INDEX `nivel_UNIQUE`(`nivel`),
    UNIQUE INDEX `posicao_UNIQUE`(`posicao`),
    PRIMARY KEY (`idLocal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marca` (
    `idMarca` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `nome_UNIQUE`(`nome`),
    PRIMARY KEY (`idMarca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movimentacao_Estoque` (
    `idMovimentacao` INTEGER NOT NULL,
    `tipo_movimentacao` ENUM('Entrada', 'Saída', 'Ajuste', 'Transferência') NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `data_movimentacao` DATETIME(0) NOT NULL,
    `observacao` TEXT NULL,
    `Local_idLocal` INTEGER NOT NULL,
    `Produto_idProduto` INTEGER NOT NULL,
    `Usuario_idUsuario` INTEGER NOT NULL,

    INDEX `fk_Movimentacao_Estoque_Local_idx`(`Local_idLocal`),
    INDEX `fk_Movimentacao_Estoque_Produto_idx`(`Produto_idProduto`),
    INDEX `fk_Movimentacao_Estoque_Usuario_idx`(`Usuario_idUsuario`),
    PRIMARY KEY (`idMovimentacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pefil` (
    `idPefil` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(255) NULL,

    UNIQUE INDEX `nome_UNIQUE`(`nome`),
    PRIMARY KEY (`idPefil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `idProduto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT NULL,
    `estoque_atual` INTEGER NOT NULL,
    `estoque_minimo` INTEGER NOT NULL,
    `preco_venda` DECIMAL(10, 2) NOT NULL,
    `codigo_barras` VARCHAR(50) NULL,
    `data_validade` DATE NULL,
    `Status` ENUM('Ativo', 'Inativo') NOT NULL,
    `Categoria_idCategoria` INTEGER NOT NULL,
    `Local_idLocal` INTEGER NOT NULL,
    `Marca_idMarca` INTEGER NULL,
    `Unidade_Medida_idUnidade_Medida` INTEGER NOT NULL,

    UNIQUE INDEX `codigo_barras_UNIQUE`(`codigo_barras`),
    INDEX `fk_Produto_Categoria_idx`(`Categoria_idCategoria`),
    INDEX `fk_Produto_Local_idx`(`Local_idLocal`),
    INDEX `fk_Produto_Marca_idx`(`Marca_idMarca`),
    INDEX `fk_Produto_Unidade_Medida_idx`(`Unidade_Medida_idUnidade_Medida`),
    PRIMARY KEY (`idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto_Fornecedor` (
    `idProduto_Fornecedor` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_produto_fornecedor` VARCHAR(50) NULL,
    `preco_compra` DECIMAL(10, 2) NOT NULL,
    `prazo_entrega` INTEGER NULL,
    `ultima_compra` DATE NULL,
    `Produto_idProduto` INTEGER NOT NULL,
    `Fornecedor_idFornecedor` INTEGER NOT NULL,

    INDEX `fk_Produto_Fornecedor_Fornecedor_idx`(`Fornecedor_idFornecedor`),
    INDEX `fk_Produto_Fornecedor_Produto_idx`(`Produto_idProduto`),
    PRIMARY KEY (`idProduto_Fornecedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saida` (
    `idSaida` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_saida` ENUM('Venda', 'Devolucão', 'Consumo Interno', 'Transferência') NOT NULL,
    `numero_documento` VARCHAR(30) NULL,
    `data_saida` DATETIME(0) NOT NULL,
    `observacao` TEXT NULL,
    `Usuario_idUsuario` INTEGER NOT NULL,
    `Fornecedor_idFornecedor` INTEGER NOT NULL,

    INDEX `fk_Saida_Fornecedor_idx`(`Fornecedor_idFornecedor`),
    INDEX `fk_Saida_Usuario_idx`(`Usuario_idUsuario`),
    PRIMARY KEY (`idSaida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unidade_Medida` (
    `idUnidade_Medida` INTEGER NOT NULL AUTO_INCREMENT,
    `sigla` VARCHAR(10) NOT NULL,
    `descricao` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `sigla_UNIQUE`(`sigla`),
    PRIMARY KEY (`idUnidade_Medida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `status` ENUM('Ativo', 'Inativo', 'Bloqueado') NOT NULL,
    `data_nascimento` DATE NULL,
    `data_criacao` DATETIME(0) NOT NULL,
    `ultimo_login` DATETIME(0) NULL,
    `Pefil_idPefil` INTEGER NOT NULL,

    UNIQUE INDEX `cpf_UNIQUE`(`cpf`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `login_UNIQUE`(`login`),
    INDEX `fk_Usuario_Pefil_idx`(`Pefil_idPefil`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entrada` ADD CONSTRAINT `fk_Entrada_Fornecedor` FOREIGN KEY (`Fornecedor_idFornecedor`) REFERENCES `Fornecedor`(`idFornecedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Entrada` ADD CONSTRAINT `fk_Entrada_Usuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Item_Entrada` ADD CONSTRAINT `fk_Item_Entrada_Entrada` FOREIGN KEY (`Entrada_idEntrada`) REFERENCES `Entrada`(`idEntrada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Item_Entrada` ADD CONSTRAINT `fk_Item_Entrada_Produto` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Item_Saida` ADD CONSTRAINT `fk_Item_Saida_Produto` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Item_Saida` ADD CONSTRAINT `fk_Item_Saida_Saida` FOREIGN KEY (`Saida_idSaida`) REFERENCES `Saida`(`idSaida`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Movimentacao_Estoque` ADD CONSTRAINT `fk_Movimentacao_Estoque_Local` FOREIGN KEY (`Local_idLocal`) REFERENCES `Local`(`idLocal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Movimentacao_Estoque` ADD CONSTRAINT `fk_Movimentacao_Estoque_Produto` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Movimentacao_Estoque` ADD CONSTRAINT `fk_Movimentacao_Estoque_Usuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `fk_Produto_Categoria` FOREIGN KEY (`Categoria_idCategoria`) REFERENCES `Categoria`(`idCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `fk_Produto_Local` FOREIGN KEY (`Local_idLocal`) REFERENCES `Local`(`idLocal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `fk_Produto_Marca` FOREIGN KEY (`Marca_idMarca`) REFERENCES `Marca`(`idMarca`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `fk_Produto_Unidade_Medida` FOREIGN KEY (`Unidade_Medida_idUnidade_Medida`) REFERENCES `Unidade_Medida`(`idUnidade_Medida`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto_Fornecedor` ADD CONSTRAINT `fk_Produto_Fornecedor_Fornecedor` FOREIGN KEY (`Fornecedor_idFornecedor`) REFERENCES `Fornecedor`(`idFornecedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Produto_Fornecedor` ADD CONSTRAINT `fk_Produto_Fornecedor_Produto` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Saida` ADD CONSTRAINT `fk_Saida_Fornecedor` FOREIGN KEY (`Fornecedor_idFornecedor`) REFERENCES `Fornecedor`(`idFornecedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Saida` ADD CONSTRAINT `fk_Saida_Usuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `fk_Usuario_Pefil` FOREIGN KEY (`Pefil_idPefil`) REFERENCES `Pefil`(`idPefil`) ON DELETE NO ACTION ON UPDATE NO ACTION;
