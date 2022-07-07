const zoomElement = document.querySelector("#macbook");
const TRANSLATE_SPEED = 2;
const ZOOM_SPEED = 0.1;
let fullscreen;
let translate = 50;
let zoom = 1;

document.documentElement.requestFullscreen();

document.addEventListener("wheel", function(e) {
  if(zoom > 3) {
    window.location.replace("desktop.html");
  }

  if(e.deltaY > 0 && zoom < 3) {    
    zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED}) translateY(-${translate -= TRANSLATE_SPEED}%)`;
  } else if(e.deltaY < 0 && zoom > 1) {    
    zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED}) translateY(-${translate += TRANSLATE_SPEED}%)`;
  }
});

$('body').keypress(function (e) {
  if (e.key === 'f') {
    e.preventDefault();
      document.documentElement.requestFullscreen();
  }
});

// Function which constraints viewport to go down when code is typing
function gotoBottom(id) {
  var element = document.getElementById(id)
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

//textWritting();

/*
// Function which write code on laptop's screen
function textWritting() {
  var count = 0;
  coding("press");
  $('body').keypress(function (e) {
    if (count == 0) {
      if (e.key === 'Enter') {
        coding("loading");
        setTimeout(() => {  coding("text"); }, 2500);
        count += 1;
      }
    }
  });
}

// Function which write code on laptop's screen
function coding(id) {
  var printText = $('#' + id).data('text');

  var contentArray = printText.split('/n');
  $.each(contentArray, function(index, newLine) {
    $('#' + id).append('<span style="display:block;" id="'+index+'"></span>');
    
    var lineID = index;
    var self = $(this);
      setTimeout(function () {
        $.each(self, function(index, chunk){
            setTimeout(function () {
              $('#'+lineID).append("<span>"+chunk+"</span>");
              gotoBottom("viewport");
            }, index*5);
        });
        
      }, index*100);
  });
}
*/
