var colorBronce ='#cd7f32';
var colorPlata ='#888c91';
var colorOro = '#ffbf00';
var retornoOro = '$ 780.000';
var retornoPlata = '$ 360.000';
var retornoBronce = '$ 165.000';


function set_simulacion(oportunidad) {
    
    actualiza_data(oportunidad);
}
function actualiza_data(opor=null) {
    if (opor) {
        var option = opor;
        switch (option) {
            case 'ORO':
                
                $("#oportunidad-selected").val("1"); //.change();
                break;
            case 'PLATA':
                $("#oportunidad-selected").val("2"); //.change();
                break;
            case 'BRONCE':
                $("#oportunidad-selected").val("3"); //.change();
                break;
            default:
                break;
        }

    }else{
        var option = $('#oportunidad-selected').find(":selected").text();

    }
    
    switch (option) {
        case "ORO":
            console.log(option);
            $("#final-titulo").text('ORO');
            $("#final-titulo").css("background-color",colorOro);
            $(".total-dolares").text('U$D 4.800');
            $(".total-pesos").text('$ 780.000'); //600000  + 30%
            $(".renta-mes").text('U$D 200');
            $("#retorno-inversion-base").text('$ 780.000');
            
            break;
        case "PLATA":
            $("#final-titulo").text('PLATA');
            $("#final-titulo").css("background-color",colorPlata);
            $(".total-dolares").text('U$D 2.400'); 
            $(".total-pesos").text('$ 360.000'); //300000 +  20%
            $(".renta-mes").text('U$D 100');
            $("#retorno-inversion-base").text('$ 360.000');

            break;
        case "BRONCE":
            $("#final-titulo").text('BRONCE');
            $("#final-titulo").css("background-color",colorBronce);
            $(".total-dolares").text('U$D 1.200');
            $(".total-pesos").text('$ 165.000'); //150000 + 10%
            $(".renta-mes").text('U$D 50');
            $("#retorno-inversion-base").text('$ 165.000');

            break;
        default:
            break;
    }

}