var base = function(game){
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
        this.image.src = 'images/base.png'
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        this.x-=4
        if(this.x <= -312){
            this.x = 0;
        }
    }

    this.draw = function(){
        
        if(self.loaded == false){
            return;
        }
        this.game.context.drawImage(this.image, this.x, this.game.height-90);
        this.game.context.drawImage(this.image, this.x + 336, this.game.height-90)
    }
}