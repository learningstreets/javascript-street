let msg = 'Hello World'



if(1)  alert("True")

if(0)  alert("False")

if("0")  alert("True") // because it is string so will get converted into Truthy


alert(1.1 + 2.3) // will alert 2.40000000004 

alert((1.1 + 2.3).toFixed(2)) // it will fixed the decimal point numbers


// === or ==

if(1 == "1") alert("True") // here it will convert the datatype

if(1 === "1") alert("False") // here it will not convert data type hence getting false
 
