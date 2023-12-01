import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Criação de um novo grupo
  const newGrupo = await prisma.grupo.create({
    data: {
      nome: 'Timão',
      resumo: 'Ganhou o mundial',
      nota: 0.0,
    },
  });
  
  // Criação de um novo aluno
  const newAluno = await prisma.aluno.create({
    data: {
      matricula: 16122012,
      nome: 'Goleiro Cássio',
      nota: 1.0,
      grupoId: newGrupo.id,
    },
  });
  console.log('Novo aluno registrao: ', newAluno);

  // Criação de um novo avaliador
  const newProfessor = await prisma.professor.create({
    data: {
      nome: 'Tite',
      notas: 1.0,
      grupos: {
        connect: {
          id: newGrupo.id,
        },
      },
    },
  });
  console.log('Novo professor registrado: ', newProfessor);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });