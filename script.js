window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 1) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});
