//управление выпадающим меню

 var townlist = document.getElementsByClassName('headerTowncheck')[0];


 townlist.onclick = function() {


	var townli = document.querySelectorAll('.headerTowncheck > ul > li');


	 for (i = 0; i < townli.length; i++) {
         townli[i].classList.toggle("show");

     }

     townlist.style.position = 'inherit';
	 
 }


 $(".headerTowncheck").on("click", "li", function() {


 $(this).prependTo(this.parentNode);

 });



//валидация формы


var form = document.querySelector('.serviceForm');

var form2 = document.querySelector('.serviceForm2');

var number = document.getElementById('number');

var number2 = document.getElementById('number2');

var fields = form.querySelectorAll('input');

var fields2 = form2.querySelectorAll('input');


var reg =  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;


var generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = text;
  error.style.position = 'absolute';
  error.style.marginLeft = '720px';

  return error;
};



var removeValidation = function () {
  var errors = form.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};


var removeValidation2 = function () {
  var errors = form2.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};


var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('Поле не может быть пустым', fields[i]);
      var error = generateError('Поле не может быть пустым!');
      form[i].parentElement.insertBefore(error, fields[i]);
    } 
  }
};

var checkFieldsPresence2 = function () {
  for (var i = 0; i < fields2.length; i++) {
    if (!fields2[i].value) {
      console.log('Поле не может быть пустым', fields2[i]);
      var error = generateError('Поле не может быть пустым!');
      form2[i].parentElement.insertBefore(error, fields2[i]);
    } 
  }
};




var checkPhonenumber = function() {

if(reg.test(number.value) == false) {

      console.log('Введиде корректный номер телефона');
      var error = generateError('Введиде корректный номер телефона');
     	number.appendChild(error, number);
      number.parentElement.insertBefore(error, number);
       error.style.marginTop = '30px';
        error.style.marginLeft = '720px';
  
}

};

var checkPhonenumber2 = function() {

if(reg.test(number2.value) == false) {

      console.log('Введиде корректный номер телефона');
      var error = generateError('Введиде корректный номер телефона');
     	number2.appendChild(error, number2);
      number2.parentElement.insertBefore(error, number2);
       error.style.marginTop = '30px';
      error.style.marginLeft = '720px';
  
}

};


form.addEventListener('submit', function (event) {
  event.preventDefault();

  	
 	removeValidation();
  checkFieldsPresence();
  checkPhonenumber(); 

});


form2.addEventListener('submit', function (event) {
  event.preventDefault();

  	
 	
 	removeValidation2();
    checkFieldsPresence2();
   checkPhonenumber2(); 
});



//управление слайдером

var left = document.getElementById('left');
var right= document.getElementById('right');

   var images = document.querySelectorAll('.testimonialsSlider > div');



   var i = 0;

left.onclick = function() {

   images[i].classList.add('fade');

   	i = i - 1; 

   	if(i < 0){

   	i = images.length - 1;

   	}

   	images[i].classList.remove('fade');

   }

right.onclick = function() {

   images[i].classList.add('fade');

   	i = i + 1; 

   	if(i >= images.length){

   		i = 0;

   	}

     	images[i].classList.remove('fade');

   }


   
// управление картой


 
function initMap() {
        var uluru = {lat: 59.930465, lng: 30.321515};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
