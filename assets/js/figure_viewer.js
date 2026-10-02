// Opens publication figures in an in-page viewer instead of a new tab.
(function () {
    var dialog = document.getElementById('figure-viewer');
    if (!dialog || typeof dialog.showModal !== 'function') return; // very old browsers: the link just opens the image
    var img = dialog.querySelector('.fig-viewer-img');
    var caption = dialog.querySelector('.fig-viewer-caption');

    document.addEventListener('click', function (e) {
        var link = e.target.closest('a.pub-cover-link');
        if (!link) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // keep "open in new tab"
        e.preventDefault();
        img.src = link.href;
        img.alt = link.dataset.caption || '';
        caption.textContent = link.dataset.caption || '';
        dialog.showModal();
    });

    // Click outside the figure to close (built in via closedby="any"; this covers browsers without it, e.g. Safari)
    if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener('click', function (e) {
            if (e.target !== dialog) return;
            var r = dialog.getBoundingClientRect();
            var inside = r.top <= e.clientY && e.clientY <= r.bottom && r.left <= e.clientX && e.clientX <= r.right;
            if (!inside) dialog.close();
        });
    }

    dialog.addEventListener('close', function () { img.removeAttribute('src'); });
})();
