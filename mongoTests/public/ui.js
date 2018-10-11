const server = 'http://localhost:3000';

$(() => {
	const recordsSection = $('div#recordsSection');
	requestRecords();

	$('div#recordsSection').on("click", "button.deleteBtn", (event) => {

		deleteRecord($(event.target).parent()[0].id);
	})

	$('button#newItemBtn').on('click', (event) => {
		//get values from input fields
		let newItem = {};
		newItem.inputName = $('input#inputName').val();
		newItem.inputAge = $('input#inputAge').val();
		newItem.inputRole = $('select#inputRole').val();
		//stringify newItem for http
		addRecord(newItem);
		//send post fetch request
	})
})

const requestRecords = () => {//loads records from server
		
		const objs = fetch(server+"/records")
		.then((response) => {
			return response.json();
		})
		.then((myJson) => {
			displayRecords(myJson)
		})
		return objs;	

	}

const displayRecords = (records) => {//receives records in JSON form
	$(recordsSection).empty();
	records.forEach((record) => {
		let elem = $(`
			<div id=${record._id} class="entry">
				<span>Name: ${record.inputName}</span>
				<span>Age: ${record.inputAge}</span>
				<span>Costume: ${record.inputRole}</span>
				<button class="deleteBtn">X</button>
			</div><br/>`)
		$(recordsSection).append(elem);
	})
}

const deleteRecord = (id) => {
	return fetch(server + "/records/" +  id, 
			{method: 'delete'}).then(response => {
				response.json()
			})
     		.then(objs => {
     			return displayRecords(objs);
    		 }); // parses response to JSON
}

const addRecord = (newItem) => {
	 return fetch(server + "/registerHalloween/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(newItem), // body data type must match "Content-Type" header
    })
    .then(response => {
        return response.json()
     })
     .then(objs => {
     	return displayRecords(objs);
     }); // parses response to JSON
}
