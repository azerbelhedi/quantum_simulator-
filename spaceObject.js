class SpaceObject{

    constructor(name , x , y , radius , mass, vx , vy){
        this.name = name ;
        this.x = x ;
        this.y = y ;
        this.radius = radius ;
        this.vx = vx ;
        this.vy = vy ;
        this.mass = mass ;
    }
    
    render(){
        ctx.beginPath() ;
        ctx.arc(this.x , this.y , this.radius , 0 , Math.PI * 2 , true ) ;
        ctx.fillStyle = "red" ;
        ctx.fill() ;
        ctx.closePath() ;
    }

}