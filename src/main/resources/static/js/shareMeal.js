

//$(document).ready(function()
//{
//    load_data();
//    function load_data(search = '' )
//    {
//
//            $.ajax({
//                type: "POST",
//                url: "../backEnd/php/shareMeal.php",
//                data:{search:search},
//                success:function(data){
//                    $('.resultshare').html(data);
//                }
//
//            })
//    }
//
//   $('#search_box').keyup(function(){
//    var search = $('#search_box').val();
//    console.log(search);
//   load_data(search);
//  });
//
//});


function dodajIstniejace()
{


   var nazwa = (document.getElementById("name2")).innerHTML;
   document.getElementById('name').value =  nazwa;
   document.getElementById("name").disabled = true;


   var bialko = (document.getElementById("bialkocheck1")).innerHTML;
   document.getElementById('weightProtein').value =  bialko;
   document.getElementById("weightProtein").disabled = true;

   var tluszcz = (document.getElementById("tluszczecheck1")).innerHTML;
   console.log(tluszcz);
   document.getElementById('weightFat').value =  tluszcz;
   document.getElementById("weightFat").disabled = true;

   var kalorie2 = (document.getElementById("kaloriecheck1")).innerHTML;
   console.log(kalorie2);
   console.log(document.getElementById('kalorie').value);
   document.getElementById('kalorie').value =  kalorie2;
   console.log(document.getElementById('kalorie').value);
   document.getElementById("kalorie").disabled = true;
    
   var weglowodany = (document.getElementById("weglecheck1")).innerHTML;
   document.getElementById('weightCarbo').value =  weglowodany;
   document.getElementById("weightCarbo").disabled = true;





}




