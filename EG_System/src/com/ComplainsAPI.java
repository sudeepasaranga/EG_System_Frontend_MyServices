package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class UnitsAPI
 */
@WebServlet("/ComplainsAPI")
@MultipartConfig
public class ComplainsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Complain complain = new Complain();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ComplainsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, NumberFormatException {
		
		
		String perName = request.getParameter("perName");
		String cAccNo = request.getParameter("cAccNo");
		String cArea = request.getParameter("cArea");
		String cPhone = request.getParameter("cPhone");
		String comp = request.getParameter("comp");
		
		String output = complain.addComplain(perName, cAccNo, cArea, cPhone, comp);
		response.getWriter().write(output);
	}

	/*
	
	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);

		String output = unit.updateUnit(paras.get("hidUnitIDSave").toString(),
				paras.get("mnValue").toString(), 
				paras.get("mxValue").toString(),
				paras.get("modifiedDate").toString(),
				paras.get("price").toString()
				

		);

		response.getWriter().write(output);
	}
*/
	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String cID = request.getParameter("hidComplainIDSave");
		String perName = request.getParameter("perName");
		String cAccNo = request.getParameter("cAccNo");
		String cArea = request.getParameter("cArea");
		String cPhone = request.getParameter("cPhone");
		String comp = request.getParameter("comp");
		
		String output = complain.updateComplain(cID, perName, cAccNo, cArea, cPhone,comp);
		response.getWriter().write(output);
	}
	
	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras = getParasMap(request);
		String output = complain.deleteComplain(paras.get("cID").toString());
		response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{
			 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			 String queryString = scanner.hasNext() ?
			 scanner.useDelimiter("\\A").next() : "";
			 scanner.close();
			 String[] params = queryString.split("&");
			 for (String param : params)
			 { 
				 String[] p = param.split("=");
				 map.put(p[0], p[1]);
			}
		}catch (Exception e){
			
		}
			return map;
	}
}
