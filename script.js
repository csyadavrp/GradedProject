function compute()
{
     
var p,t,r,si;
p = document.getElementById ("principal").value;
t = document.getElementById ("rate").value;
r = document.getElementById ("years").value;
si = parseInt((p*t*r)/100 );
amount = p*Math.pow((1 +r/100),t );

document.getElementById ('result').innerHTML ="Simple interest : "+si;

    
}
        