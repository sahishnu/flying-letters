var boxes = [];
var backgroundColor;
var buffer = "";

function setup() {
	createCanvas(windowWidth,windowHeight);
	backgroundColor = createVector(256,256,256);

}

function draw() {
	setBackground();
	background(backgroundColor.x,backgroundColor.y,backgroundColor.z);
//	stroke(50);
	textAlign(CENTER);
	textSize(38);
	fill(25);
//	noFill();
	text("Type Something",width/2,height/2);
	for(var i = 0; i < boxes.length; i++){
		boxes[i].show();
		boxes[i].update();
		if(boxes[i].offscreen()){
			boxes.splice(i,1);
		};
	}
}

function keyTyped(){
	buffer += key;
	if(buffer.length >= 10){
		buffer = "";
	}
	boxes.push(new textbox(key));
}

function setBackground(){
	if (buffer.search("red") != -1){
		backgroundColor.x = 237;
		backgroundColor.y = 113;
		backgroundColor.z = 97;
		buffer = "";
	}else if(buffer.search("green") != -1){
		backgroundColor.x = 120;
		backgroundColor.y = 237;
		backgroundColor.z = 97;
		buffer = "";
	}else if(buffer.search("blue") != -1){
		backgroundColor.x = 97;
		backgroundColor.y = 218;
		backgroundColor.z = 237;
		buffer = "";
	}else if(buffer.search("yellow") != -1){
		backgroundColor.x = 237;
		backgroundColor.y = 227;
		backgroundColor.z = 97;
		buffer = "";
	}else if(buffer.search("purple") != -1){
		backgroundColor.x = 157;
		backgroundColor.y = 97;
		backgroundColor.z = 237;
		buffer = "";
	}else if(buffer.search("orange") != -1){
		backgroundColor.x = 237;
		backgroundColor.y = 157;
		backgroundColor.z = 97;
		buffer = "";
	}else if(buffer.search("pink") != -1){
		backgroundColor.x = 237;
		backgroundColor.y = 97;
		backgroundColor.z = 190;
		buffer = "";
	}else if(buffer.search("white") != -1){
		backgroundColor.x = 256;
		backgroundColor.y = 256;
		backgroundColor.z = 256;
		buffer = "";
	}


}
