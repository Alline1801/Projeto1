//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');
let laranja = require('./math'); //nome aleatório por falta de criatividade

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta

    let x = parseInt(q.numA);
    let y = parseInt(q.numB);
    const pessego = ' = '; //nome aleatório por falta de criatividade

    if(q.somar){
        var resultado = laranja.somar(x, y);
    }
    else if(q.multiplicacao){
        var resultado = laranja.multiplicacao(x, y);
    }
    else if(q.dividir){
        var resultado = laranja.dividir(x, y);
    }
    else if(q.subtracao){
        var resultado = laranja.subtracao(x, y);
    }
    else{
        var resultado = 'Voce n selecionou nenhum opcao de operacao!'
    }

    var txt = "Oii " + q.nome + pessego + resultado; //consultando um atributo da url, no caso chamado nome
    res.end(txt); //imprime o texto na tela
}).listen(4000); //porta de conexão