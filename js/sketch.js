var boxes = [];

function setup() {
	createCanvas(windowWidth,windowHeight);

}

function draw() {
	background(256,256,256);
	noStroke();
	textAlign(CENTER);
	textSize(38);
	fill(175);
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
	boxes.push(new textbox(key));
}
