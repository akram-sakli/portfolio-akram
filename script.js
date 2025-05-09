const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];

for (let i = 0; i < 100; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5,
        vy: Math.random() * 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#999";
        ctx.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x > canvas.width || dot.x < 0) dot.vx *= -1;
        if (dot.y > canvas.height || dot.y < 0) dot.vy *= -1;
    });

    requestAnimationFrame(draw);
}

draw();
