const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var shelf1,shelf2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18;
var block19,block20,block21,block22; 
var block23,block24,block25;
var block26,block27;
var block28;
var block01,block02,block03,block04,block05,block06,block07;
var block08,block09,block010,block011,block012,block013;
var block014,block015,block016,block017,block018;
var block019,block020,block021,block022; 
var block023,block024,block025;
var block026,block027;
var block028;
var polygon;
var slingshot;
var ground;


function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    shelf1=new Ground(350,400,250,20);
    shelf2=new Ground(800,300,250,20);
   
    //shelf1
    //stage1
    block1 = new Box0(250,385,30,40);
    block2 = new Box1(280,385,30,40);
    block3 = new Box0(310,385,30,40);
    block4 = new Box1(340,385,30,40);
    block5 = new Box0(370,385,30,40);
    block6 = new Box1(400,385,30,40);
    block7 = new Box0(430,385,30,40);

    //stage2
    block8=new Box1(265,330,30,40);
    block9=new Box0(295,330,30,40);
    block10=new Box1(325,330,30,40);
    block11=new Box0(355,330,30,40);
    block12=new Box1(385,330,30,40);
    block13=new Box0(415,330,30,40);

    //stage3
    block14=new Box0(280,290,30,40);
    block15=new Box1(310,290,30,40);
    block16=new Box0(340,290,30,40);
    block17=new Box1(370,290,30,40);
    block18=new Box0(400,290,30,40);

    //stage4
    block19=new Box1(295,250,30,40);
    block20=new Box0(325,250,30,40);
    block21=new Box1(355,250,30,40);
    block22=new Box0(385,250,30,40);

    //stage5
    block23=new Box0(310,210,30,40);
    block24=new Box1(340,210,30,40);
    block25=new Box0(370,210,30,40);

    //stage6
    block26=new Box1(325,170,30,40);
    block27=new Box0(355,170,30,40);

    //stage7
    block28=new Box0(340,130,30,40);



    //shelf2
    //stage1
    block01 = new Box0(700,270,30,40);
    block02 = new Box1(730,270,30,40);
    block03 = new Box0(760,270,30,40);
    block04 = new Box1(790,270,30,40);
    block05 = new Box0(820,270,30,40);
    block06 = new Box1(850,270,30,40);
    block07 = new Box0(880,270,30,40);

    //stage2
    block08=new Box1(715,230,30,40);
    block09=new Box0(745,230,30,40);
    block010=new Box1(775,230,30,40);
    block011=new Box0(805,230,30,40);
    block012=new Box1(835,230,30,40);
    block013=new Box0(865,230,30,40);

    //stage3
    block014=new Box0(730,190,30,40);
    block015=new Box1(760,190,30,40);
    block016=new Box0(790,190,30,40);
    block017=new Box1(820,190,30,40);
    block018=new Box0(850,190,30,40);

    //stage4
    block019=new Box1(745,150,30,40);
    block020=new Box0(775,150,30,40);
    block021=new Box1(805,150,30,40);
    block022=new Box0(835,150,30,40);

    //stage5
    block023=new Box0(760,110,30,40);
    block024=new Box1(790,110,30,40);
    block025=new Box0(820,110,30,40);

    //stage6
    block026=new Box1(775,70,30,40);
    block027=new Box0(805,70,30,40);

    //stage7
    block028=new Box0(790,30,30,40);

    polygon=new Polygon(100,200,150,150);

    slingshot=new SlingShot(polygon.body,{x:100,y:200});
   
    ground=new Ground(500,498,1000,4);
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);

    shelf1.display();
    shelf2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
    block21.display();
    block22.display();

    block23.display();
    block24.display();
    block25.display();

    block26.display();
    block27.display();

    block28.display();

    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();

    block08.display();
    block09.display();
    block010.display();
    block011.display();
    block012.display();
    block013.display();

    block014.display();
    block015.display();
    block016.display();
    block017.display();
    block018.display();

    block019.display();
    block020.display();
    block021.display();
    block022.display();

    block023.display();
    block024.display();
    block025.display();

    block026.display();
    block027.display();

    block028.display();

    polygon.display();

    slingshot.display();

    ground.display();
}



function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

 
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(polygon.body,{x:100,y:200});
		slingshot.attach(polygon.body);
	}
}