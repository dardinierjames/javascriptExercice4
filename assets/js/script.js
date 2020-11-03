document.getElementById('inscription').onclick = showAlert;

function showAlert(){

    var lastName = document.getElementById('lastName').value;
    var firstName = document.getElementById('firstName').value;
    var city = document.getElementById('city').value;

alert('Nom : ' + lastName + '\nPrénom : ' + firstName + '\nVille : ' + city);

}