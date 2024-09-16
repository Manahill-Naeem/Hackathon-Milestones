var toggleButton = document.getElementById('toggle');
var skills = document.getElementById('skills');
// if (skills.style.display === '') {
//     skills.style.display = 'block';
// }
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
