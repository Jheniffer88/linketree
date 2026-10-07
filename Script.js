function ativar() {
    console.log("Botão clicado!");
    const cor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = cor;
    console.log( 'cor de fundo', cor)
}  
 