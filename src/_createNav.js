import constants from './constants';
export default function _createnav() {
  if (!this.nav) return;

  this.nav.innerHTML = '<ul></ul>';

  const list = this.nav.querySelector('ul');

  for (let i = 0; i < this.slidesData.images.length; i++) {
    const item = document.createElement('li');
    if (i === 0) {
      item.innerHTML = `<button class="${constants.isActive}" ${
        constants.index
      }="${i}">${i + 1}</button>`;
    } else {
      item.innerHTML = `<button ${constants.index}="${i}">${i + 1}</button>`;
    }

    list.appendChild(item);
  }
}
