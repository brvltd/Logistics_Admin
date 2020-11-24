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
		<div class="col-sm-2" id="tNos">
		<p style="font-size:2vw;" id="tNo">${trackN}</p>
		</div>
		<div class="col-sm-2" id="cNames">
		<p style="font-size:2vw;" id="cName">${cargoName}</p>
		</div>
		<div class="col-sm-2" id="custNams">
		<p style="font-size:2vw;" id="custNam">${custName}</p>
		</div>
		<div class="col-sm-1" id="edit">
		<a style="font-size:2vw;"><i class="fa fa-edit" onclick="editCargo();"></i></a>
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
		<div class="col-md-2" id="phone">
		<p style="font-size:2vw;">${PhoneNumber}</p>
		</div>
		<div class="col-md-2" id="cNam">
		<p style="font-size:2vw;">${CustomerName}</p>
		</div>
		<div class="col-md-2" id="em">
		<p style="font-size:2vw;">${Email}</p>
		</div>
		<div class="col-sm-1" id="edit">
		<a style="font-size:2vw;"><i class="fa fa-edit"></i></a>
		</div>
		</div>`
	}
}