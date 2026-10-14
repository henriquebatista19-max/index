const percosLivros = [25, 15, 30, 50, 45, 20];

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++){
    if (precosLivro[atual] < precoslLivros[maisBarato]){
        maisBarato = atual;
    }
}

console.log('O livro mais mais barato custa ${precosLivros[maisBarato]}');