
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 55,
});

const myModal = document.getElementById('modal-contactame')
const myElement = document.getElementById('contactame')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

typewriter
  .pauseFor(1000)
  .typeString('Lic. Negocios Internacionales')
  .pauseFor(300)
  .deleteChars(29)
  .typeString('Jacquelinne Landa')
  .pauseFor(300)
  .deleteChars(17)
  .start();