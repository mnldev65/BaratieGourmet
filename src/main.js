const BotaoSettings = document.querySelector('.buttonSettings')
const menu = document.querySelector('.navBar')
const btnConfigs = document.querySelector('.configs');

BotaoSettings.addEventListener('click', function settings(event) {
  menu.classList.toggle('open');
  btnConfigs.classList.toggle('rotating');

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btnSettings.classList.remove('rotating');
      console.log('Menu fechado (ESC)');
    }
  });
})