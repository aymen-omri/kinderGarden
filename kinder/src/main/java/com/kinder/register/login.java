package com.kinder.register;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class login
 */
@WebServlet("/login")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String uemail = request.getParameter("email");
		String upwd = request.getParameter("password");
		HttpSession session = request.getSession();
		Connection conn = null ;
		RequestDispatcher dispatcher = null ; 
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/project?useSSL=false", "root", "aymenomri123456@A");
			PreparedStatement pst = conn.prepareStatement("select * from util where email= ? and password= ?");
			pst.setString(1, uemail) ;
			pst.setString(2, upwd);
			ResultSet rs = pst.executeQuery();
			if(rs.next()) {
				session.setAttribute("name", rs.getString("name"));
				session.setAttribute("email", rs.getString("email"));
				session.setAttribute("addresse", rs.getString("addresse"));
				session.setAttribute("level", rs.getString("level"));

			    dispatcher = request.getRequestDispatcher("index.jsp");

			
			}else {
				request.setAttribute("status", "failed");
			    dispatcher = request.getRequestDispatcher("login.jsp");

			}
			dispatcher.forward(request, response);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

}
