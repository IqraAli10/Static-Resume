function toggleSection(sectionId, btn, sectionName) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
        btn.textContent = "Hide ".concat(sectionName);
    }
    else {
        section.style.display = 'none';
        btn.textContent = "Show ".concat(sectionName);
    }
}
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    var educationButton = document.getElementById('toggleEducation');
    educationButton.addEventListener('click', function () {
        toggleSection('education', educationButton, 'Education');
    });
    // Initialize sections as hidden or visible
    var educationSection = document.getElementById('education');
    educationSection.style.display = 'none'; // Start hidden
});
