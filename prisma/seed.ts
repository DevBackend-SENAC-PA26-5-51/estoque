import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client.js';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando o seed...');

  // 1. Categorias Básicas
  const categorias = [
    { nome: 'Informática' },
    { nome: 'Eletrônicos' },
    { nome: 'Escritório' },
    { nome: 'Limpeza' },
    { nome: 'Alimentos' },
  ];

  for (const cat of categorias) {
    await prisma.categoria.upsert({
      where: { nome: cat.nome },
      update: {},
      create: { nome: cat.nome },
    });
  }
  console.log('✅ Categorias inseridas');

  // 2. Unidades de Medida (Necessárias para criar Produto)
  const unidades = [
    { sigla: 'UN', descricao: 'Unidade' },
    { sigla: 'CX', descricao: 'Caixa' },
    { sigla: 'KG', descricao: 'Quilograma' },
    { sigla: 'LT', descricao: 'Litro' },
    { sigla: 'PCT', descricao: 'Pacote' },
  ];

  for (const un of unidades) {
    await prisma.unidade_Medida.upsert({
      where: { sigla: un.sigla },
      update: {},
      create: { sigla: un.sigla, descricao: un.descricao },
    });
  }
  console.log('✅ Unidades de Medida inseridas');

  // 3. Local Padrão no Estoque (Necessário para criar Produto)
  const localPadrao = await prisma.local.findFirst({
    where: { corredor: 'A1' },
  });

  if (!localPadrao) {
    await prisma.local.create({
      data: {
        corredor: 'A1',
        prateleira: 1,
        nivel: 1,
        posicao: 1,
      },
    });
  }
  console.log('✅ Local de estoque padrão inserido');

  // 4. Marcas Iniciais (Opcional, mas útil)
  const marcas = [
    { nome: 'Genérica' },
    { nome: 'Dell' },
    { nome: 'Logitech' },
  ];

  for (const m of marcas) {
    await prisma.marca.upsert({
      where: { nome: m.nome },
      update: {},
      create: { nome: m.nome },
    });
  }
  console.log('✅ Marcas inseridas');

  // 5. Perfis de Usuário (Necessário para futura criação de usuários)
  const perfis = [
    { nome: 'ADMIN', descricao: 'Administrador geral do sistema' },
    { nome: 'OPERADOR', descricao: 'Operador de estoque e movimentações' },
  ];

  for (const p of perfis) {
    await prisma.pefil.upsert({
      where: { nome: p.nome },
      update: {},
      create: { nome: p.nome, descricao: p.descricao },
    });
  }
  console.log('✅ Perfis de usuário inseridos');

  console.log('🚀 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
