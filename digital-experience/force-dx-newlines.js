// force-dx-newlines.js
(function (n, u) {
  (window.CXoneDfo = n),
    (window[n] =
      window[n] ||
      function () {
        (window[n].q = window[n].q || []).push(arguments);
      }),
    (window[n].u = u),
    (e = document.createElement('script')),
    (e.type = 'module'),
    (e.src = u + '?' + Math.round(Date.now() / 1e3 / 3600)),
    document.head.appendChild(e);
})('cxone', 'https://web-modules-de-na1.niceincontact.com/loader/1/loader.js');

cxone('init', '1092');
cxone('guide', 'init', '1967333e-10b5-4268-9ffa-96e8e2e33dd8');
cxone('guide', 'setDesiredGuideHeight', '700px');
cxone('guide', 'setFontSize', 15);
cxone('guide', 'setDesiredGuideWidth', '30.125em');
cxone('guide', 'setButtonSize', '4.5em');
cxone(
  'chat',
  'setCustomCss',
  `
        [data-selector="CUSTOMER_MESSAGE_BUBBLE"] > span.Linkify,
        [data-selector="AGENT_MESSAGE_BUBBLE"] > span.Linkify {
            white-space: pre-line !important;
        }

        /* Additional specificity for stubborn cases */
        div[data-selector="CUSTOMER_MESSAGE_BUBBLE"] > span.Linkify,
        div[data-selector="AGENT_MESSAGE_BUBBLE"] > span.Linkify {
            white-space: pre-line !important;
        }
    `
);
