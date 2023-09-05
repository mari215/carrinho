const produtos = [
    {
        id:"2",
        nome: "Infórmatica para Internet: Interfaces Web II",
        prof:"Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/1.png",
    },
    {
        id: "2",
        nome: "Gestão de conteúdo Web II",
        prof: "Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/3.png"
    },
];

function renderizaProdutos() {
    let html = "";
    for(let i =0; i < produtos.length; i++){
        html = html + criaProduto(produtos[i], i);
    }
    return html;
}

function criaProduto(produtos, index) {
    return `<div class="curso">
    <img class="inicio" title="t" src="${produtos.imagem}" />
    <div class="curso-info">
      <h4>${produtos.nome}</h4>
      <p>${produtos.prof}</p>
      <p>${produtos.descricao}</p>
    </div>
    <div class="curso-preco">
      <span class="curso-preco">R$${produtos.preco_de}</span>
      <span class="preco-por">R${produtos.preco_por}</span>
      <button class="btncar btn-add" data-index="${index}"></button>
    </div>
  </div>`;
}

const container = document.querySelector("#container")
container.innerHTML = renderizaProdutos();

const carrinhoItens = {};
function renderizaCarrinho() {
    let html= '';
    for(let produtoId in carrinhoItens) {
        html = html + criaItemCarrinho(carrinhoItens[produtoId]);
    }
    document.querySelector('.carrinho_itens').innerHTML = html;
}

function criaItemCarrinho(produtos) {
    return `<div class="carrinho_compra">
    <h4>${produtos.nome}</h4>
    <p>Preço unidade:${produtos.preco_por} Quantidade:${produtos.quantidade}</p>
    <p>Valor:R$:${produtos,preco_por*produtos.quantidade}</p>
    <button data-produto-id="${produtos.id}" class="btn-remove"></button>
  </div>`;
}

function criaCarrinhoTotal() {
    let total = 0;
    for(let produtoId in carrinhoItens) {
        total = total + carrinhoItens[produtoId].preco_por * carrinhoItens[produtoId].quantidade;
    }
    document.querySelector('.carrinho_total').innerHTML = 
    `<h4>Total: <strong>R$${total}</strong></h4>
    <a href="#" target="_blank">
      <ion-icon name="card-outline"></ion-icon>
      <strong>Comprar Agora</strong>
    </a>`;
}

