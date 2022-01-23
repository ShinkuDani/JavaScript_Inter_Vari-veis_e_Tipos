//Solução 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    // let resultado = string.split("").reverse().join("") === string;
    // return console.log(resultado);

    return string.split("").reverse().join("") === string;

    //join junta todas as palavras do array, nesse caso a string é dividida em letras, é formado um array com essas letras, são colocado ao contrairio( a ultima letra vira a primeira, a penultima vira a segundo e etc), e depois as letras são agrupadas novamente.
}

// verificaPalindromo("ovo");

// verificaPalindromo("gato");

//Solução 2

//omo
//012
//abbab 
//01234 - posições do indice 
//12345 - posição do length
function verificaPalindromo2(string){
    if (!string) return "string Inexistente"

    for(let i = 0; i < string.length / 2 ; i++){
        if (string[i] !== string[string.length - 1 - i]){
            
            return false;
        }
    }   

    return true;
}

console.log(verificaPalindromo2("ovo"));

//console.log(verificaPalindromo2("amanda"));



