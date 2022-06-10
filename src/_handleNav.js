import move from './_move';

export default function _handleNav() {
  if (!this.controls.prev || !this.controls.next) return;

  this.controls.prev.addEventListener('click', move.bind(this));
  this.controls.next.addEventListener('click', move.bind(this));

  const navBtns = [...this.nav.querySelectorAll('button')];

  if (!navBtns.length) return;

  navBtns.forEach(btn => {
    btn.addEventListener('click', move.bind(this));
  });
}
