
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const oldphone = document.querySelector('.oldphone');
  const timer = document.querySelector('.timer');
  const items = document.querySelectorAll('.box');
  var time ;
var compareDate =new Date();
compareDate.setDate(compareDate.getDate() + 56);
time =setInterval(function()
{
    timeBetweenDate(compareDate);
}, 1000)
function timeBetweenDate(toDate){
    var dateAdded=toDate;
    var now =new Date();
    var dif =dateAdded.getTime()-now.getTime();
    if(dif <= 0)
    {clearInterval(time);
    }else{
        var seconds = Math.floor(dif /  1000);
        var minutes = Math.floor(seconds / 60);
        var hours =Math.floor(minutes / 60) ;
        var days =Math.floor (hours / 24) ;

        hours %= 24;
        minutes %= 60;
        seconds %= 60;
        document.getElementById("days").innerHTML =days ;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


        
    }
}