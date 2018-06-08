





var townlist = document.getElementsByClassName('headerTownlist')[0];

townlist.onclick = function() {


	var townli = document.querySelectorAll('.headerTownlist > ul > li');


	 for (i = 0; i < townli.length; i++) {
        townli[i].classList.toggle("show");

    }

    townlist.style.position = 'absolute';
	 
}


$(".headerTownlist").on("click", "li", function() {


$(this).prependTo(this.parentNode);

});


var langlist = document.getElementsByClassName('headerLang')[0];

langlist.onclick = function() {


	var langli = document.querySelectorAll('.headerLang > ul > li');


	 for (i = 0; i < langli.length; i++) {
        langli[i].classList.toggle("show1");
    }

     langlist.style.zIndex  = '30';
	 
}


$(".headerLang").on("click", "li", function() {


$(this).prependTo(this.parentNode);



});


var sociallist = document.getElementsByClassName('headerSocials')[0];

sociallist.onclick = function() {


	var socialli = document.getElementsByClassName('headerSocialsDiv')[0];


	socialli.classList.toggle("show2");

	 
}