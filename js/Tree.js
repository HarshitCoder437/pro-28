class Tree {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);
        this.image = loadImage("images/tree.png");
    }

    display() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}