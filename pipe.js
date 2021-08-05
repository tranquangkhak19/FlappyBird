var pipe = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x = 0

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
        if(this.x <= -336){
            this.x = 0;
        }
    }

    this.draw = function(){
        
        if(self.loaded == false){
            return;
        }
        this.game.context.drawImage(this.image, this.x, 400, this.x, 450);
        this.game.context.drawImage(this.image, this.x + 336, 300, this.x + 336, 350);
    }
}