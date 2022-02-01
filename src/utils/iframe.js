export default (i) => {
  const d = document, w = window,
    iW = i.contentWindow, u = parseInt(d.body.getAttribute('_iL') || 0) + 1;
  i.setAttribute('u', u);
  i.onload = function () {
    iW.postMessage({u: u}, '*');
  };
  if (!d.body.getAttribute('_iL')) {
    w.addEventListener('message', function (e) {
      if (e.data.hasOwnProperty("u")) {
        const it = d.querySelector('iframe[u="' + e.data.u + '"]');
        if (it) {
          if (e.data.hasOwnProperty("h")) {
            it.style.height = e.data.h + 'px';
          } else if (e.data.hasOwnProperty("w")) {
            it.style.width = e.data.w + 'px';
          }
        }
      }
    });
  }
  d.body.setAttribute('_il', u);
};
