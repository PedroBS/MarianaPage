let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #8813af;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #8813af;">Soy participante activa de proyectos de tecnología</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
