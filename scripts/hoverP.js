let freeway = document.querySelector('.imagemFreeway');
    freeway.addEventListener('mouseover', () => {
        freeway.src = 'assets/gifs/freewayCheia.gif';
    });
    freeway.addEventListener('mouseout', () => {
        freeway.src = 'assets/img/projetos/freewayCheia.png';
    });

    let pingpong = document.querySelector('.imagemPong');
    pingpong.addEventListener('mouseover', () => {
        pingpong.src = 'assets/gifs/pongCheia.gif';
    });
    pingpong.addEventListener('mouseout', () => {
        pingpong.src = 'assets/img/projetos/pong.png';
    });
