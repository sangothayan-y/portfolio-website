(function(){
    const card=document.getElementById('title');
    const container=document.querySelector('#pic');       

    const max_rotation=18;

    function handleMouseMove(e){
        const rect=container.getBoundingClientRect();
        let mouseX=(e.clientX-rect.left)/rect.width;
        let mouseY=(e.clientY-rect.top)/rect.height;
        mouseX=Math.min(1,Math.max(0,mouseX));
        mouseY=Math.min(1,Math.max(0,mouseY));

        const rotateY=(mouseX -0.5)*2* max_rotation;
        const rotateX=( 0.5-mouseY)*2* max_rotation;
        card.style.transform=`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        const shadowX=(mouseX -0.5)*20;
        const shadowY=( 0.5-mouseY)*15;
        card.style.boxShadow=`${shadowX}px ${shadowY}px 40px -12px rgba(0,0,0,0.5)`;
    }
    function restcard(){
        card.style.transform='perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.boxShadow='0 25px 40px -12px rgba(0,0,0,0.5)';
    }

    container.addEventListener('mousemove',handleMouseMove);
    container.addEventListener('mouseout',restcard);

    container.addEventListener('touchmove',(e)=>{
        if(e.touches.length){
           const touch=e.touches[0];
           const fakevebt={clintX:touch.clientX,clientY:touch.clientY};
           handleMouseMove(fakevebt);
        }

    });
    container.addEventListener('touchend',restcard);
})();

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});