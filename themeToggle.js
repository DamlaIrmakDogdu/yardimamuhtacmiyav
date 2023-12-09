document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const burnEyesText = document.getElementById('burnEyesText');
    const clickSound = document.getElementById('clickSound');

    themeToggleBtn.addEventListener('click', function () {
        const isSwitchingToDarkTheme = document.body.classList.contains('light-theme');

        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        themeToggleBtn.classList.toggle('clicked');

        if (!isSwitchingToDarkTheme) {
            clickSound.play();
        }
        const isLightTheme = document.body.classList.contains('light-theme');
        burnEyesText.textContent = isLightTheme ? 'AAAAAAAAAAAAAAAA' : 'click here if youre a masochist';
    });
});