document.getElementById("forms-vt").addEventListener('submit', function formulario(){
    let nome = document.querySelector('#nome').value;
    let matricula = document.querySelector('#matricula').value;
    let itinerario = document.querySelector('#itinerario').value;
    let valeTrans = document.querySelector('#valeTransporte').value;
    let subject = document.querySelector('#subject').value;

    let texto = 'Eu' + nome + 'matricula: ' + matricula + 'solicito' + valeTrans;
    document.querySelector('#body').setAttribute('value', texto);
    document.querySelector('#subject').setAttribute('href', subject);
    document.getElementsByTagName('a').setAttribute('href', 'mailto:henrique.koller@pmtb.pr.gov.br?Subject='+ subject +'&Body='+ texto);
});