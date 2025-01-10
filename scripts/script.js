let quantidadeEstoque = 12
let erromin = document.getElementById('quantidade-min')
let valorItem = document.getElementById('valor-do-item')
let quantidadeItens = document.getElementById('quantidades')
let quantidade = 1
let valor = 267.89 
let imprimirEstoque = document.getElementById('estoque')
imprimirEstoque.textContent= quantidadeEstoque
valorItem.textContent = 'R$'+ valor.toString().replace(".", ",");
quantidadeItens.textContent = quantidade
function somar() {  
    if(quantidade < quantidadeEstoque){
        quantidade++
        let valorcomsoma  = valor * quantidade
        valorItem.textContent = 'R$'+ valorcomsoma.toFixed(2).toString().replace(".", ",");
        quantidadeItens.textContent = quantidade
        console.log(quantidade)
    }else {
        erromin.style.color = 'red'
        erromin.textContent = `A quantidade em estoque atual é de ${quantidadeEstoque} !`
    }
    
}

function subtrair() {
    if(quantidade == 1){
        erromin.style.color = 'red'
        erromin.textContent = "A quantidade minima é de 1 pacote!"
    }else {
        quantidade--
        let valorsub  = valor * quantidade
        valorItem.textContent = 'R$'+ valorsub.toFixed(2).toString().replace(".", ",");
        quantidadeItens.textContent = quantidade
        console.log(quantidade)
    }
    
}
const lupa = document.querySelector('.lupa');
const container = lupa.parentElement;

container.addEventListener('mousemove', (event) => {
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  lupa.style.transformOrigin = `${x}px ${y}px`;
});


