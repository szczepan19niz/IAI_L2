
//3
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();




let send = document.querySelector(".btn-success");
send.addEventListener("click", checkForm);


function addClass(element, className) {
      element.classList.add(className);
}

function removeClass(element, className) {
      element.classList.remove(className);
}

function checkForm() {
    
      let name = document.querySelector("#name");   
      let nameValue = name.value;
      let invalidFieldName = document.getElementById('user_name_invalid');
      let validFieldName = document.getElementById('user_name_valid');

      let surname = document.querySelector("#surname");   
      let surnameValue = surname.value;
      let invalidFieldSurname = document.getElementById('user_surname_invalid');
      let validFieldSurname = document.getElementById('user_surname_valid');

      let age = document.querySelector("#age");
      let ageValue = age.value;
      let invalidFieldAge = document.getElementById('user_age_invalid');
      let validFieldAge = document.getElementById('user_age_valid');

      
    // walidacja pola "name"
    if(nameValue === '') { 
        addClass(name, 'is-invalid');
        removeClass(name, 'is-valid');
        invalidFieldName.innerHTML =" ** Pole nie może być puste!";
        validFieldName.innerHTML = "";       
    } 
    else if(parseInt(nameValue)){
        addClass(name, 'is-invalid');
        removeClass(name, 'is-valid');
        invalidFieldName.innerHTML =" ** Tylko litery!";
        validFieldName.innerHTML = "";    
    }
    else {
        removeClass(name, 'is-invalid');
        addClass(name, 'is-valid');
        validFieldName.innerHTML = "** OK!";
        invalidFieldName.innerHTML ="";
    }
      

    // walidacja pola "surname"
    if(surnameValue === '') { 
        addClass(surname, 'is-invalid');
        removeClass(surname, 'is-valid');
        invalidFieldSurname.innerHTML =" ** Pole nie może być puste!";
        validFieldSurname.innerHTML = "";       
    } 
    else if(parseInt(surnameValue)){
          addClass(surname, 'is-invalid');
          removeClass(surname, 'is-valid');
          invalidFieldSurname.innerHTML =" ** Tylko litery!";
          validFieldSurname.innerHTML = "";    
      }
    else {
        removeClass(surname, 'is-invalid');
        addClass(surname, 'is-valid');
        validFieldSurname.innerHTML = "** OK!";
        invalidFieldSurname.innerHTML ="";
    }  


    // walidacja pola "number"
    if (ageValue === '') {
        addClass(age, 'is-invalid');
        removeClass(age, 'is-ivalid');
        invalidFieldAge.innerHTML = "** Pole nie może być puste!";
        validFieldAge.innerHTML ="";
    } 
    else if(!parseInt(ageValue) || isNaN(ageValue) || ageValue < 1 || ageValue > 100){  
        addClass(age, 'is-invalid');
        removeClass(age, 'is-ivalid');
        invalidFieldAge.innerHTML = "** Wiek musi być liczbą z zakresu 1-100!";
        validFieldAge.innerHTML ="";
    }
    else {
        removeClass(age, 'is-invalid');
        addClass(age, 'is-valid');
        validFieldAge.innerHTML = "** OK!";
        invalidFieldAge.innerHTML ="";
    }

}
