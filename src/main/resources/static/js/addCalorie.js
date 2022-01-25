
const addButton2 = document.querySelector(".button2 input");



function BMI(){
    
    const form = document.querySelector(".container form");
    const addButton = form.querySelector(".button input");
    var ukryte = document.getElementById('calorie_ukryte');
    var Calorie = document.getElementById("zapotrzebowanie");
    var kalorie = document.querySelector(".Kaloriee");
    var bialko = document.querySelector(".Bialko");
    var tluszcz = document.querySelector(".Tluszcze"),
    weglowodany = document.querySelector(".Weglowodany");
    
    
    //liczby zapotrzebowanie na kalorie
    
    

    var sex_men = document.getElementById("sex_men");
    var sex_women = document.getElementById("sex_women");
    var wiek = document.getElementById("age").value;
    var waga = document.getElementById("weight").value;
    var wzrost = document.getElementById("height").value;
    var aktyw = document.getElementById("active").value;
    var cele = document.getElementById("goal").value;
    
    //wzór zapotrzebowania
    if(wiek != '' && wiek > 10  && waga != '' && waga > 30 && waga < 250 && wzrost != '' && wzrost > 100 && wzrost < 300 && aktyw != '' && cele != '')
    {   
                var wzorMen = (66.5 + (13.75 * waga) + (5.003 * wzrost) - (6.775 * wiek));
                var wzorWomen = (655.1 + (9.563 * waga) + (1.85 * wzrost) - (4.676 * wiek));
                
                var zapotrzebowanie;
                console.log(wzorMen);
                if(sex_men.checked)
                    {
                        console.log("facet");
                        if(aktyw == 1){
                        zapotrzebowanie = wzorMen * 1.2;
                        }else if(aktyw == 2){
                            zapotrzebowanie = wzorMen * 1.4;
                        }else if(aktyw == 3){
                            zapotrzebowanie = wzorMen * 1.6;
                        }else if(aktyw == 4){
                            zapotrzebowanie = wzorMen * 1.75;
                        }else {
                            zapotrzebowanie = wzorMen *2;
                        }
                    }
                else if(sex_women.checked)
                    {
                        console.log("bab");
                        if(aktyw == 1){
                            zapotrzebowanie = wzorWomen * 1.2;
                        }else if(aktyw == 2){
                            zapotrzebowanie = wzorWomen * 1.4;
                        }else if(aktyw == 3){
                            zapotrzebowanie = wzorWomen * 1.6;
                        }else if(aktyw == 4){
                            zapotrzebowanie = wzorWomen * 1.75;
                        }else{
                            zapotrzebowanie = wzorWomen *2;
                        }
                    }
                if(cele == "a"){
                    zapotrzebowanie += 500;
                }else if(cele == "b"){
                    zapotrzebowanie -= 500;
                }else{
                    zapotrzebowanie;
                }
                
                var bialkoo = 1.8 * waga;
                var tluszcz2 = (zapotrzebowanie * 0.30) / 9;
                var weglowodany2 = (bialkoo + tluszcz2)/4;
                


                document.getElementById("age").style.borderColor = "";
                document.getElementById("weight").style.borderColor = "";
                document.getElementById("height").style.borderColor = "";
                document.getElementById("active").style.borderColor = "";
                document.getElementById("goal").style.borderColor = "";




            kalorie.textContent = zapotrzebowanie.toFixed(0);
            bialko.textContent = bialkoo.toFixed(0);
            tluszcz.textContent = tluszcz2.toFixed(0);
            weglowodany.textContent = weglowodany2.toFixed(0);
            ukryte.style.display = "block"; 
            
    }
    else{
        if((wiek = '' || wiek < 10)  )
        {
            document.getElementById("age").style.borderColor = "red";
        }
        else{
            document.getElementById("age").style.borderColor = "";
        }
        if(waga = '' || waga < 30 || waga > 250)
        {
            document.getElementById("weight").style.borderColor = "red";
        }
        else{
            document.getElementById("weight").style.borderColor = "";

        }
       
         if(wzrost = '' || wzrost < 100 || wzrost > 300)
        {
            document.getElementById("height").style.borderColor = "red";
        }
        else 
        {
            document.getElementById("height").style.borderColor = "";

        }
        if(aktyw == '')
        {
            document.getElementById("active").style.borderColor = "red";
        }
        else{
            document.getElementById("active").style.borderColor = "";

        }
        if(cele == '')
        {
            document.getElementById("goal").style.borderColor = "red";
        }
        else{
            document.getElementById("goal").style.borderColor = "";

        }
        swal({
           title: "Wprowadzone dane są nieprawidłowe",
           dangerMode: true,
        });
    }


}
    


