function f1() {
    var t3 = 0;
    var t1 = parseFloat(document.getElementById("i1").value);

    if (isNaN(t1))
    { 
        alert("Enter only a number for degree");
        return;
    }
    var t2 = document.getElementById("i2").value;
    var t4 = document.getElementById("i4").value;


    if (t2 === "Fahrenheit" && t4==="Celsius" ) {
        t3 = (t1 - 32) * (5 / 9);
        t3 = t3 + " C";
    } else if (t2 === "Celsius" && t4==="Fahrenheit") {
        t3 = (t1 * (9 / 5)) + 32;
        t3 = t3 + " F"; 
    }
    else if (t2 === "Celsius" && t4==="Kelvin") {
        t3 = t1+ 273.15+" K"; 
    }
    else if (t2 === "Kelvin" && t4==="Fahrenheit") {
        t3 = ((t1-273.15) * (9 / 5)) + 32;
        t3 = t3 + " F"; 
    }
    else if (t2 === "Kelvin" && t4==="Celsius") {
        t3 = (t1 -273.15)
        t3 = t3 + " C"; 
    }
    else if (t2 === "Fahrenheit" && t4==="Kelvin" ) {
        t3 = (t1 - 32) * (5 / 9)+273.15;
        t3 = t3 + " K";

    }
    var t5 = document.getElementById("i3");
    t5.value = t3;
}
function f2()
{
    i1.value="";
    i3.value=" ";
    i2.value="";
    i4.value="";
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }