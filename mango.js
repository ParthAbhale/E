class Mango{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=50;
        this.body=Bodies.circle(x,y,50,{isStatic:true})
        this.image = loadImage("mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        image(this.image,0,0,50,50)
        pop()
    }
}