function Clube(nomeClube) {
    this.nomeClube = nomeClube;
}

function Jogador(nomeClube, posicao, qualidade) {
    this.posicao = posicao;

    let _qualidade = qualidade;

    this.getQualidade = function() {
        return _qualidade;
    } 

    this.setQualidade = function(resultado) {
        if (typeof resultado === 'string') {
            _qualidade = resultado;
        }
    } 

    this.melhora = function() {
        const novaQualidade = _qualidade + ' Excelente';
        _qualidade = novaQualidade;
    }
}

function JogadorJunior(nomeClube) {
    Jogador.call(this, nomeClube, "Meio Campo", "Lançamento");

    this.melhora = function() {
        const novaQualidade = this.getQualidade() + ' Bom';
        this.setQualidade(novaQualidade);
    }
}

function JogadorMirim(nomeClube) {
    Jogador.call(this, nomeClube, "Zagueiro", "Roubo de bola");

    this.melhora = function() {
        const novaQualidade = this.getQualidade() + ' Melhorando';
        this.setQualidade(novaQualidade);
    }
}

const jogador1 = new Jogador("Atlético-MG", "Atacante", "Bola na rede");
const jogador2 = new JogadorJunior("Atlético-MG");
const jogador3 = new JogadorMirim("Atlético-MG");

jogador1.melhora();
console.log(jogador1.getQualidade());

jogador2.melhora();
console.log(jogador2.getQualidade());

jogador3.melhora();
console.log(jogador3.getQualidade());