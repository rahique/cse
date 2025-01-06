(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        c(e);
    new MutationObserver((e) => {
        for (const r of e)
            if (r.type === 'childList')
                for (const o of r.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && c(o);
    }).observe(document, {childList: !0, subtree: !0});
    function s(e) {
        const r = {};
        return (
            e.integrity && (r.integrity = e.integrity),
            e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
            e.crossOrigin === 'use-credentials'
                ? (r.credentials = 'include')
                : e.crossOrigin === 'anonymous'
                ? (r.credentials = 'omit')
                : (r.credentials = 'same-origin'),
            r
        );
    }
    function c(e) {
        if (e.ep) return;
        e.ep = !0;
        const r = s(e);
        fetch(e.href, r);
    }
})();
document.querySelector('#app').innerHTML = `
        <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FDhaka&showPrint=0&mode=AGENDA&showCalendars=0&src=YmMyMzQ1NzBmZTkwYzUyYmUzN2EwYzM4ZGJmYjFkMTBhYThmZDJjYTY0YTI2ZTY4NjY5Mzk2MzUyMzgyM2FkOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&hl=en&timeformat=12"
            style="border-width: 0; border-radius: 16px"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
        ></iframe>
`;
setupCounter(document.querySelector('#counter'));
