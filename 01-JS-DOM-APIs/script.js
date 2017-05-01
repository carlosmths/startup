window.onload = function(){
	const makeVisible = document.getElementById('jokeSection');
	const btnLoader = document.getElementById('btnJoke');
	const btnRepoData = document.getElementById('btnRepoData');
	const btnCreateTable = document.getElementById('btnCreateTable');
	makeVisible.className = "visible";
	// btnLoader.onclick = jokeLoader;
	btnLoader.onclick = getJoke;
	btnRepoData.onclick = getRepositoryData;
	btnCreateTable.onclick = matrixToTable;
}

//First jokeLoader function. Not used after makeAjaxRequest was made.
/*---------------------------------------------------------------------------*/
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
/*---------------------------------------------------------------------------*/

//Configuration object that will be used on reusableAjaxRequest() function.
//Will be variable instead of constant, to be modified afterwards.
var ajaxConfig = {
	//Request URL
	url:'',
	//Method (i.e. GET or POST). Default is GET
	method:'GET',
	//Data to send
	parameters:''
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
		if(config.method == 'GET'){
			config.url += `?q=${config.parameters}`
		}
		else{
			reject(`Can´t use method ${config.method} on this request`)
		}
		xmlhttp.open(config.method, config.url, true);
		xmlhttp.send(config.parameters);
	})
	return getData;
}

const getAndPrint = (cfg, elementToFill, lookFor) => {
	makeAjaxRequest(cfg)
	.then(result => {
		const data = JSON.parse(result);
		if(lookFor == 'getJoke'){
			printData(elementToFill, data.value.joke);
			changeBtnText();
		}
		else if(lookFor == 'getRepo'){
			removeChilds(elementToFill);
			processList(elementToFill, data);
		}
		else{
			printData(elementToFill, `Parameter: ${lookFor} not recognized`)
		}
	})
	.catch(error => {
		elementToFill.className += ' error';
		printData(elementToFill, error)
	});
}

const printData = (element,text) => {
	element.innerHTML = text
}

const changeBtnText = () => {
	document.getElementById('btnJoke').innerHTML = 'Load another joke!';
}

const getJoke = () => {
	const jokeContainer = document.getElementById('jokeParagraph'); 
	ajaxConfig.url = 'http://api.icndb.com/jokes/random';
	getAndPrint(ajaxConfig, jokeContainer, 'getJoke');
}

const getRepositoryData = () => {
	const dataContainer = document.getElementById('repoContainer');
	ajaxConfig.url = 'https://api.github.com/search/repositories';
	const search = document.getElementById('txtSearch').value;
	ajaxConfig.parameters = `${search}`;
	getAndPrint(ajaxConfig, dataContainer, 'getRepo');
}

const processList = (element, list) => {
	const items = list.items;
	const repoContainer = element;
	items.forEach(makeList);
}

const makeList = (items, index) => {
	console.log(`items[${index}] = ${items.full_name}`);
	let li = document.createElement('li');
	let textNode = document.createTextNode(`${items.full_name}`);
	li.appendChild(textNode);
	repoContainer.appendChild(li);
}

//Removes childs from given element to stop adding elements to the DOM. Must be invoked before appending childs in functions.
const removeChilds = (element) => {
	while(element.firstChild){
		element.removeChild(element.firstChild);
	}
}

/*---------------------------------------------------------------------------*/

const matrixToTable = () => {
	const tableSection = document.getElementById('tableSection');
	removeChilds(tableSection);
	const table = document.createElement('table');
	table.className = 'table';
	const tableBody = document.createElement('tbody');
	tableBody.className = 'tbody';
	matrix.forEach(function(rowData) {
	    const row = document.createElement('tr');

	    rowData.forEach(function(cellData) {
			const cell = document.createElement('td');
			cell.appendChild(document.createTextNode(cellData));
			row.appendChild(cell);
	    });

	    tableBody.appendChild(row);
  	});

  table.appendChild(tableBody);
  const section = document.getElementById('tableSection')
  section.appendChild(table);
}

const matrix = [['Row1-Cell1', 'Row1-Cell2', 'Row1-Cell3'], 
 ['Row2-Cell1', 'Row2-Cell2', 'Row2-Cell3'], ['Row3-Cell1', 'Row3-Cell2', 'Row3-Cell3']];