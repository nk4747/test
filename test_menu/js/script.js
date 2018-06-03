item1.onclick = function() {

	var item1 = document.getElementById('item1');
	var sub1 = document.getElementById('sub1');
	var span1 = document.getElementById('span1');

	span1.classList.toggle("show");
	sub1.classList.toggle("show");
	
}


item2.onclick = function() {

	var item2 = document.getElementById('item2');
	var sub2 = document.getElementById('sub2');
	var span2 = document.getElementById('span2');

	sub2.classList.toggle("show2");
	span2.classList.toggle("show2");
	
}

item3.onclick = function() {

	var item3 = document.getElementById('item3');
	var sub3 = document.getElementById('sub3');	
	sub3.classList.toggle("show3");
	
	
}

item4.onclick = function() {

	var item4 = document.getElementById('item4');
	var sub4 = document.getElementById('sub4');	
	sub4.classList.toggle("show4");
	
	
}