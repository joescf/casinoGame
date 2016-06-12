$(document).ready(function() {
//locaton of images
var barImg = 'http://icons.iconarchive.com/icons/designcontest/casino/96/Bar-icon.png';
var treeImg = 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg';
var princeImg = 'http://images1.citypages.com/imager/u/745xauto/8239109/whatprinceate.jpg';
var codingImg = 'https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg';
var nixonElvisImg = 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/04/23/nixon-elvis.jpg?itok=_M29sjo5';
var bTTFImg = 'http://o.aolcdn.com/hss/storage/midas/f47e67f6910889f436f2a0a2242e1134/202841652/nikemags2015.png';
var manhattanImg = 'http://www.nyc-architecture.com/LM/aerial1.jpg';
var garfieldImg = 'https://pbs.twimg.com/profile_images/451027744361422849/f5KCfGHa_400x400.jpeg';
var goldImg = 'http://blog.gainesvillecoins.com/wp-content/uploads/2010/11/generic-gold-bars.jpg';
var stressedImg = 'http://www.sciencedump.com/sites/default/files/styles/youtube_dimension/public/field/teaserimage/stress_0.jpg?itok=5S0ZC0FI';
var jqueryImg = 'https://raw.githubusercontent.com/peterkokot/awesome-jquery/master/awesome-jquery.png';

//array of images
var images = [
barImg,
treeImg,
princeImg,
codingImg,
nixonElvisImg,
bTTFImg,
manhattanImg,
garfieldImg,
goldImg,
stressedImg,
jqueryImg
]
//global variables
var actualBet;
var speed;
var intervalId;
var imageIndex1 = Math.floor(Math.random() * images.length);
var imageIndex2 = Math.floor(Math.random() * images.length);
var imageIndex3 = Math.floor(Math.random() * images.length);
var bet = $('#userBet');
bet.mousemove(scrollBet);
$('.window').click(stopScroll);
//add a click event to the button to start the game
$('button').click(startGame);
function startGame() {
// place the input value in a variable
  speed = parseInt($('#speedRange').val(), 10) - 1;
  console.log('you are on speed ' + speed);
// place the potential speeds in a variable
  var speeds = [750, 550, 350, 200];
//Log actual bet so user can't increase bet after tiles have started scrolling
  actualBet = bet.val();
// set the interval Id and create a setInterval function
  intervalId = setInterval(scrollTiles, speeds[speed]);
// remove stop class from window to restart scrolling on button
$('.window').removeClass('stop');
// remove the stewie pic when button is clicked
$('#stewie').removeAttr('src');
$('#winningOutcomeDiv').addClass('hidden').removeClass('fadeIn');
}
  //stop the image when clicked
function stopScroll() {
  // add a class of 'stop' to the clicked tile
    $(this).addClass('stop');
  //check if all three tiles have been clicked (have the class of stop)
    if ($('.stop').length === 3) {
      clearInterval(intervalId);
      console.log(intervalId);
      checkBackground();
    }
  }
// check to see if background images are the same
function checkBackground() {
// grab the image tiles
//check to see if the image src's are the same
if (($('#img1').attr('src') === $('#img2').attr('src')) && ($('#img1').attr('src') === $('#img3').attr('src')) && ($('#img2').attr('src') === $('#img3').attr('src'))) {
// if all three src's are the same a pot of gold pops up
$('#winningOutcomeDiv').removeClass('hidden').addClass('fadeIn');
$('#winningResult').text('Congratulations you just won $' + actualBet * $('#speedRange').val())
// alert('Congratulations you just won $' + actualBet * $('#speedRange').val());
}
else {
  $('#stewie').attr('src', 'https://i.ytimg.com/vi/l1mzGj1LVkQ/hqdefault.jpg').addClass('fadeIn');
  }
}
function scrollBet() {
  $('#usersBet').text($('#userBet').val());
}
function scrollTiles() {
  if (!$('#img1').hasClass('stop')) {
    $('#img1').attr('src', images[imageIndex1]);
    setIndex(1);
  }
  if(!$('#img2').hasClass('stop')) {
    $('#img2').attr('src', images[imageIndex2]);
    setIndex(2);
  }
  if(!$('#img3').hasClass('stop')) {
    $('#img3').attr('src', images[imageIndex3]);
    setIndex(3);
    }
  }

function setIndex(imageIndex) {
 var newIndex = Math.floor(Math.random() * images.length);
 switch(imageIndex) {
  case 1:
    imageIndex1 = newIndex;
    break;
  case 2:
    imageIndex2 = newIndex;
    break;
  case 3:
    imageIndex3 = newIndex;
    break;
 }
}
})



//window.setInterval(startGame(), 5000);
  // setTimeout(changeBack, 500);
  // function changeBack() {
  //   $('#img3').attr("src", garfieldImg)
  //   }


  // function startGame() {
  //   for (let i = 0; i < images.length; i++) {
  //     $('#img3').attr('src', images[i]);
  //   }
  // }

 // function startGame() {
 //    setTimeout(takeNextImg, 500);
 //    function takeNextImg() {
 //      var nextImage = images.shift();
 //      $('#img3').attr("src", nextImage);
 //    }
 //  }










