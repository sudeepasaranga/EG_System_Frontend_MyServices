$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	 var status = validatePaymentForm();
	 if (status != true)
		 {
		  $("#alertError").text(status);
		  $("#alertError").show();
		  return;
	 }
	 //If status equals to true
	 var type = ($("#hidPaymentIdSave").val() == "") ? "POST" : "PUT";
	 var formData = new FormData($("#formPayments")[0]);
	 console.log(formData);
	 $.ajax(
	 {
		 url : "PaymentsAPI",
		 type : type,
		 data : formData,
		 enctype : "multipart/form-data",
		 complete : function(response, status)
		 {
			 onPaymentSaveComplete(response.responseText, status);
		 },
		 processData : false,
		 contentType :false
	 }); 
});

function onPaymentSaveComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divPaymentsGrid").html(resultSet.data);
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
	
	 $("#hidPaymentIdSave").val("");
	 $("#formPayments")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	 $("#hidPaymentIdSave").val($(this).data("paymentid")); 
	 $("#dateOfpay").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#payMethod").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#cardHolder").val($(this).closest("tr").find("td:eq(2)").text());
	 $("#cardNo").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#cvv").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#expDate").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#totamount").val($(this).closest("tr").find('td:eq(6)').text());
});

//client-model
function validatePaymentForm()
{
	// date of payment
	if ($("#dateOfpay").val().trim() == "")
	{
		return "Insert Date Of Pay.";
	}
	// payment method
	if ($("#payMethod").val().trim() == "")
	{
		return "Payment Method.";
	}
	// cardHolder name
	if ($("#cardHolder").val().trim() == "")
	{
		return "CardHolder Name.";
	}
	// card number
	if ($("#cardNo").val().trim() == "")
	{
		return "Card Number.";
	}
	// 
	if ($("#cvv").val().trim() == "")
	{
		return "CVV.";
	}
	// 
	if ($("#expDate").val().trim() == "")
	{
		return "Expiry Date.";
	}
	// 
	if ($("#totamount").val().trim() == "")
	{
		return "Total Amount.";
	}
	
	
	
	
	return true;
}

$(document).on("click", ".btnRemove", function(event)
{
		$.ajax(
		 {
			 url : "PaymentsAPI",
			 type : "DELETE",
			 data : "paymentID=" + $(this).data("paymentid"),
			 dataType : "text",
			 complete : function(response, status)
			 {
				 onPaymentDeleteComplete(response.responseText, status);
			 }
		 });
});


function onPaymentDeleteComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divPaymentGrid").html(resultSet.data);
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


