(function () {

    window.Graphy = function (c) {
        if (c) {
            this.setCanvas(c);
        }
    };
    
    Graphy.prototype.setCanvas = function (c) {
        this.canvas = c;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.translate(0, this.canvas.height);
        this.ctx.scale(1, -1);
        
    };
    
    Graphy.prototype.setPixelsPerUnit = function(n){
        this.scale = n;   
    };
    
    Graphy.prototype.setOrigin = function(x,y){
        this.originX = x;
        this.originY = y;
    };
    
    Graphy.prototype.drawGrid = function(){
        //draw grid lines
        var i;
        for(i = 0; i < this.canvas.width; i++){
            this.ctx.moveTo(i * this.scale,this.canvas.height);
            this.ctx.lineTo(i * this.scale,0);
            this.ctx.lineWidth = .1;
            this.ctx.strokeStyle = '#E0E0E0';
            this.ctx.stroke(); 
            
        }
        
        for(i = 0; i < this.canvas.height; i++){
            this.ctx.moveTo(0, i * this.scale);
            this.ctx.lineTo(this.canvas.width ,i * this.scale);
            this.ctx.lineWidth = .1;
            this.ctx.strokeStyle = '#E0E0E0';
            this.ctx.stroke(); 
            
        }

        
        // draw axis
        this.ctx.beginPath();
        this.ctx.moveTo(this.originX,this.canvas.height);
        this.ctx.lineTo(this.originX,0);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(0,this.canvas.height/2);
        this.ctx.lineTo(this.canvas.width,this.canvas.height/2);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    };
    
    Graphy.prototype.graph = function(eq, color,thickness){
        
        var reduct = 1 / this.scale;
        // draw function per pixel
        var x = -1 * this.canvas.width;
        
        // backup points
        var backxpix = null, backypix = null;
        
        for (x; x < this.canvas.width; x += reduct) {
            var sub = eq.replace(/x/, x);
            var y = eval(sub);
            var xpix = x * this.scale;
            var ypix = y * this.scale;
            this.ctx.fillStyle = color;
            //this.ctx.fillRect(xpix + this.originX, ypix + this.originY, thickness, thickness);
            
            // draw the smooth conencting lines
            if(backxpix !== null){
                
                this.ctx.beginPath();
                this.ctx.moveTo(backxpix,backypix);
                this.ctx.lineTo(xpix + this.originX,ypix + this.originY);
                this.ctx.lineWidth = thickness;
                this.ctx.lineJoin = "round";
                this.ctx.strokeStyle = color;
                this.ctx.stroke();
            }
            
            // set the backup points
            backxpix = xpix + this.originX;
            backypix = ypix + this.originY;
            
        }
    };
    
})();
