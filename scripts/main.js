document.getElementById("searchButton").addEventListener("click", function() {
    const inputName = document.getElementById("studentNameInput").value.trim();
    const studentInfoDiv = document.getElementById("studentInfo");

    // Clear previous results
    studentInfoDiv.innerHTML = "";

    if (!inputName) {
        studentInfoDiv.innerHTML = "<p class='error'>Please enter a name.</p>";
        return;
    }

    

    // Find student (case-insensitive)
    const student = mockStudents.find(s =>
        s.firstName.toLowerCase().includes(inputName.toLowerCase()) ||
        s.lastName.toLowerCase().includes(inputName.toLowerCase())
    );

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