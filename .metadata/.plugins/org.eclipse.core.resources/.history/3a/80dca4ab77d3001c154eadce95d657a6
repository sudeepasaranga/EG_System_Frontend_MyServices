package com;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.Part;

public class Complain {

	public Connection connect()
	{ 
		 Connection con = null; 
		 
		 try { 
			 Class.forName("com.mysql.jdbc.Driver"); 
			 con= DriverManager.getConnection("jdbc:mysql://localhost:3306/electrogrid", "root", "saranga"); 
			 
			 //For testing
			 System.out.print("Successfully connected"); 
		} catch(Exception e){ 
			 e.printStackTrace(); 
		} 
		return con; 
	}
	
	public String addComplain(String perName, String cAccNo, String cArea, String cPhone, String comp) {
		String output = ""; 
		try { 
			Connection con = connect(); 
			if (con == null) 
			{ 
				return "Error while connecting to the database"; 
			} 
			// create a prepared statement
			String query = "insert into complaint(`cID`,`perName`,`cAccNo`,`cArea`,`cPhone`,`comp`) values (?,?,?,?,?,?)"; 
			PreparedStatement preparedStmt = con.prepareStatement(query); 
			 
			// binding values
			preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, perName);
			preparedStmt.setInt(3, Integer.parseInt(cAccNo));
			preparedStmt.setString(4, cArea);
			preparedStmt.setInt(5, Integer.parseInt(cPhone));
			preparedStmt.setString(6, comp);
					
			 
			//execute the statement
			 preparedStmt.execute(); 
			 con.close(); 

			 String complains = readComplains();
			 output = "{\"status\":\"success\", \"data\": \"" + complains + "\"}";
		}catch (Exception e) { 
			 output = "{\"status\":\"error\", \"data\": \"Error while inserting the complain.\"}";
			 System.err.println(e.getMessage()); 
		} 
		return output;
	}
	
	public String readComplains() {
		String output = "";
		try {
			Connection con = connect();
			if(con == null) {
				return "Error while connecting to the database";
			}
			
			output = "<table border='2' class='table table-bordered'>"
					+ "<tr>"
					+ "<th>Customer Name</th>"
					+ "<th>AccountNo</th>"
					+ "<th>Area</th>"
					+ "<th>Phone Num</th>"
					+ "<th>Complain</th>"
					+ "<th>Update</th>"
					+ "<th>Delete</th>"
					+ "</tr>";
			
			String query = "select * from complaint";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			
			// iterate through the rows in the result set
			while (rs.next()) {
				String cID = Integer.toString(rs.getInt("cID"));
				String perName = rs.getString("perName");
				String cAccNo = Integer.toString(rs.getInt("cAccNo"));
				String cArea = rs.getString("cArea");
				String cPhone = Integer.toString(rs.getInt("cPhone"));
				String comp = rs.getString("comp");
					
				//add a row into html table
				output += "<tr>";
				output += "<td>" + perName  + "</td>";
				output += "<td>" + cAccNo  + "</td>";
				output += "<td>" + cArea + "</td>";
				output += "<td>" + cPhone  + "</td>";
				output += "<td>" + comp  + "</td>";
				
				//buttons
				 output += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-success' data-cid='" + cID + "'></td>"
						 + "<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-cid='" + cID + "'></td></tr>";
				
			}
			
			con.close();
			output += "</table>";
			
		}catch(Exception e) {
			output = "Error while reading";
			System.out.println(e.getMessage());
		}
		return output;
	}

	
	public String updateComplain(String cID, String perName, String cAccNo, String cArea, String cPhone, String comp) {
		String output = ""; 
		try { 
			Connection con = connect(); 
			if (con == null) 
			{ 
				return "Error while connecting to the database"; 
			} 
			// create a prepared statement
			String query = "UPDATE complaint SET perName=?,cAccNo=?,cArea=?,cPhone=?,comp=? WHERE cID=?";
			PreparedStatement preparedStmt = con.prepareStatement(query); 

			// binding values
			preparedStmt.setString(1, perName);
			preparedStmt.setString(2, cAccNo);
			preparedStmt.setString(3, cArea);
			preparedStmt.setString(4, cPhone);
			preparedStmt.setString(5, comp);
			preparedStmt.setInt(5, Integer.parseInt(cID));
			
			// execute the statement
			 preparedStmt.execute();
			 con.close();

			 String complains = readComplains();
			 output = "{\"status\":\"success\", \"data\": \"" + complains + "\"}";
		}catch (Exception e) { 
			output = "{\"status\":\"error\", \"data\": \"Error while updating the complain.\"}"; 
			 System.err.println(e.getMessage()); 
		} 
		return output;
	}
	
	
	public String deleteComplain(String cID)
	{ 
		 String output = ""; 
		 try
		 { 
			 Connection con = connect(); 
			 if (con == null) 
			 { 
				 return "Error while connecting to the database for deleting."; 
			 } 
			 // create a prepared statement
			 String query = "delete from complaint where cID=?"; 
			 PreparedStatement preparedStmt = con.prepareStatement(query); 
			 
			 // binding values
			 preparedStmt.setInt(1, Integer.parseInt(cID));
			 
			 // execute the statement
			 preparedStmt.execute(); 
			 con.close(); 
			 String complains = readComplains();
		     output = "{\"status\":\"success\", \"data\": \"" + complains + "\"}"; 
		} 
		catch (Exception e) 
		{ 
			output = "{\"status\":\"error\", \"data\": \"Error while deleting the complain.\"}"; 
			System.err.println(e.getMessage()); 
		} 
		return output;
	}

	
}
