const frase = "Ame o Poema" //-> ameoP o emA
const fraseMinuscula = frase.toLowerCase()
const fraseSemEspacos = fraseMinuscula.replace(/\s/g, "")
const separarFraseEmArray = fraseSemEspacos.split("")
const inverterPalavra = separarFraseEmArray.reverse()
const juntarPalavra = inverterPalavra.join("")
if(fraseSemEspacos === juntarPalavra){
   console.log("é palindromo")
}