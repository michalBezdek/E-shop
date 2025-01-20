document.getElementById('layoutToggle').addEventListener('change', (e) => {
    const container = document.getElementById('products');
    if (e.target.id === 'gridLayout') {
        container.classList.add('grid-layout');
    } else if (e.target.id === 'lineLayout') {
        container.classList.remove('grid-layout');
    }
});
