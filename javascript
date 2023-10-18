 - introduction
 - javascript syntax
 - variables(var,let,const)
 - console.log
 - concatenation or joining operator  : +
 - datatypes (typeof)
 - operators
 - display output (DOM- write,innerHTML)
 - conversion str to int, str to float
 - String inbuilt functions(length,upper,lower,charAt,trim,replace,replaceAll,substring,includes)
 - mathematical inbuilt function
 - popup(alert , confirm , prompt)
 - control statements (if, if else,if elseif, nestedif)
 - switch statements
 - loop (for, while, do..while loop,nested loop)
 - jumping statements (1.continue,2.break)
 - Array (Array(""))
 - setTimout-function,window.open,window.location.href="path"-->overwrite page,this.close()
 - input from forms (radio,checkbox,select,window.document.bgColor="red";)
 - regular expression
 - user defined functions(create external .js file and link to html file)
 - javascript Date 
 - json
 - project: password validation(atleast 1 caps,1small,1 special char, 1 digit, count: 8)
=======================================================================
let p=document.getElementById("pass").value;
				//alert(p);
		
		//p.match(/[\d]/g)  or p.match(/[0-9]/g)

	if(p.match(/[A-Z]/g) && p.match(/[a-z]/g) && p.match(/[\d]/g) && p.match(/[^a-zA-Z\d]/g) && p.length>=8)
					document.getElementById("res").innerHTML="OK";
				else
					document.getElementById("res").innerHTML="Not Ok";
=========================================================================
			var s=document.getElementById("data").value;
			var reg=/^[a-z]+$/;
			if(s.match(reg))
			{
					alert("name accepted");
			}
			else
			{
				alert("not accepted");
			}
=====================================================================
<script type="text/javascript">
		function show(event)
		{
			if(event.keyCode==13)
			{
			alert("enter pressed");
			}
			else if(event.keyCode==32)
				alert("space pressed");
			
		}
	</script>
</head>
<body>
	Type your keywords:<input type="text" onkeypress ="show(event)">
===========================================list box=========================
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		
		function show()
		{
			var ans="";			
			var all=document.getElementsByTagName("option");
			alert(all.length);
			for(var i=0;i<all.length;i++)
			{
				//alert(all[i].value);
				//alert(all[i].selected);
				if(all[i].selected==true)
					ans=ans+all[i].value+",";				

			}
			document.getElementById("res").innerHTML=ans;
		}
	</script>
</head>
<body>
	<form>
	<select size="7" multiple>
		<option>Sunday</option>
		<option>Monday</option>
		<option>Tuesday</option>
		<option>Wednesday</option>
		<option>Thursday</option>
		<option>Friday</option>
		<option>Saturday</option>
	</select>
<br>
<input type="button" onclick="show()" value="find selected length">
<br>
</form>
<div id="res"></div>
</body>
</html>
===================list box advanced================
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		
		function show()
		{
			var allitem=document.getElementById("weekday");			
  		         allitem.remove(allitem.selectedIndex);		
  		    

  		    //select data
  		    var len=allitem.options.length;
  		    //alert(len);
  		    for(var i=0;i<len;i++)
  		    {
  		    	if(allitem.options[i].selected==true)
  		    		alert(allitem.options[i].value+"-->selected");
  		    	else
  		    		alert(allitem.options[i].value+"--> not selected ");
  		    }



		}
	</script>
</head>
<body>
	<form>
	<select size="7" multiple id="weekday">
		<option>Sunday</option>
		<option>Monday</option>
		<option>Tuesday</option>
		<option>Wednesday</option>
		<option>Thursday</option>
		<option>Friday</option>
		<option>Saturday</option>
	</select>
<br>
<input type="button" onclick="show()" value="Remove Selected Item">
<br>
</form>

</body>
</html>
===============================listbox---------------
function deleteSelect(listid) {  
var listb = document.getElementById(listid);  
var len = listb.options.length;  
for (var i = listb.options.length-1 ; i >= 0 ; i--) {  
if (listb.options[i].selected == true) {  
listb.options.remove(i);  
}  
}  
}  
</script>
======================================= js date==============
		var d=new Date();
		document.getElementById("res1").innerHTML="Current Date and Time:"+d;
		document.getElementById("res2").innerHTML="Current Month:"+(d.getMonth()+1);
		document.getElementById("res3").innerHTML="Current Year:"+d.getFullYear();
		
		document.getElementById("res4").innerHTML="Current Time:"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

document.getElementById("res5").innerHTML="Current Date:"+d.getDate();
document.getElementById("res6").innerHTML="weekday:"+d.getDay();
============================================math function================
document.write("<br>"+Math.PI);
		document.write("<br>"+Math.pow(3,3));
		document.write("<br>"+Math.sqrt(81));
		document.write("<br>"+Math.ceil(12.10));
		document.write("<br>"+Math.floor(12.99));
		document.write("<br>"+Math.log(10));
		document.write("<br>"+Math.sin(0));
		document.write("<br>"+Math.cos(0));
		document.write("<br>"+Math.tan(0));
		document.write("<br>"+Math.trunc(12.2342));
		document.write("<br>"+Math.trunc(12.9342));
		document.write("<br>"+Math.round(12.44));
		document.write("<br>"+Math.round(12.54));
		document.write("<br>"+Math.exp(0));
		document.write("<br>"+Math.exp(10));
		document.write("<br>"+Math.log(10));
		document.write("<br>"+Math.abs(-10));

