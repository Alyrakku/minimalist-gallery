function showImage(imageElement) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageElement.querySelector('img').src; // Obtiene la URL de la imagen dentro del div
}
