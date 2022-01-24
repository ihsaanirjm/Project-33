class Snow{
    constructor(x, y ,width, height){
        var options = {
            density: 0.1, 
           
        }
        this.body = Bodies.rectangle(x,y,width, height, options)
        this.width = width
        this.height = height
        this.image = loadImage("snow4.webp")
        World.add(myWorld,this.body)
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
     image(this.image,pos.x, pos.y, this.width, this.height)
    }
}