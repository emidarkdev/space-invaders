const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.width = window.innerHeight;


const animation = () => {

    requestAnimationFrame(animation);
}
animation();