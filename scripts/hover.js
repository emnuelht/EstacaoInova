if (window.matchMedia("(max-width:320px)").matches) {
    for(let i = 0;i < 50;i++){
        console.log("ola mundo");
    }        
} else {
    let hover = document.querySelector('.imgC');
    
    hover.addEventListener('mouseover', ()=>{
        // document.querySelector('.imgC').style.boxShadow = 'inset 0px 800px 500px #000000b1';
        document.querySelector('.imgC').style.boxShadow = 'none'
        document.querySelector('.txtAcesso').style.opacity = '1';
    });
    
    hover.addEventListener('mouseout', ()=> {
        document.querySelector('.imgC').style.boxShadow = '2px 20px 0px #000000, -2px -20px 0px #000000';
        document.querySelector('.txtAcesso').style.opacity = '0';
    });
}
