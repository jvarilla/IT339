const server = 'http://localhost:3000';

$(() => {
	const recordsSection = $('div#recordsSection');
	requestRecords();

	console.log(recordsSection);

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
	records.forEach((record) => {
		let elem = $(`
			<div id=${record._id}>
				<span>Name: ${record.inputName}</span>
				<span>Age: ${record.inputAge}</span>
				<span>Costume: ${record.inputRole}</span>
				<button class="deleteBtn">X</button>
			</div><br/>`)
		$(recordsSection).append(elem);
	})
}

$('.deleteBtn').on("click", () => {
	console.log("hi");
	//console.log($(this).parent.data('id'));
})