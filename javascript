 - introduction
 - javascript syntax
 - variables(var,let,const)
 - console.log
 - concatenation or joining operator  : +
 - datatypes (typeof)
 - operators
 - Event Handling (basic)
 - display output (DOM- write,innerHTML,getElementById,getElementsByTagName,
getElementsByName)
 - conversion str to int, str to float
 - toFixed (float to str) ex: f=123.3   f.toFixed(2)  o/p: 123.30

 - String inbuilt functions(length,upper,lower,charAt,trim,
                 replace,replaceAll,substring,includes,startsWith,
		endsWith)

 - mathematical inbuilt function
	(Math.PI,pow,sqrt,ceil,floor,round,trunc,log,sin,con,tan,exp,abs,random)
 - popup(alert , confirm , prompt)
 - control statements (if, if else,if elseif, nestedif)
 - switch statements
 - loop (for, while, do..while loop,nested loop)
 - jumping statements (1.continue,2.break)
 - Array (Array("")) - inbuilt funciton (length,push,sort,pop,filter)
			ex: arr.sort((a,b)=>{return b-a;}) //int sort
 - Convert Str to CharArray(split) and chararray to str
 - setTimout-function,window.open,window.location.href="path"--
>overwrite page,this.close()
 - input from forms (radio,checkbox,select,window.document.bgColor="red";)
 - DOM - css style change at runtime.
ex:document.getelementById("idname").style.property=value;
 - How to use QuerySelector?
use:  in body section don't use events(like jquery)
 - regular expression
 - user defined functions(create external .js file and link to html file)
 - javascript Date 
 - json
 - project: password validation(atleast 1 caps,1small,1 special char, 
1 digit, count: 8)
=======================================================================
conversion:
var k1="1";
var k2=3;

			console.log(+k1+k2);  //4
var k1="1";
var k2="3";
			console.log(+k1 + +k2); //4
var k1=1;
var k2="3";
			console.log(k1 + +k2); //4
var k1=1;
var k2=3;
			console.log(k1 + k2); //4


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
string to chararray
====================
var k="akashayasri";

		var s=k.split('');

		console.log(k);
		console.log(s);
		for(i=0;i<s.length;i++)
		{
			document.write("<h1>Index:"+i+"="+s[i]+"</h1>");
		}
chararray to string
=====================
hw
===========================
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
		document.write("<br>"+Math.trunc(Math.random()*100));

//======================listbox insert / remove =============
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		var k=0;
		function show()
		{
			var ans="";			
		//	var all=document.getElementsByTagName("option");
			var all=document.getElementById("lb1");
			alert(all.length);
			for(var i=0;i<all.length;i++)
			{
				//alert(all[i].value);
				//alert(all[i].selected);
				if(all[i].selected==true)
				{
					ans=all[i].value;							
				}


			}
			
			document.getElementById("res").innerHTML=ans;
			if(ans!="")
			document.form1.lb2.options[k++]=new Option(ans,ans);
				else
					alert("pls select any one item");


			//remove
			var allitem=document.getElementById("lb1");			
  		    allitem.remove(allitem.selectedIndex);		
  		    
		}
	</script>
</head>
<body>
	<form name="form1">
	<select size="7" id="lb1">
		<option>Sunday</option>
		<option>Monday</option>
		<option>Tuesday</option>
		<option>Wednesday</option>
		<option>Thursday</option>
		<option>Friday</option>
		<option>Saturday</option>
	</select>
		<select name="lb2" multiple>
		<option value="empty"></option>		
	</select>
<br>
<input type="button" onclick="show()" value="find selected length">
<br>
</form>
<div id="res"></div>
</body>
</html>
========================open and close window==============
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		window open
	</title>
	<script type="text/javascript">
		var f;
		function openfile()
		{
			
			f=window.open("arrdemo.html");
			//window.location.href="arrdemo.html";
		}
		function closefile()
		{
			f.close();	
		}
		
	</script>
</head>
<body>
	<button onclick="openfile()"> open array file </button>

======================getElementsByName================
var s=document.getElementsByName("gen");
			var len=s.length;
			var ans="Selected Gender:";
			console.log(s.length);
			for(var i=0;i<len;i++)
			{
				//if(document.getElementById("g"+(i+1)).checked==true)
				//or
				if(s[i].checked==true)
					//ans=ans+document.getElementById("g"+(i+1)).value;
					//or
					ans=ans+s[i].value;
			}
			document.getElementById("res").innerHTML=ans;
	<button onclick="closefile()"> close array file </button>

</body>
</html>

======================
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<script type="text/javascript">
		function dis()
		{
			document.getElementById("b1").style.backgroundColor="red";
			document.getElementById("b1").style.fontSize="44px";
			document.getElementById("bid").style.padding="30px";
			document.getElementById("bid").style.border="10px double red";
			document.getElementById("bid").style.boxShadow="10px 10px 10px 10px black";
		}
	</script>
</head>
<body id="bid">
	<h1>css style dynamic - DOM</h1>
	<button id="b1" onclick="dis()">clickme</button>

</body>
</html>
======================================query selector -->apply all works ==============
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<script type="text/javascript">
		
		function dis()
		{
			document.querySelector("button").style.backgroundColor="green";
			document.querySelector("h1").style.backgroundColor="green";
			document.querySelector(".mycla").style.backgroundColor="green";
			document.querySelector("#id2").style.backgroundColor="green";
	var data=document.querySelector("input").value;
	alert(data);
			
			var but=document.querySelector("#but1")
			but.addEventListener("click",function(){
				alert("Button Clicked using querySelector and addEventListener");
				document.querySelector("input").value="gowthaman";
			});
		}
	</script>
</head>
<body onload="dis()">
	<input type="text" value="manoj">
	<button id="but1">click me </button>
	<h1>welcome to header 1</h1>
	<h2 id="id2">welcome to header 2</h2>
	<h3 class="mycla">welcome to header 3</h3>

</body>
</html>
==================================================================================
array function split filter:
data="gowthamanKARUR"
arr=data.split('')
console.log(arr)

len=arr.length;
console.log(len)

vowels="aeiouAEIOU"

for(var i=0;i<len;i++)
{
    if(vowels.includes(arr[i]))
        console.log(arr[i])
    }
//or advanced tech --> vowels in array format
var ans=arr.filter((item)=>{
    return vowels.includes(item)
})  
console.log(ans)
-----------------------get data from url parameters get method---------------
 <script type="text/javascript">
        function fillamt()
        {
            var cururl=window.location.href
            // to get current url in address bar
            console.log("Current URL:",cururl)

            var url = new URL(cururl);
            var amt = url.searchParams.get("amount");
            console.log("amount:",amt);

            document.getElementById("price").value=amt;
        }
    </script>

<body class="bg-gray-900" onload="fillamt()">
.....
....
 <input type="text" id="price" readonly name="amount" placeholder="Enter Amount" class="bg-transparent text-white p-3 h-10 mb-5">
....
</body>

