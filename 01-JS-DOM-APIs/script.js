window.onload = function(){
	let makeVisible = document.getElementById('jokeSection');
	let btnLoader = document.getElementById('btnJoke');
	makeVisible.className = "visible";
	btnLoader.onclick = jokeLoader;
}

function jokeLoader(){
	let xmlhttp = new XMLHttpRequest();
	let jokePar = document.getElementById('jokeParagraph');
	let btnLoader = document.getElementById('btnJoke');
	let section = document.getElementById('jokeSection');
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4){
			let status = xmlhttp.status;
			let message = xmlhttp.statusText;
			if(status == 200){
				let data = JSON.parse(xmlhttp.responseText);
				jokePar.innerHTML = data.value.joke;
				btnLoader.innerHTML = 'Load another joke!';
			}
			else{
				section.style.color = 'red';
				jokePar.innerHTML = `An error has ocurred. Server responded: STATUS: ${status}, MESSAGE: ${message}`;			
			}
		}
	}
	xmlhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
	xmlhttp.send();
	
}

const ajaxConfig = {
	//Request URL
	url:"";
	//Method (i.e: GET or POST)
	method:"";
	//Data to send
	data:"";

}

function reusableAjaxRequest(){

}