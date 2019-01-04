let canvas = document.querySelector("#space") ;
let ctx = canvas.getContext('2d') ;

var zoom = 1 ;

let sun = new SpaceObject("sunx45" , canvas.width / 2, canvas.height / 2 , 10/zoom , 500 ,  0 , 0) ;
sun.render() ;

const updateSceen = () => {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height ) ;
    sun.radius = 10/zoom ;
    sun.render() ;
}

setInterval(updateSceen , 10) ;