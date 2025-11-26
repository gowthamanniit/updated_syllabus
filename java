java syllabus:
==========
1) introduction- invented by ,history, environment-setup,  permanent path 
	,source,class , jvm , simple program,escape sequence.
2) datatypes ,
 and constant with concatenation operator or joining operator,comment line
	
find memory location of variable and object.
3) operator
4) how to get value at run time or dynamic?
- Scanner, DataInputStream,BufferedReader,Command line(passing main )
5) how to use Eclipse?
6) string functions(length,toUpperCase,toLowerCase,charAt,indexOf,lastIndexOf,trim,replace,
					startsWith,endsWith,contains,substring,  compareTo, equals, ignoreCase, hashCode)
6.1)type conversions
6) control statements(if, if else, if elseif, nested if)
7) switch case
8) looping or iterator (for , while , do..while , nested loop)
9) Jumping Statement (continue,break)
10) arrays,stringbuffer
//======================================================
11) oops concepts - class & objects
12) constructor and 4 types.
13) inheritance ( 4 types, single,multilevel, hierarchical,hybrid)
14) access specifier (private , public, protected, default)
15) interface (multiple inheritance-overriding purpose)
16) abstract class
17) polimorphism (2 types - compile time polimorphism, run time polimorphism)
18) abstraction and encapsulation
19) inner class - 4 types - regular inner class, method local inner class, static innner class,anonymous class.
20) access modifier(same as access specifier) (non-access modifier : static, final,synchronized) 
//=====================================================================
21) exception handling
22) type casting (convert one datatype to another datatype or objects)
23) regular expression( valid or invalid input format ?)
24) localization( 4 types - date, time, currency, text)
25) generic class and methods
26) collection ( 4 types - set , list, map, deque)
27) Thread and multithread with synchronization
28) File input stream and output stream
28.1) Serialization and Deserialization concepts 
28.2)Java Networking (ServerSocket,Socket)
   localhost,use public ip internet connection 
29) JDBC - Java Data Base Connectivity
30) java second part:(import javax.swing.*)
	UI Components -> Textbox,Label, Button , Choice,List , Combobox,Font,......
	managing Layout --> default,border,grid,flow .....
	Events Model,Events Listener
31) project - 1 (mini project - faculty)
32)project -2 ( mini project - student)
===================================================================


		String s="12.12345678901234567890";
		double b=Double.parseDouble(s);
		System.out.println("double value:"+b);
		System.out.println("address:"+s.hashCode());
		int k=100;
		System.out.println(System.identityHashCode(k));
		System.out.println(System.identityHashCode(b));
		System.out.println(Integer.toHexString(System.identityHashCode(b)));
=================serialization vs deserialization============

	package pack2;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Stud implements Serializable
{
	int id;
	String name;
	Stud(int id,String name)
	{
		this.id=id;
		this.name=name;
	}
}

public class SerialDemo {

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
		Stud s1=new Stud(1001,"sasi");
		
		ObjectOutputStream oos=new ObjectOutputStream
				(new FileOutputStream("d:/sajith.txt"));
		oos.writeObject(s1);
		System.out.println("serialization success");
		oos.close();
	}
	

}
===================
	package pack2;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class Deserialdemo {

	public static void main(String[] args)throws Exception {

		
		ObjectInputStream ois=new ObjectInputStream
				(new FileInputStream("d:/sajith.txt"));
		
		Stud obj=(Stud)ois.readObject();
		System.out.println(obj.id);
		System.out.println(obj.name);
		ois.close();
	}

}

================================java networking=================

  package serverpgm;

import java.io.DataInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerPgm {

	public static void main(String[] args) {
		
		System.out.println("waiting server..........");
		try
		{
		ServerSocket ss=new ServerSocket(8939);
		Socket s=ss.accept(); // establish connection 
		DataInputStream dis=new DataInputStream(s.getInputStream());
		String cdata=dis.readUTF();
		System.out.println("client data:"+cdata);
		s.close();
		ss.close();		
		}
		catch(Exception e)
		{
		System.out.println("Error Name:"+e.toString());	
		}

	}

}
-----client program-----------
  package clientpgm;

import java.io.DataOutputStream;
import java.net.Socket;

public class ClientPgm {
	public static void main(String[] args) {

		try
		{
		Socket s=new Socket("localhost", 8939);
		DataOutputStream dos=new DataOutputStream(s.getOutputStream());
		dos.writeUTF("hai hello how r u?");
		dos.close();
		s.close();
		}
		catch(Exception e)
		{
			System.out.println("Error Name:"+e.toString());
		}

	}

}
================db connection mysql====================
	java mysql connection program:
==============================
step 1:
	create sample database , table 

ex:
#create database sajith;
use sajith;
#create table student(rno int,sname varchar(22),mark int);
insert into student values(10003,'aadhi',29);
select * from student;

step 2:
	google: download mysql-connector-java-8.0.1.jar

step 3:
	eclipse open--> project name right click--> properties -->
	java build path --> libraries -->add external jars --> select your downloaded jar file -->apply and close.

step 4:	program type:

package pack2;
import java.sql.*;
public class DbPgm {
	public static void main(String[] args) {
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("driver accepted");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost/sajith?user=root&password=12345");
			System.out.println("connection success");
			Statement st=con.createStatement();
			ResultSet rs=st.executeQuery("select * from student");
			while(rs.next())
			{
				System.out.println(rs.getString(1));
				System.out.println(rs.getString(2));
				System.out.println(rs.getString(3));
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(Exception e)
		{
			System.out.println("error type:"+e.toString());
		}

	}
}

