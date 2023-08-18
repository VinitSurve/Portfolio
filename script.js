const spans = document.querySelectorAll('.progress-bar2 span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});
