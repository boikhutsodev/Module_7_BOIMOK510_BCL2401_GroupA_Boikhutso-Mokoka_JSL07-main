document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('.close');
    const certificateContent = document.getElementById('certificateContent');
  
    // Hide the modal
    modal.style.display = 'none';
    
      cardForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Get input values
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById('personalMessage');
        const courseNameInput = document.getElementById('courseName'); // Make sure this input exists in your HTML
  
        const studentName = studentNameInput.value;
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput.value;
  
        // Generate certificate content dynamically
        certificateContent.innerHTML = `
            <h2>Certificate of Achievement</h2>
            <p>This is to certify that</p>
            <h3>${studentName}</h3>
            <p>has almost completed the</p>
            <h4>${courseName} Course</h4>
            <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
            <img src="./logo.png" alt="Seal" style="margin-top: 20px; max-height: 100px;"> <!-- Adjust the max-height as needed -->
            <p>${personalMessage}</p>
        `;
  
        // Display the modal
        modal.style.display = 'block';
  
        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        courseNameInput.value = '';
    });
  
    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
  });
  