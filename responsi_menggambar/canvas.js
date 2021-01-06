window.addEventListener('load', () =>  {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Ukuran
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  
    //variabel
    let painting = false;

    function starPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = 'navy';
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    //EventListeners
    canvas.addEventListener('mousedown', starPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});