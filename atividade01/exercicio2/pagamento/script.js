
function calcular() {

    // Pegando os valores do HTML
    let preco = Number(document.getElementById("preco").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let pagamento = document.getElementById("pagamento").value;

    // Calculando o subtotal
    let subtotal = preco * quantidade;

    let desconto = 0;

    // Verificando a forma de pagamento
    if (pagamento == "dinheiro") {
        desconto = subtotal * 0.10;
    } 
    else if (pagamento == "pix") {
        desconto = subtotal * 0.05;
    } 
    else if (pagamento == "cartao") {
        desconto = 0;
    }

    // Calculando o total
    let total = subtotal - desconto;

    // Criando o resultado
    let resultado = `
        <h2>Resultado</h2>
        <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p>Total: R$ ${total.toFixed(2)}</p>
    `;

    // Se o pagamento for em dinheiro
    if (pagamento == "dinheiro") {

        let valorEntregue = Number(document.getElementById("valorEntregue").value);

        let troco = valorEntregue - total;

        resultado += `
            <p>Valor entregue: R$ ${valorEntregue.toFixed(2)}</p>
            <p>Troco: R$ ${troco.toFixed(2)}</p>
        `;
    }

    // Mostrando na página
    document.getElementById("resultado").innerHTML = resultado;
}

