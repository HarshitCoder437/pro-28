class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            friction: 1,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this. r = r;
        this.body = Bodies.circle(x, y, this.r/2, options);
        World.add(world, this.body);
        this.image = loadImage("images/stone.png");
    }
    display() {
        var pos = this.body.position;

        // push()
        // translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
        // pop();
    }
}