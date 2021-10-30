const LadyBird = document.getElementById('LadyBird')
const modal_container2 = document.getElementById('modal_container2')
const close2 = document.getElementById('close2')

open.addEventListener('click', () => {
    modal_container2.classList.add('show')
});

close.addEventListener('click', () => {
    modal_container2.classList.remove('show')
});