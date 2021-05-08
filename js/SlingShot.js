class SlingShot {
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:40
        }
        this.pointB=pointB
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
        
    }

attach(body){
    this.sling.bodyA=body;
}

   fly(){
       this.sling.bodyA=null
   }
    display(){
       
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB
push();
        strokeWeight(10)
        stroke(48,22,8)
        

        
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
       // line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}}