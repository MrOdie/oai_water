export function toggle() {
  const titles = document.querySelectorAll('.toggle__title');
  const bodies = document.querySelectorAll('.toggle__body');

  titles.forEach((el, i) => {
    el.addEventListener('click', (e) => {

      if (e.target.classList.contains('active')) return

      titles.forEach(el => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      })

      el.classList.add('active');

      let id = e.target.dataset.toggle;

      bodies.forEach(el => {
        if (el.classList.contains('visible')) {
          el.classList.remove('visible');
        }
      })

      let body = document.getElementById(id);

      body.classList.add('visible');
    })
  });
}