document.addEventListener('DOMContentLoaded', function() {
    // Get popup and close button elements
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-popup');
  
    // Function to open the popup
    function openPopup() {
      popup.style.display = 'block';
      document.body.classList.add('popup-open'); // Hide scrollbar when popup is open
    }
  
    // Function to close the popup
    function closePopup() {
      popup.style.display = 'none';
      document.body.classList.remove('popup-open'); // Show scrollbar when popup is closed
    }
  
    // Event listener to open the popup when "Others" link is clicked
    document.getElementById('others-link').addEventListener('click', function() {
      openPopup();
    });
  
    // Event listener to close the popup when close button is clicked
    closeButton.addEventListener('click', function() {
      closePopup();
    });
  
    // Event listener to close the popup when user clicks outside of it
    window.addEventListener('click', function(event) {
      if (event.target == popup) {
        closePopup();
      }
    });
  });
  