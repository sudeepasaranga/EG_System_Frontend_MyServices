$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

/*
//SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateUnitForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
	var type = ($("#hidUnitIDSave").val() == "") ? "POST" : "PUT";
	var formData = new FormData($("#formUnits")[0]);
	console.log(formData);
	$.ajax({
		url : "UnitsAPI",
		type : type,
		data :formData,
		dataType : "text",
		complete : function(response, status) {
			onUnitSaveComplete(response.responseText, status);
		}
	});
});

function onUnitSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divUnitsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidUnitIDSave").val("");
	$("#formUnits")[0].reset();
}

*/
//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	 var status = validateComplainForm();
	 if (status != true)
		 {
		  $("#alertError").text(status);
		  $("#alertError").show();
		  return;
	 }
	 //If status equals to true
	 var type = ($("#hidComplainIDSave").val() == "") ? "POST" : "PUT";
	 var formData = new FormData($("#formComplains")[0]);
	 console.log(formData);
	 $.ajax(
	 {
		 url : "ComplainsAPI",
		 type : type,
		 data : formData,
		 enctype : "multipart/form-data",
		 complete : function(response, status)
		 {
			 onUnitSaveComplete(response.responseText, status);
		 },
		 processData : false,
		 contentType :false
	 }); 
});




function onUnitSaveComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divComplainsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while saving.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while saving..");
			 $("#alertError").show();
	 } 
	
	 $("#hidComplainIDSave").val("");
	 $("#formComplains")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	 $("#hidComplainIDSave").val($(this).data("cid")); 
	 $("#perName").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#cAccNo").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#cArea").val($(this).closest("tr").find("td:eq(2)").text());
	 $("#cPhone").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#comp").val($(this).closest("tr").find('td:eq(4)').text());
});

//client-model
function validateUnitForm()
{
	// Customer Name
	if ($("#perName").val().trim() == "")
	{
		return "Insert Customer Name.";
	}
	// Customer AccountName
	 var tmpAccNum = $("#cAccNo").val().trim();
	 if (!$.isNumeric(tmpAccNum)) 
	{
		return "Insert Account Number.";
	}
	// Complain Area
	if ($("#cArea").val() == "0")
	{
		return "Insert Complain Area.";
	}
	// Customer Phonr Number
	 var tmpPhone = $("#cPhone").val().trim();
	 if (!$.isNumeric(tmpPhone)) 
	 {
		 return "Insert Phone Number.";
	 }
	 //Complain
	 if ($("#comp").val() == "0")
	 {
		return "Insert Complain.";
	 }
	
	return true;
}

$(document).on("click", ".btnRemove", function(event)
{
		$.ajax(
		 {
			 url : "ComplainsAPI",
			 type : "DELETE",
			 data : "cID=" + $(this).data("cid"),
			 dataType : "text",
			 complete : function(response, status)
			 {
				 onComplainDeleteComplete(response.responseText, status);
			 }
		 });
});


function  onComplainDeleteComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divComplainsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
	 }
}


