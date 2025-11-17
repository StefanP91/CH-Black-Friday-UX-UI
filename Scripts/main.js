//  INITIALIZATION OF AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 650,
    once: false,
  });
});

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    const content = item.nextElementSibling;
    const button = item.querySelector('.toggle');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.textContent = '−';
    }
  });
});
