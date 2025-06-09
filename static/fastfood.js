function showDetails(id) {
    const allBoxes = document.querySelectorAll('.details-box');
    const targetId = 'details-' + id;

    for (let i = 0; i < allBoxes.length; i++) {
        const box = allBoxes[i];

        if (box.id === targetId) {
            box.style.display = (box.style.display === 'block') ? 'none' : 'block';
        }
    }
}
