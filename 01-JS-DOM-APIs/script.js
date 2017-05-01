window.onload = function(){
	const makeVisible = document.getElementById('jokeSection');
	const btnLoader = document.getElementById('btnJoke');
	makeVisible.className = "visible";
	// btnLoader.onclick = jokeLoader;
	btnLoader.onclick = getJoke;
}

const jokeLoader = () => {
	const xmlhttp = new XMLHttpRequest();
	const jokePar = document.getElementById('jokeParagraph');
	const btnLoader = document.getElementById('btnJoke');
	const section = document.getElementById('jokeSection');
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

//Configuration object that will be used on reusableAjaxRequest() function
const ajaxConfig = {
	//Request URL
	url:'http://api.icndb.com/jokes/random',
	//Method (i.e. GET or POST)
	method:'GET'
}

const makeAjaxRequest = config => {
	const xmlhttp = new XMLHttpRequest();
	const jokePar = document.getElementById('jokeParagraph');
	const btnLoader = document.getElementById('btnJoke');
	
	const getData = new Promise((resolve, reject) => {
		xmlhttp.onload = () => {
			let status = xmlhttp.status;
			let message = xmlhttp.statusText;
			if(status == 200){
				resolve(xmlhttp.responseText)
			}
			else{
				reject(`Request failed. Server responded with message: ${message}`)
			}
		}
		xmlhttp.onerror = () => {
			reject('Request Error!');
		}
		xmlhttp.open(config.method, config.url, true);
		xmlhttp.send();
	})
	return getData;
}

const getAndPrint = (cfg) => {
	makeAjaxRequest(cfg)
	.then(result => {
		const data = JSON.parse(result);
		printData('jokeParagraph', data.value.joke);
	})
	.catch(error => {
		const section = document.getElementById('jokeSection');
		section.style.color = 'red';
		printData('jokeParagraph', error)
	});
}

const printData = (id,text) => {
	document.getElementById(id).innerHTML = text
}

const getJoke = () => {
	getAndPrint(ajaxConfig)
}