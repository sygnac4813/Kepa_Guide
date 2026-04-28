document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = header.nextElementSibling;
      const isActive = accordionItem.classList.contains('active');

      // (Optional) Close all other accordions
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
      });

      // If it wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
    });
  });

  // Open the first accordion by default
  if (accordionHeaders.length > 0) {
    const firstItem = accordionHeaders[0].parentElement;
    const firstContent = accordionHeaders[0].nextElementSibling;
    firstItem.classList.add('active');
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
  }
});
