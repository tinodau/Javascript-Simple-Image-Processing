MoveUp = () => {
   if ($('#loadCanvas').css('margin-top') == '0px' ){
      $("#loadCanvas").css('margin-top', '=0px');
   } else {
      $("#loadCanvas").css('margin-top', '-=10px');
   }
}

MoveDown = () => {
   $("#loadCanvas").css('margin-top', '+=10px');
}

MoveRight = () => {
   $("#loadCanvas").css('margin-left', '+=10px');
}

MoveLeft = () => {
   $("#loadCanvas").css('margin-left', '-=10px');
}