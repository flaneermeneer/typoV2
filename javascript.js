var btnAfzender = document.querySelector('button')
var P = document.querySelector('.displaytekst')
var Tekst = 'RSLT:'


btnAfzender.addEventListener('click', function () {

    var Input = document.querySelector('input').value

    if (!Input) {

        console.log('geen input')

    } else {
        P.textContent = Tekst + Input


    }


})
//a s