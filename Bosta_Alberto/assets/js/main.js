// scroll to top script
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//view count

var n = localStorage.getItem("on_load_counter");
if (n === null){
    n = 0;
}
n++;
localStorage.setItem("on_load_counter",n);
document.getElementById("eye-count").innerHTML = n;

// POP-UP COMMENT SCRIPT
document.querySelector("#comment").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "block";
});

document.querySelector("#close").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "none";
});


var user1 = document.getElementById("text");
function shut(){
	if ( user1.value == ""){
		user1.value = "";
		alert
		("enter comment");
	}
	else{
			document.querySelector(".popup").style.display = "none";
	}

}


// time zone
setInterval(showTime,1000);
function showTime(){
    
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    // let second = time.getSeconds();
    let meridian = "AM";

    if (hour > 12){
        hour -= 12;
        meridian = "PM";
    }
    if (hour == 0){
        hour = 12;
        meridian = "AM";
    }
    let m = minute < 10 ? "0" + minute : minute;
    let m2 = hour < 10 ? "0" + hour : hour;
    let m3 = second < 10 ? "0" + second : second;
    let currentTime = m2 + ":" + m + ":" + m3 + meridian;

    document.getElementById("clock").innerHTML = currentTime
}
showTime();

function showDate(){
    let date = new Date();
    let day = date.getDay();
    let monthDay = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();

    if(day == 0){
        day = "sun";
    }
    if(day == 1){
        day = "mon";
    }
    if(day == 2){
        day = "tue";
    }
    if(day == 3){
        day = "wed";
    }
    if(day == 4){
        day = "thu";
    }
    if(day == 5){
        day = "fri";
    }
    if(day == 6){
        day = "sat";
    }



    if (month == 0){
        month = "January";
    }
    if (month == 1){
        month = "Feburary";
    }
    if (month == 2){
        month = "March";
    }
    if (month == 3){
        month = "April";
    }
    if (month == 4){
        month = "May";
    }
    if (month == 5){
        month = "June";
    }
    if (month == 6){
        month = "July";
    }
    if (month == 7){
        month = "August";
    }
    if (month == 8){
        month = "September";
    }
    if (month == 9){
        month = "October";
    }
    if (month == 10){
        month = "November";
    }
    if (month == 11){
        month = "December";
    }
    if (monthDay === 1){
        monthDay = monthDay + "st"
     }
    if (monthDay === 2){
        monthDay = monthDay + "nd"
     }
    if (monthDay === 3){
        monthDay = monthDay + "rd"
     }
     if (monthDay > 3){
        monthDay = monthDay + "th"
     }
    
    let currentDate =  day  + " " + monthDay + " " + month + " " + year;
    document.getElementById("date").innerHTML = currentDate;
}
showDate();

