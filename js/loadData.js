$(document).ready(function(){
	setTimeout(function(){
		retrieveInfos();

		retrieveCustInfos();
	},800);
});

// RetrieveCargoInfos
function retrieveInfos(){
	var database = firebase.database();
	let ref=firebase.database().ref("Cargo");
	ref.on("value",gotData);
}

function gotData(data){
	let info=data.val();
	let keys=Object.keys(info);

	for (var i = 0; i <keys.length; i++) {
		let infoData=keys[i];
		let cargoName=info[infoData].CargoName;
		let custName=info[infoData].CustomerName;
		let trackN=info[infoData].TrackNo;

		let infoResults=document.querySelector(".infoRes");
		// infoResults.innerHTML="";
		infoResults.innerHTML+=`
		<div class="row">
		<div class="col-sm-2">
		<p>${trackN}</p>
		</div>
		<div class="col-sm-2">
		<p>${cargoName}</p>
		</div>
		<div class="col-sm-2">
		<p>${custName}</p>
		</div>
		<div class="col-sm-1">
		<a><i class="fa fa-edit" onclick="editCargo();"></i></a>
		</div>
		</div>`
	}
}

// RetrieveCustInfos
function retrieveCustInfos(){
	var database = firebase.database();
	let ref=firebase.database().ref("Customers");
	ref.on("value",gotCustData);
}

function gotCustData(data){
	let info=data.val();
	let keys=Object.keys(info);

	for (var i = 0; i <keys.length; i++) {
		let infoData=keys[i];
		let PhoneNumber=info[infoData].PhoneNumber;
		let CustomerName=info[infoData].CustomerName;
		let Email=info[infoData].Email;

		let infoCustRes=document.querySelector(".infoCustRes");
		// infoResults.innerHTML="";
		infoCustRes.innerHTML+=`
		<div class="row">
		<div class="col-md-2">
		<p>${PhoneNumber}</p>
		</div>
		<div class="col-md-2">
		<p>${CustomerName}</p>
		</div>
		<div class="col-md-2">
		<p>${Email}</p>
		</div>
		<div class="col-sm-1">
		<a><i class="fa fa-edit"></i></a>
		</div>
		</div>`
	}
}