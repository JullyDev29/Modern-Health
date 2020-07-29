var imcInit = true;
var inicializado = true;
var result ='';
$(document).ready(function(){
    
    var inicializado = true;
    $('#botaoNews').click(function(){
        if (inicializado == true){            
            $('#formIMC').css('visibility', 'visible');
            
     inicializado = false;
            scrollImc();
     
    }else if (inicializado == false) {
        $('#formIMC').css('visibility', 'hidden');
        
        inicializado = true;
        scrollUp();
    } 
   
    
   
    });
    
});

$(document).ready(function(){
    
    var inicializado = true;
    $('#botaoImc').click(function(){
        if (inicializado == true){            
            $('#formIMC').css('visibility', 'visible');
     inicializado = false;
     scrollImc();
     
    }else if (inicializado == false) {
        $('#formIMC').css('visibility', 'hidden');
        inicializado = true;
        scrollUp();
    } 
    //    ('#botaoNews').click(function(){
   //     $('#conteudo').children('div').toggle();
        
   
    });
    
});


function scrollStart(){
    windows.scrollTo(0, 0);
}
function scrollImc() {
    
    window.scrollTo(0, 600);
}

function scrollUp() {

    window.scrollTo(0, 300);
}

function scrollDown(){
    window.scrollTo(0, 800);
}

$('#btnCalc').click(function(){
    var nome = $('#formNome').val();
    var idade = $('#formIdade');
    var altura = $('#formAltura').val();
    var peso = $('#formPeso').val();
    
    $('#clienteNome').text(nome);       
    var resultado = peso / (altura*altura);
    
    if (resultado < 18.5) {
        $("#imcNormal").css('visibility', 'hidden');
        $("#imcMedium").css('visibility', 'hidden');
        $("#imcHigh").css('visibility', 'hidden');
        $("#imcUltra").css('visibility', 'hidden');
        $('#imcSlim').css('visibility', 'visible'); 
        result = 'Desnutrição !';
    }else if(resultado >= 18.5 && resultado <= 24.9){
        $("#imcSlim").css('visibility', 'hidden')
        $("#imcHigh").css('visibility', 'hidden')
        $("#imcUltra").css('visibility', 'hidden')
        $("#imcMedium").css('visibility', 'hidden');
        $('#imcNormal').css('visibility', 'visible');
       
    } else if (resultado > 24.9 &&  resultado <= 30){
        $("#imcSlim").css('visibility', 'hidden')
        $("#imcNormal").css('visibility', 'hidden')
        $("#imcUltra").css('visibility', 'hidden')
        $("#imcHigh").css('visibility', 'hidden');
        $('#imcMedium').css('visibility', 'visible'); 
        
    } else if (resultado > 30 && resultado < 40 ){
        $("#imcSlim").css('visibility', 'hidden')
        $("#imcNormal").css('visibility', 'hidden')
        $("#imcMedium").css('visibility', 'hidden')
        $("#imcUltra").css('visibility', 'hidden')
        $('#imcHigh').css('visibility', 'visible');
        

    } else if (resultado > 40) {
            $("#imcSlim").css('visibility', 'hidden')
            $("#imcNormal").css('visibility', 'hidden')
            $("#imcMedium").css('visibility', 'hidden')
            $("#imcHigh").css('visibility', 'hidden')
            $('#imcUltra').css('visibility', 'visible');
            
    }

    $('#numeroImc').text(resultado.toFixed(2));
    $('#jumboAll').css('visibility', 'visible');
    scrollDown();

    
});


$('#desnuItem').click(function(){
    $('#pills-desnutri').css('visibility','visible');

})

$('#normalItem').click(function(){
    $('#pills-normal').css('visibility','visible');

})

$('#sobreItem').click(function(){
    $('#pills-sobre').css('visibility','visible');

})

$('#obesItem').click(function(){
    $('#pills-obesidade').css('visibility','visible');

})

$('#morbItem').click(function(){
    $('#pills-morbido').css('visibility','visible');

})







$("#botaoBasal").click(function(){
    var pesoB = $("#inputPassword3").val();
    var alturaB = $('#inputPassword2').val();
    var idadeB = $('#inputEmail3').val();    
    var generoB = $("input[name='gridRadios']:checked").val();
    var basal ='nothing';
    
    if (generoB == 'h'){

        var basal = 66.5 + (13.75 * pesoB) + (5 * alturaB ) - (6.8 * idadeB);
        //66,5 + (13,75 x Peso) + (5,0 x Altura em cm) – (6,8 x Idade).
        $('#basalHomem').css('visibility', 'visible');
        $('#resultHomem').text(basal.toFixed(1) + ' kcal/dia');
        $('#basalMulher').css('visibility', 'hidden');

    }else if (generoB == 'm'){

        var basal = 665.1 + (9.56 * pesoB) + (1.8 * alturaB) - (4.7 * idadeB);
        // 665,1 + (9,56 x Peso) + (1,8 x Altura em cm) – (4,7 x Idade).
        $('#basalMulher').css('visibility', 'visible');
        $('#resultMulher').text(basal.toFixed(1) + ' kcal/dia');
        $('#basalHomem').css('visibility', 'hidden');

    }
    

   

});

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input', function(){

    var alimentos = document.querySelectorAll('.nomeAlimento');
    
    if( this.value.length > 0){
        for(var i = 0; i < alimentos.length; i++){
            var alimento = alimentos[i];        
            var nomeDoAlimento = alimento.querySelector('.nomeAl');        
            var valAlimento = nomeDoAlimento.textContent;
            var expressao = new RegExp(this.value, 'i');
            if( expressao.test(valAlimento)){
                
                alimento.classList.remove("alimentoInv");
            }else {
                alimento.classList.add("alimentoInv");               
            }
            }
    } else{
            for (i = 0; i < alimentos.length; i++){
                var alimento = alimentos[i];
                alimento.classList.remove('alimentoInv');
            }
        }
});





