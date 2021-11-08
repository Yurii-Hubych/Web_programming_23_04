// Дата
let date = new Date;
let day = date.getDate();
let month = date.getMonth()+1;
let day1 = date.getDay();
let day2;
let days = new Array();
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
switch (day1){
    case 0:day2 = days[6]; break;
    case 1:day2 = days[0]; break;
    case 2:day2 = days[1]; break;
    case 3:day2 = days[2]; break;
    case 4:day2 = days[3]; break;
    case 5:day2 = days[4]; break;
    case 6:day2 = days[5]; break;
}
let p1=document.getElementById('day1');
let p2=document.getElementById('day_month');
p1.innerHTML = day2;
p2.innerHTML = day + ' / ' + month;




// Погода
fetch( 'https://api.openweathermap.org/data/2.5/weather?id=702550&appid=dbcd2371b9fd54f1ef4d69a2bc61c805')
    .then(function (resp) { return resp.json () })
    .then(function (data) {
    console.log(data);
    document.querySelector('.celcium').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector ('.weather_img').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0][ 'icon' ] + '@2x.png">';
})
    .catch(function (){

    })

// Час для блог-посту
let hours=date.getHours();
let minutes=date.getMinutes();
let p3=document.getElementById('blog_time');
let k='';
if ((k+minutes).length==1){
    k='0'+minutes;
}
else {
    k=minutes
}

p3.innerHTML=hours +  ':' + k;