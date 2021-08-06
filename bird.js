var bird = function(game){
    this.game = game;
    this.images = [];
    this.img1loaded = false;
    this.img2loaded = false;
    this.img3loaded = false;

    this.currentImage = null;
    this.currentFrame = 0;

    this.x = 60
    this.y = 0;
    this.speedY = 0;
    this.acceleration = 1;


    self = this;

    this.init = function(){
        this.loadImages();
    }

    this.loadImages = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.onload = function(){
            self.img1loaded = true;
            console.log("img loaded 1")
        }
        img2.onload = function(){
            self.img2loaded = true;
            console.log("img loaded 2")
        }
        img3.onload = function(){
            self.img3loaded = true;
            console.log("img loaded 3")
        }

        //load all images
        img1.src = 'images/bird1.png';
        img2.src = 'images/bird2.png';
        img3.src = 'images/bird3.jpg';

        this.images.push(img1);
        this.images.push(img2);
        this.images.push(img3);
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        self.currentFrame++;
        //change bird image
        if(self.currentFrame==30){
            self.currentFrame = 0;
        }
        if(self.currentFrame>=15){
            self.currentImage = self.images[0];
        }
        else{
            self.currentImage = self.images[1];
        }

        //check game over
        if(this.y < 460){
            this.speedY += this.acceleration;
            this.y += this.speedY;
        }
        else{
            this.game.gameOver = true;
            this.y = 520;
        }

        //check hit the pipe
        this.checkHitPipe();

    }

    this.checkHitPipe = function(){
        if(this.x > this.game.pipe.x-60 && this.x < this.game.pipe.x+80 && (this.y < this.game.pipe.y - 30 || this.y > this.game.pipe.y + 200 - 30)){
            this.game.gameOver = true;
        }
    }

    this.flap = function(){
        if(this.game.gameOver){
            return;
        }
        this.speedY = -10;
    }

    this.draw = function(){
        if(this.img1loaded && this.img2loaded && this.img3loaded){
            self.game.context.drawImage(self.currentImage, this.x, this.y, 110, 110);
        }
    }
}