$(document).ready(function(e){
    e.preventDefault()
})

$(function(){

    $('#btn').click(function () {
        const altura = $('#altura').val();
        const peso = $('#peso').val();
        const imc = peso / (altura * altura);

        if (imc < 16) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de peso muito grave')
        } else if (imc >= 16 && imc <= 16.99) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de peso grave')
        } else if (imc >= 17 && imc <= 18.49) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de peso baixo')
        } else if (imc >= 18.50 && imc <= 24.99) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de peso normal')
        } else if (imc >= 25 && imc <= 29.99) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de sobrepeso')
        } else if (imc >= 30 && imc <= 34.99) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de obesidade grau I')
        } else if (imc >= 35 && imc <= 39.99) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de obesidade grau II')
        } else if (imc >= 40) {
            $('#resultado').html('seu Imc é: ' + imc.toFixed(2) + ' e seu status é de obesidade grau III')
        } 
    })

})