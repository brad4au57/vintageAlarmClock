//Start the time
$(document).ready(function(){
  function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); 
    var hh = h;
    if(h > 12){
      hh = h - 12;
    }
    if (hh == 0){
      hh = 12;
    }
    if(h < 12){
      $('.pm-dot').css('display', 'none');
    }
    hh = checkTime(hh);
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout (startTime,500);
    //Display in HTML page
    $('#time').text(hh+':'+m+':'+s)
  }
  
  //Check the time
  function checkTime (i){
    //Adds zeros if less than 10
    if (i<10){i = "0" + i};
    return i;
  };
  startTime();
  
  //Change alarm to on or off
  $('.alarm-text').click(function(){
     $('.alarm-bell').toggle();  
  });
  
});