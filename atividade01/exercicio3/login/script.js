function login() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "Thais@" && senha === "1234") {
        document.getElementById("resultado").innerText = "Login feito com sucesso";
    } else {
        document.getElementById("resultado").innerText = "Usuário ou senha inválidos";
    }
}