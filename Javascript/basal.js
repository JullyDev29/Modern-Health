




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
        $('#')
        //$('#resultHomem').text(basal +'kcal/dia');
        $('#basalMulher').css('visibility', 'hidden');

    }else if (generoB == 'm'){
        var basal = 665.1 + (9.56 * pesoB) + (1.8 * alturaB) - (4.7 * idadeB);
        // 665,1 + (9,56 x Peso) + (1,8 x Altura em cm) – (4,7 x Idade).

        $('#basalMulher').css('visibility', 'visible');
        //$('#resultMulher').text(basal +'kcal/dia');
        $('#basalHomen').css('visibility', 'hidden');
    }
    console.log(basal);

   

});
