const tg = window.Telegram.WebApp;
tg.ready();

document.getElementById('dateOnly').addEventListener('click', () => {
  window.location.href = 'https://expented.github.io/tgdtp/?hide=time';
});

document.getElementById('dateRange').addEventListener('click', () => {
  window.location.href = 'https://expented.github.io/tgdtp/?min=2022-05-01&max=2022-05-20';
});
