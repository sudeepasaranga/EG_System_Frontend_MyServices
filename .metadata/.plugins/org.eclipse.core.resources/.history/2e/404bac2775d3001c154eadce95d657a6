
<%@page import="com.Unit"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

        
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Unit Service</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/units.css">
<script src="Components/jquery-3.2.1.js"></script>
<script src="Components/Unit.js"></script>

</head>
<body style="background-image:url(https://wallpaperaccess.com/full/5227230.png)">

 <div class="container">
 <div class="row">
 <div class="col-6">

<h1>Unit Management</h1>
<form id="formUnits" name="formUnits" method="post" enctype="multipart/form-data">
    Min Unit Value:
	<input id="mnValue" name="mnValue" type="text" class="form-control form-control-sm">
	<br>  
	Max Unit Value:
	<input id="mxValue" name="mxValue" type="text" class="form-control form-control-sm">
	<br> 
	Modified Date:
	<input id="modifiedDate" name="modifiedDate" type="text" class="form-control form-control-sm">
	<br> 
    Price
    <input id="price" name="price" type="text" class="form-control form-control-sm">
	<br>
	<br>
	<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
	<input type="hidden" id="hidUnitIDSave" name="hidUnitIDSave" value="">
</form>
<br>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>

<br>
<div id="divUnitsGrid">
	 <%
	 	Unit units = new Unit();
	 	out.print(units.readUnits());
	 %>
</div>

</div>
</div>
</div>
</body>
</html>

    