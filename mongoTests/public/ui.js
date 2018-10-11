const server = 'http://localhost:3000';

$(() => {
	const recordsSection = $('div#recordsSection');
	requestRecords();

	console.log(recordsSection);
	$('div#recordsSection').on("click", "button.deleteBtn", (event) => {
		console.log(this);
		console.log(event.target);
		console.log($(event.target).parent()[0].id);
		deleteRecord($(event.target).parent()[0].id);
	console.log('Hi');
	//console.log($(this).parent.data('id'));
})
})

const requestRecords = () => {//loads records from server
		
		const objs = fetch(server+"/records")
		.then((response) => {
			return response.json();
		})
		.then((myJson) => {
			console.log(myJson);
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
				response.json().then(json => {
					return displayRecords(json);
				})
		})
}
