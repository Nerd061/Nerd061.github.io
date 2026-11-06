(() => {
    const dialog = document.querySelector('.image-preview');
    if (typeof dialog.showModal !== 'function') return;

    const image = new Image();
    dialog.append(image);
    let opener;

    document.querySelector('.note-content').addEventListener('click', event => {
        const link = event.target.closest('a[data-image-preview]');
        if (!link || event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        event.preventDefault();
        opener = link;
        image.alt = link.querySelector('img').alt;
        image.src = link.href;
        dialog.showModal();
    });

    dialog.addEventListener('click', event => {
        if (event.target !== image) dialog.close();
    });

    dialog.addEventListener('close', () => {
        opener.focus({ preventScroll: true });
    });
})();
