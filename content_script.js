console.log("AdBlocker Started");

function ad_elements() {

    skip = document.getElementsByClassName("ytp-ad-skip-button-container")[0].click();
    skip.onclick = console.log('Ad_skiped')


    }
var interval = setInterval(ad_elements, 500);
interval;

/*setInterval( function() {
       var myNode = document.querySelector("#player-ads");
          while (myNode.firstChild) {
              myNode.removeChild(myNode.firstChild);}
       var ad_closed = document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        ad_closed.onclick = console.log('Ad_closed')


    }
    }, 1000)
    */
function home() {
    document.getElementById("masthead-ad").style.display ='none'
    }
var gonn = setInterval(home, 1000)
gonn;


function Ad() {
       var myNode = document.querySelector("#player-ads");
           while (myNode.firstChild) {
               myNode.removeChild(myNode.firstChild);
           }
       Ad_closed = document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
       Ad_closed.onclick = console.log('Ad_closed')

    }



var time = setInterval(Ad, 1000)
time;

var p = setInterval(function (){
    console.clear(Error)
},10000)
p;






























