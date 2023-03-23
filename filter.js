const alunos = [
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 3 },
    { nome: 'Ana', nota: 10 },
    { nome: 'Carlos', nota: 6 }
];

function filtrarAlunos(notaminima) {
    return alunos.filter(aluno => aluno.nota >= notaminima);
}

const alunosAprovados = filtrarAlunos(6);
console.log(alunosAprovados);