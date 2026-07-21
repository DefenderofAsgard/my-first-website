(function () {
  const canvas = document.getElementById('matrix-rain');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
  const fontSize = 18;

  let x = Math.random() * canvas.width;
  let y = 0;

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';
    ctx.fillStyle = '#39ff14';
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, x, y);

    y += fontSize;

    if (y > canvas.height + 100) {
      y = 0;
      x = Math.random() * canvas.width;
    }
  }

  setInterval(draw, 60);
})();
