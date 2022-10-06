let tomb =[]
let kiiras=""
var lista=""
let sz2=""
let db=0
let tomb2=[]
function valtozas()
{
let nev=document.getElementById("nev").value
kiiras+='<li id="adat">'
kiiras+=nev
kiiras+='</li>'
document.getElementById("lista").innerHTML=kiiras
tomb.push(nev)
}

function hozzaad()
{
    var nev = document.getElementById("nev"); 
    nev.value = " ";
   
}
function Torles()  
{
   
        
        if(kiiras=="")
        {
            alert("Nincs létre hozva lista elem.")
        }
        else
        {
            
            let text = "Biztosan törölni akarod a listát?";
        if (confirm(text) == true)
        {
            
            document.getElementById("lista").innerHTML=""
            tomb.length=0;
            kiiras=""
            nev.value =""
            localStorage.clear()
            
        }
        else
        {
        
        }

        }    
}

function store()
{
    let nev=document.getElementById("nev").value
    if(nev=="")
    {
        alert("Üres a lista.")
    }
    else
    {
        let text = "Biztosan menteni akarod a listát?";
        if (confirm(text) == true)
        {
            
            localStorage.setItem('lista', tomb);
        }
        else
        {
        
        }
    }

}    

//meglevo lista
function get()
{
    lista=localStorage.getItem('lista');
    console.log(lista)
    if(lista==null)
    {
        alert("Üres a lista,nincs rendelkezésre álló adat.")
        
    }
    else
    {
        tomb2=lista.split(",")
        for(elem of tomb2)
        { 
            db++
            sz2+="<tr>"
            sz2+='<td>'
            sz2+=db+"."
            sz2+='</td>'
            sz2+='<td>'
            sz2+=elem
            sz2+='</td>'
            sz2+='<td>'
            sz2+='<input type="number" id='+db+'>'
            sz2+='</td>'
            sz2+='<td>'
            sz2+='</td>'
            sz2+='</tr>'
        } 
        sz2+='<td></td>'
        sz2+='<td></td>'
        sz2+='<td></td>'
        sz2+='<td><button style="float: right;"id="kesz" onclick="szamol()">Kész</button></td>'
        db=0
        document.getElementById("torzs").innerHTML=sz2
        sz2=""
    }
}
function del()
{   
    let torzs=document.getElementById("torzs").value
    if(torzs==sz2)
    {
        alert("Nincs betöltve lista.")
    }
    else
    {
        let text = "Biztosan törölni akarod a listát?"
        if (confirm(text) == true)
        {
            let sz3=""
            sz3+='<td>'
            sz3+='</td>'
            sz3+='<td>'
            sz3+='</td>'
            sz3+='<td>Nincs betöltve lista'
            sz3+='</td>'
            document.getElementById("torzs").innerHTML=sz3
            let max=document.getElementById("Max")
            max.value="" 
            lista=""
            tomb.length=0
            tomb2.length=0
            sz2=""
            localStorage.clear();
        }
        else
        {
        
        }
    
    }
    
}

function szamol()
{
    let x=true;
    
    let max=document.getElementById("Max").value  
    let tomb3=[]
    if(max=="")
    {
        alert("Üres a max kiadás.")
    }
    else
    {
    for(elem of tomb2)
        {
            
                db++
                let adat=document.getElementById(db).value    
                tomb3.push(Number(adat))
                console.log(adat)
                if(adat=="")
                {
                    alert("Nem töltötted ki a "+db+".termék árát")
                    x=false
                }
            
        }        
    }
    if(x==true)
    {
        let sum=0;
        Number(sum)
        for(elem of tomb3)
        {
            sum+=elem
        }
                    
        if(max<sum )
        {
            alert("Tul sok a kiadás")

        }
        else if(max>sum && x==true)
        {
            alert("sikeres vásárlás")
            document.getElementById("torzs").innerHTML=""
        }

    }
                        
console.log(x)          
    

  
}
