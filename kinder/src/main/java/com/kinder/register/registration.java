package com.kinder.register;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class registration
 */
@WebServlet("/register")
public class registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String date = request.getParameter("date");
		String level = request.getParameter("level");
		String tel = request.getParameter("tel");
		String addresse = request.getParameter("addresse");
		String code = request.getParameter("code");
		
		RequestDispatcher dispatcher = null ; 
		Connection conn = null ; 
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/project?useSSL=false", "root", "aymenomri123456@A");
			PreparedStatement pst = conn.prepareStatement("insert into util(name , email , password , date , level , tel , code , addresse) values(?,?,?,?,?,?,?,?) ");
			pst.setString(1, name) ; 
			pst.setString(2, email) ; 
			pst.setString(3, password) ; 
			pst.setString(4, date) ; 
			pst.setString(5, level) ; 
			pst.setString(6, tel) ; 
			pst.setString(7, addresse) ; 
			pst.setString(8, code) ; 

			
			int rowCount = pst.executeUpdate() ; 
			dispatcher = request.getRequestDispatcher("register.jsp");
			if(rowCount > 0) {
				request.setAttribute("status", "success");
				
				
			}else {
				request.setAttribute("status", "failed");
			}
			dispatcher.forward(request, response);

				
			} catch(Exception e) {
				e.printStackTrace();
			} finally {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

		}



		
		
	}


