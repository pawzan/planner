const buttonMeal = document.querySelector(".buttonMeal");
const ukryte2 = document.querySelector(".ukryte_dodawanie");
const errorText = document.querySelector(".errorText");


function zero(liczba) {
    return liczba=(liczba < 10)? "0"+liczba : liczba;
}
var today = new Date();
var dateFormat = today.getFullYear()+'-'+(zero(today.getMonth()+1))+'-'+zero(today.getDate());
//$(document).ready(function()
//{
//
//
//   load_data(dateFormat);
//    function load_data(date = ''){
//            $.ajax({
//                contentType: "application/json",
//                type: "GET",
//                url: window.location,
//                data: JSON.stringify(date),
//                dataType:"json",
//                success:function(data){
//                    $('#result').html(data);
//                }
//
//            });
//
//        }
//        $("#dates").datepicker({
//            onSelect: function(){
//                var date = $('#dates').datepicker({ dateFormat: 'yyyy-MM-dd' }).val();
//                console.log("sad " + date);
//                load_data(date);
//        }}).datepicker("setDate", new Date());
//
//
//
//});


function zmiana(){
    const ukryte2 = document.querySelector(".ukryte_dodawanie");
    if(ukryte2.style.display == 'block'){
        ukryte2.style.display = 'none';
        document.getElementById("myForm").reset();
        document.getElementById("searchForm").reset();
        document.querySelector(".resultshare").innerHTML = " ";
        document.querySelector(".errorText").innerHTML = " ";
    }else{
        ukryte2.style.display = 'block';
    }

}



function wyslijPosilek()
{
    
    var name = document.getElementById("name").value;
    var ilosc = document.getElementById("ilosc").value;
    var kalorie = document.getElementById("kalorie").value;
    var weightProtein = document.getElementById("weightProtein").value;
    var weightFat = document.getElementById("weightFat").value;
    var weightCarbo = document.getElementById("weightCarbo").value;
    
  console.log(name);
    
if(ilosc > 0 && kalorie > 0 && weightProtein > 0 && weightFat > 0 && weightCarbo > 0 && name.length != 0){
    var Kaloriee = ilosc/100 * kalorie;


    $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "/process_addMeal",
          data: JSON.stringify({nazwa:name,kalorie_posilku:JSON.stringify(Kaloriee),
                kaloriena100:kalorie,bialko_posilku:weightProtein,tluszcze_posilku:weightFat,
                wegle_posilku:weightCarbo,data_dodania:dateFormat}),
          dataType: "json",
          success: window.location.replace("/foodmenu?dates=" + dateFormat),
          });
          window.location.reload();


}
else
{
    
    if(name.length == 0)
    {
        errorText.textContent = "Musisz podac nazwe produktu";
        errorText.style.color = 'red';
        errorText.style.display = "block";
    }
    else
    {
        errorText.textContent = "Wpisywane ilości nie mogą być ujemne";
        errorText.style.color = 'red';
        errorText.style.display = "block";
    }
}
}

