// Requerimiento de la skill de Anime.js: Desactivar autoplay y registrar la animación en window.__hfAnime
const anim = anime({
  targets: '.logo', // Ahora anima a cualquier elemento con esta clase
  rotateY: [0, 360],
  scale: [0.8, 1, 0.8], // Efecto de latido suave mientras gira
  delay: anime.stagger(200), // Desfase para que giren uno tras otro
  duration: 4000,
  easing: 'easeInOutSine',
  autoplay: false, // ¡Muy importante para HyperFrames!
  loop: false // Hyperframes dictará el avance en base al data-duration
});

// Registramos para HyperFrames
window.__hfAnime = window.__hfAnime || [];
window.__hfAnime.push(anim);
