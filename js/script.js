let day2,date=new Date,day=date.getDate(),month=date.getMonth()+1,day1=date.getDay(),days=new Array;switch(days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],day1){case 0:day2=days[6];break;case 1:day2=days[0];break;case 2:day2=days[1];break;case 3:day2=days[2];break;case 4:day2=days[3];break;case 5:day2=days[4];break;case 6:day2=days[5]}let p1=document.getElementById("day1"),p2=document.getElementById("day_month");p1.innerHTML=day2,p2.innerHTML=day+" / "+month,fetch("https://api.openweathermap.org/data/2.5/weather?id=702550&appid=dbcd2371b9fd54f1ef4d69a2bc61c805").then((function(e){return e.json()})).then((function(e){console.log(e),document.querySelector(".celcium").innerHTML=Math.round(e.main.temp-273)+"&deg;",document.querySelector(".weather_img").innerHTML='<img src="https://openweathermap.org/img/wn/'+e.weather[0].icon+'@2x.png">'})).catch((function(){}));