window.angular = {};
window.angular.version = "9.1.4";

if(window.chrome) {
    var iscursed = false;

    var devtools = function() {};
    devtools.toString = function() {
        
        if(!iscursed) {
            document.write("<p>I̸ ̸w̴o̴n̴'̵t̶ ̵l̵e̶t̶ ̴y̶o̷u̵ ̶d̸o̴ ̶t̶h̴a̶t̸</p>" + "<br><br><br><p style='font-size: 32px'>or, if you really want, use FF.</p>");
            iscursed = true;
        }
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('body').style.color = "white";
        document.querySelector('body').style.display = "flex";
        document.querySelector('body').style.flexDirection = "column";
        document.querySelector('body').style.alignItems = "center";
        document.querySelector('body').style.justifyContent = "center";
        document.querySelector('body').style.textAlign = "center";
        document.querySelector('body').style.fontSize = "72px";
        document.title = "d̵o̵n̶'̴t̴   ̴u̵s̵e̷   ̷d̶e̷v̷t̶o̴o̷l̵s̴   ̵p̸l̴e̶a̴s̸e̴";
        return '-'
    }
    
    setInterval(()=>{
        console.profile(devtools)
        console.profileEnd(devtools)
    }, 1000)
}
