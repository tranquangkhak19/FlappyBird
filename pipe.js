var pipe = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 360;
    this.y = 100;

    var self = this;

    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
            console.log('img loaded')
        }
        this.image.src = 'images/pipe.png'
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        this.x-=4;
        if(this.x<=-80){
            this.x = 360;
            this.y = 100 + Math.random()*200;
        }
        
    }

    this.draw = function(){
        
        if(self.loaded == false){
            return;
        }
        this.game.context.drawImage(this.image, this.x, this.y, 80, -400);
        this.game.context.drawImage(this.image, this.x, this.y + 200, 80, 400);
    }
}