/*********************************/
/*This script contains everything*/
/*that involves resizing the     */
/*game screen                    */
/*********************************/

/************************************************/

  
//checks size of screen and adjusted accordingly
function sizeCheck(){
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	if(windowWidth < 800){
		
		
			
		
		
		var background = document.getElementById("sky");
		var mittins = document.getElementById("mittins");
		var leftCloud = document.getElementById("leftCloud");
		var rightCloud = document.getElementById("rightCloud");
		var targetText = document.getElementById("targetText");
		var pauseIcon=document.getElementById("pauseIcon");
		var lifeDisplay=document.getElementById("life");
		var speechBubble=document.querySelector(".speechBubble");
		var checkTarget = document.querySelector(".targetShape");
		var scoreText= document.getElementById("score");
		var thoseBuckets = document.querySelectorAll(".bucket");
		scoreText.style.cssText="position:absolute;margin-left:0%;top:25%;font-family:Comic Sans MS;font-size:24px;font-style:bold;";
		if(speechBubble!=null){
			speechBubble.style.cssText="position:absolute;top:4%;margin-left:0%;width:40%;";
		}
		var bigBackground = document.getElementById("largeBackround");
		if(bigBackground!=null){
			bigBackground.parentNode.removeChild(bigBackground);
		}	
		scoreText.style.cssText="position:absolute;margin-right:5%;float:right;right:0;top:23%;font-family:Comic Sans MS;font-size:24px;font-style:bold;";
		checkTarget.style.cssText="position:absolute; top:26%;margin-left:auto;margin-right:auto;left:0;right:0;width:15%;height:10%;";
		lifeDisplay.style.cssText="margin-right:10%;float:right;right:10%;"
		pauseIcon.style.cssText="position:absolute; top:1%;width:15%;height:10%;float:right;right:1%;";
		targetText.style.cssText="position:absolute; top:24%;margin-left:auto;margin-right:auto;left:0;right:0;width:20%;height:6%";
		rightCloud.style.cssText="position:absolute; top:10%;width:40%;height:28%;margin-right:0px;float:right;right:0;";
		leftCloud.style.cssText="position:absolute; top:10%;width:40%;height:30%;margin-left:0%;margin-right:auto;";
		mittins.style.cssText="position:absolute;width:40%;height:30%;top:10%;margin-left:auto;margin-right:auto;right:0;left:0;";
		background.style.cssText ="width:100%;height:100%;margin-left:0px;margin-right:0px;";	
	}
	if(windowWidth > 800){
		var bigBackground = document.getElementById("largeBackround");
		if(bigBackground==null){
			largeBackround();
		}
		

		
		largeBackround();
		var background = document.getElementById("sky");
		var mittins = document.getElementById("mittins");
		var leftCloud = document.getElementById("leftCloud");
		var rightCloud = document.getElementById("rightCloud");
		var targetText = document.getElementById("targetText");
		var pauseIcon=document.getElementById("pauseIcon");
		var lifeDisplay=document.getElementById("life");
		var speechBubble=document.querySelector(".speechBubble");
		var checkTarget = document.querySelector(".targetShape");
		checkTarget.style.cssText="position:absolute; top:26%;margin-left:auto;margin-right:auto;left:0;right:0;width:5.5%;height:10%;";
		if(speechBubble!=null){
			speechBubble.style.cssText="position:absolute;margin-left:31%;width:15%;top:4%;";
		}
		var scoreText= document.getElementById("score");
		scoreText.style.cssText="position:absolute;margin-left:63%;top:25%;font-family:Comic Sans MS;font-size:24px;font-style:bold;";
		lifeDisplay.style.cssText="float:right;right:40%;"
		pauseIcon.style.cssText="position:absolute; top:1%;width:5%;height:10%;margin-left:63%;";
		targetText.style.cssText="position:absolute; top:24%;margin-left:auto;margin-right:auto;left:0;right:0;width:7%;height:5%";
		rightCloud.style.cssText="position:absolute; top:10%;width:15%;height:28%;margin-left:53.5%;";
		leftCloud.style.cssText="position:absolute; top:10%;width:15%;height:30%;margin-left:31.5%";
		mittins.style.cssText ="position:absolute;width:15%;height:30%;top:10%;margin-left:auto;margin-right:auto; right:0;left:0;";
		background.style.cssText ="width:37%;height:95%;margin-left:auto;margin-right:auto;";	
		
	}
} 
 
var resize = null;
window.onresize = function(){
	var game = {
		element: document.getElementById("gameContainer"),
		width: 640,
		height: 960
	};
	
	
    if(resize != null){
        clearTimeout();
    }
    resize = setTimeout(function(){
		var windowHeight = window.innerHeight;
		sizeCheck();
		var bucketHeight = windowHeight * 0.75;
		// Get the dimensions of the viewport
		//var viewport = {
		//width: window.innerWidth,
		//height: window.innerHeight
		//};
		// Determine game size
		//newGameWidth = viewport.width;
		//newGameHeight = newGameWidth * game.height / game.width;
		var thoseBuckets = document.querySelectorAll(".bucket");
		for (i = 0; i < 3; i++) {
			thoseBuckets[i].style.marginTop = bucketHeight + "px";
		}
		// Resize game
		//game.element.style.width = newGameWidth + "px";
		//game.element.style.height = newGameHeight + "px";
			
        // Detect and react to the screen size here
        }, 500); // Or some other reasonable delay
};
/**************************************************/
/*Code source: Chris Thompson (power point)*/
/*and http://www.williammalone.com/articles/html5-game-scaling/ */