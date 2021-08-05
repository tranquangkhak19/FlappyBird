var bg = function(game){
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
        this.image.src = 'images/bg_night.png'
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        this.x-=2;
        if(this.x <= -360){
            this.x = 0;
        }
    }

    this.draw = function(){
        
        if(self.loaded == false){
            return;
        }
        this.game.context.drawImage(this.image, this.x, 0);
        this.game.context.drawImage(this.image, this.x + 360, 0)
    }
}