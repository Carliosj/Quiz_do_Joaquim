function corrigirQuiz() {
    let pontos = 0;

    /* =========================
       PERGUNTA 1
       Cor favorita (Preto)
    ========================= */
    if (document.getElementById("p1a").checked) {
        pontos++;
    }

    /* =========================
       PERGUNTA 2
       Quantos dentes? (32 e só ela)
    ========================= */
    if (
        document.getElementById("p2c").checked &&
        !document.getElementById("p2a").checked &&
        !document.getElementById("p2b").checked &&
        !document.getElementById("p2d").checked
    ) {
        pontos++;
    }

    /* =========================
       PERGUNTA 3
       Mensagem (só verifica se escreveu algo)
    ========================= */
    const mensagem = document.getElementById("mensagem").value.trim();
    if (mensagem !== "") {
        pontos++;
    }

    /* =========================
       PERGUNTA 4
       Data de nascimento
       (AJUSTE A DATA SE PRECISAR)
    ========================= */
    const dataCorreta = "2008-04-08"; // <-- ajuste aqui
    if (document.getElementById("p4").value === dataCorreta) {
        pontos++;
    }

    /* =========================
       PERGUNTA 5
       Enviou imagem
    ========================= */
    const imagem = document.getElementById("p5").files.length;
    if (imagem > 0) {
        pontos++;
    }

    /* =========================
       PERGUNTA 6
       Imagem que combina (sorriso)
    ========================= */
    if (
        document.getElementById("p6c").checked &&
        !document.getElementById("p6a").checked &&
        !document.getElementById("p6b").checked &&
        !document.getElementById("p6d").checked
    ) {
        pontos++;
    }

    /* =========================
       PERGUNTA 7
       Melhor amigo (Alycia)
    ========================= */
    if (document.getElementById("p7").value === "Alycia") {
        pontos++;
    }

    /* =========================
       PERGUNTA 8
       Banda favorita (Charlie Brown Jr)
    ========================= */
    if (document.getElementById("im3").checked) {
        pontos++;
    }

    /* =========================
       PERGUNTA 9
       Jogo favorito (Minecraft)
    ========================= */
    if (document.getElementById("p9").value === "Mine") {
        pontos++;
    }

    /* =========================
       PERGUNTA 10
       O que ele mais gosta de fazer
       (ficar com a namorada)
    ========================= */
    const gostaDe = document.getElementById("p10").value.toLowerCase();
    if (
        gostaDe.includes("ficar com a namorada") ||
        gostaDe.includes("namorada")
    ) {
        pontos++;
    }

    /* =========================
       PERGUNTA 11
       Nota da amizade (10)
    ========================= */
    if (document.getElementById("p11").value === "10") {
        pontos++;
    }


    /* =========================
       RESULTADO FINAL
    ========================= */
    let avaliacao = "";

    if (pontos <= 3) {
        avaliacao = "😬 Cê é burro einnn!! Não conhece nada de mim!";
    } else if (pontos <= 7) {
        avaliacao = "🙂 Deve ser algum conhecido próximo!";
    } else if (pontos <= 9) {
        avaliacao = "😎 Já posso te considerar quase amigo!";
    } else {
        avaliacao = "🔥 VOCÊ É MEU MELHOR AMIGO!";
    }

    document.getElementById("resultado").innerHTML = `
        <strong>Você fez ${pontos} / 10 pontos</strong><br>
        ${avaliacao}
    `;
}
