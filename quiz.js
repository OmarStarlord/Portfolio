function checkAnswers() {
    let radios = document.querySelectorAll('input[type="radio"]');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let allQuestionsAnswered = true;
  
    radios.forEach(radio => {
      if (!radio.checked) {
        allQuestionsAnswered = false;
      }
    });
  
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        allQuestionsAnswered = false;
      }
    });
  
    if (allQuestionsAnswered) {
      alert('All questions have been answered!');
    } else {
      alert('Please answer all questions before submitting.');
    }
}

function resetFields() {
    let radios = document.querySelectorAll('input[type="radio"]');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    radios.forEach(radio => {
      radio.checked = false;
    });
  
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }