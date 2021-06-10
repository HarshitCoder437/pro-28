class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.image = loadImage("images/mango.png");
        this.body = Bodies.circle(this.x, this.y, 30, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 30);
    }
}