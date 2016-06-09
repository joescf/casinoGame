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

var imageIndex1 = Math.floor(Math.random() * images.length);
var imageIndex2 = Math.floor(Math.random() * images.length);
var imageIndex3 = Math.floor(Math.random() * images.length);
$(document).ready(function() {
  //add a click event to the button to start the game
  $('button').click(startGame);
  //make the windows change source on click with a timer
function startGame() {
var intervalId = setInterval(scrollTiles, 200);
}
  //stop the image when clicked
  $('#img1').click(stopScroll);
function stopScroll() {
    $(intervalId);
    $('#img1').clearInterval(intervalId);
    console.log('hi');
  }
function scrollTiles() {
  $('#img1').attr('src', images[imageIndex1]);
  imageIndex1 = Math.floor(Math.random() * images.length);
  $('#img2').attr('src', images[imageIndex2]);
  imageIndex2 = Math.floor(Math.random() * images.length);
   $('#img3').attr('src', images[imageIndex3]);
  imageIndex3 = Math.floor(Math.random() * images.length);
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








