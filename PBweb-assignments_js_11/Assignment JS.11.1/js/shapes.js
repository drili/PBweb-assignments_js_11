var Umo = {
    init(canvas, color) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.r = 3;
        this.dx = 1;
        this.color = color;
    },

    draw() {
        this.canvas.getContext().beginPath();
        this.canvas.getContext().fillStyle = this.color;
        this.canvas.getContext().arc(this.x, this.y, this.r,
                                     0, Math.PI * 2,
                                     false);
        this.canvas.getContext().fill();
        this.canvas.getContext().closePath();
    },

    move() {
        if (this.x + this.dx > this.canvas.getWidth()
                || this.x + this.dx < 0)
              this.dx = -this.dx;

        this.x += this.dx;
        this.y = Math.pow(this.x - 200, 2) / 100;
        this.toString();
        if (this.y > this.canvas.getHeight())
            this.dx *= -1;
    },

    toString() {
        s = '';
        s += this.x + ':' + this.y;
        console.log(s);
    },
};
