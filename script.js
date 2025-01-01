document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null;

  // Add event listeners to all divs
  images.forEach(image => {
    // When drag starts, store the dragged element
    image.addEventListener('dragstart', (e) => {
      draggedElement = e.target;
      draggedElement.classList.add('dragging');
    });

    // When drag ends, remove the dragging class
    image.addEventListener('dragend', () => {
      draggedElement.classList.remove('dragging');
      draggedElement = null;
    });

    // Allow the dragged element to be dropped by preventing the default behavior
    image.addEventListener('dragover', (e) => {
      e.preventDefault();
      image.classList.add('selected');
    });

    // Remove the selection highlight when drag leaves
    image.addEventListener('dragleave', () => {
      image.classList.remove('selected');
    });

    // Handle the drop event and swap the images
    image.addEventListener('drop', (e) => {
      e.preventDefault();
      image.classList.remove('selected');

      // Swap the background images
      const draggedImage = draggedElement.style.backgroundImage;
      const targetImage = image.style.backgroundImage;

      draggedElement.style.backgroundImage = targetImage;
      image.style.backgroundImage = draggedImage;
    });
  });
});

