var x=0;
var win = 0;
var koniec = 0;
var gra = 0;
var reset;
var stawka = 0;
var kasa = 1000;
var mnoznik = 0;
var wygrana = 0;


function play()
{   
    if(gra!=1)
    {
    stawka = Number(document.getElementById("zaklad").value);
    if(stawka<=kasa)
    {
        if(stawka>0){
        kasa = kasa - stawka;
        document.getElementById("money").innerHTML = kasa;
        x = Math.floor(Math.random()*25)+1;
        reset = 1;
        while(reset <= 25)
        {
        document.getElementById(reset).classList.remove("win");
        document.getElementById(reset).classList.remove("lose");
        reset++
        }
        koniec = 0;
        gra = 1
        mnoznik = 0;
        }
        else
            alert("Za mały zakład");
    }
    
    else
    {
        alert("Zakład przekracza twój budżet")
    }
    }
}
function m(nr)
{
    if(gra===1)
    {
    if(x===nr)
        {
            document.getElementById(nr).classList.add("lose");
            win = 0;
            koniec = 1;
            mnoznik = 0;
            wygrana = 0;
            document.getElementById("multi").innerHTML = mnoznik;
            document.getElementById("wygrana").innerHTML = wygrana;
            gra = 0;
        }
        else if(koniec===0)
        {
            if(document.getElementById(nr).classList.contains("win")==false)
            {
                win++;
                document.getElementById(nr).classList.add("win");
                mnoznik = (Math.floor(100*25/(25-win))/100);
                document.getElementById("multi").innerHTML = mnoznik;
                wygrana = stawka * mnoznik - stawka
                document.getElementById("wygrana").innerHTML = "+" + wygrana;
            }
        }
    }
}
function cashout()
{
    if(win!=0)
    {
    koniec = 1
    kasa = kasa + stawka * mnoznik;
    document.getElementById("money").innerHTML = kasa;
    mnoznik = 0;
    document.getElementById("wygrana").innerHTML = 0;
    document.getElementById("multi").innerHTML = 0;
    gra = 0;
    }

}