function wyslijBMI(){


    const form = document.querySelector(".container form");
    const addButton = form.querySelector(".button input");
    var ukryte = document.getElementById('calorie_ukryte');
    var Calorie = document.getElementById("zapotrzebowanie");
    var kalorie = document.querySelector(".Kaloriee");
    var bialko = document.querySelector(".Bialko");
    var tluszcz = document.querySelector(".Tluszcze"),
    weglowodany = document.querySelector(".Weglowodany");
    
    
    //liczby zapotrzebowanie na kalorie
    
    var sex_men = document.getElementById("sex_men");
    var sex_women = document.getElementById("sex_women");
    var wiek = document.getElementById("age").value;
    var waga = document.getElementById("weight").value;
    var wzrost = document.getElementById("height").value;
    var aktyw = document.getElementById("active").value;
    var cele = document.getElementById("goal").value;
    
    
    //wzór zapotrzebowania

    var wzorMen = (66.5 + (13.75 * waga) + (5.003 * wzrost) - (6.775 * wiek));
    var wzorWomen = (655.1 + (9.563 * waga) + (1.85 * wzrost) - (4.676 * wiek));
    
    var zapotrzebowanie;
    console.log(wzorMen);
    if(sex_men.checked)
        {
            console.log("facet");
            if(aktyw == 1){
               zapotrzebowanie = wzorMen * 1.2;
            }else if(aktyw == 2){
                zapotrzebowanie = wzorMen * 1.4;
            }else if(aktyw == 3){
                zapotrzebowanie = wzorMen * 1.6;
            }else if(aktyw == 4){
                zapotrzebowanie = wzorMen * 1.75;
            }else {
                zapotrzebowanie = wzorMen *2;
            }
        }
    else if(sex_women.checked)
        {
            console.log("bab");
            if(aktyw == 1){
                zapotrzebowanie = wzorWomen * 1.2;
            }else if(aktyw == 2){
                zapotrzebowanie = wzorWomen * 1.4;
            }else if(aktyw == 3){
                zapotrzebowanie = wzorWomen * 1.6;
            }else if(aktyw == 4){
                zapotrzebowanie = wzorWomen * 1.75;
            }else{
                zapotrzebowanie = wzorWomen *2;
            }
        }
    if(cele == "a"){
        zapotrzebowanie += 500;
    }else if(cele == "b"){
        zapotrzebowanie -= 500;
    }else{
        zapotrzebowanie;
    }
    
    var bialkoo = 1.8 * waga;
    var tluszcz2 = (zapotrzebowanie * 0.30) / 9;
    var weglowodany2 = (bialkoo + tluszcz2)/4;
    

$.ajax({
    type: "PATCH",
    contentType: "application/json",
    url: window.location + "/process_addCalories",
    data: JSON.stringify({zapotrzebowanie:JSON.stringify(zapotrzebowanie),bialko:JSON.stringify(bialkoo),tluszcze:JSON.stringify(tluszcz2),weglowodany:JSON.stringify(weglowodany2)}),
    dataType: "json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
        alert(errMsg);
    }
});


}
function zero(liczba) {
    return liczba=(liczba < 10)? "0"+liczba : liczba;
}
var today = new Date();
var dateFormat = today.getFullYear()+'-'+(zero(today.getMonth()+1))+'-'+zero(today.getDate());
console.log(dateFormat);
function ww(){
     window.location.replace("/foodmenu?dates=" + dateFormat);

    }

























