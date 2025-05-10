
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); 
    });
}
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show'); 
    });
});

document.getElementById("searchButton").addEventListener("click", function() {
    const inputName = document.getElementById("studentNameInput").value.trim();
    const studentInfoDiv = document.getElementById("studentInfo");

    
    studentInfoDiv.innerHTML = "";

    if (!inputName) {
        studentInfoDiv.innerHTML = "<p class='error'>Please enter a name.</p>";
        return;
    }

    const inputParts = inputName.toLowerCase().split(/\s+/);
    

    const student = mockStudents.find(s => {
    
        const studentNameParts = [
            s.firstName.toLowerCase(),
            s.middleName.toLowerCase(),
            s.lastName.toLowerCase()
        ];
        
        return inputParts.every(part => 
            studentNameParts.some(namePart => namePart.includes(part))
        );
    });

    if (student) {
        studentInfoDiv.innerHTML = `
            <div class="student-card">
                <h3>Student Details</h3>
                <p><strong>Departement:</strong> ${student.faculty}</p>
                <p><strong>ID:</strong> ${student.id}</p>
                <p><strong>First Name:</strong> ${student.firstName}</p>
                <p><strong>Middle Name:</strong> ${student.middleName}</p>
                <p><strong>Last Name:</strong> ${student.lastName}</p>
                <p><strong>Sex:</strong> ${student.sex}</p>
                <p><strong>GPA:</strong> ${student.GPA}</p>
            </div>
        `;
    } else {
        studentInfoDiv.innerHTML = "<p class='error'>No student found with that name.</p>";
    }
});
