var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 400;
    this.height = 600;

    this.bird = null;
    this.bg = null;
    this.base = null;
    this.pipe = null;

    //game status
    this.gameOver = false;

    var self = this;

    this.init = function(){
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas);

        //create new bird
        this.bird = new bird(this);
        this.bird.init();

        //create background
        this.bg = new bg(this);
        this.bg.init();

        //create base
        this.base = new base(this);
        this.base.init();

        //create pipe
        this.pipe = new pipe(this);
        this.pipe.init();

        //listen mouse event
        this.listenMouse();

        this.loop();
    }

    this.listenMouse = function(){
        this.canvas.addEventListener('click', function(){
            self.bird.flap();
        })
    }
    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update = function(){
        this.bird.update();
        this.bg.update();
        this.base.update();
        this.pipe.update();
    }

    this.draw = function(){
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        

    }
}

var g = new game();
g.init();