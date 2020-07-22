
var inicializado = true;
$(document).ready(function(){
    var inicializado = true;
    $('#botaoNews').click(function(){
        if (inicializado == true){
     $('#conteudo').css('visibility', 'visible');
     inicializado = false;
     scrollDown();
     
    }else if (inicializado == false) {
        $('#conteudo').css('visibility', 'hidden');
        inicializado = true;
        scrollUp();
    } 
    //    ('#botaoNews').click(function(){
   //     $('#conteudo').children('div').toggle();
        
    });
});

function scrollDown() {
    
    window.scrollTo(0, 600);
}

function scrollUp() {

    window.scrollTo(0, 0);
}