// Function to handle tab switching
function showTab(tabNumber) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Show the selected tab content and activate the corresponding tab
    document.getElementById('content' + tabNumber).classList.add('active');
    document.getElementById('tab' + tabNumber).classList.add('active');
  }
  