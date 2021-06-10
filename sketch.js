const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, ground;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 700, 1100, 20);
	stone = new Stone(100, 600, 20);
	tree = new Tree(750, 510, 300, 400);
	mango1 = new Mango(700, 400);
	mango2 = new Mango(763, 434);
	mango3 = new Mango(680, 451);
	mango4 = new Mango(772, 400);
	mango5 = new Mango(812, 484);
	slingshot = new Slingshot(stone.body, { x: 100, y: 600 });

	Engine.run(engine);
}


function draw() {
	background("aqua");

	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	slingshot.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);

	imageMode(CENTER);
	image(boy, 150, 650, 150, 200);

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 235, y: 420 });
		slingshot.attach(stone.body);
	}
}

function detectCollision(tempStone, tempMango) {
	stoneBodyPosition = tempStone.body.position;
	mangoBodyPosition = tempMango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= tempMango.r + tempStone.r) {
		Matter.Body.setStatic(tempMango.body, false);
	}
}