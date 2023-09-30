 - introduction
 - javascript syntax
 - variables(var,let,const)
 - console.log
 - concatenation or joining operator  : +
 - datatypes (typeof)
 - operators
 - display output (DOM- write,innerHTML)
 - conversion str to int, str to float
 - String inbuilt functions(length,upper,lower,charAt,trim,replace,replaceAll,substring)
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
====================================================================
