function changeTab(tabId) {
    // Hide all content
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(content => content.classList.remove('active'));
  
    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected content and activate the corresponding tab
    const selectedContent = document.getElementById(tabId + '-content');
    selectedContent.classList.add('active');
  
    const selectedTab = document.querySelector('.tab[data-tab="' + tabId + '"]');
    selectedTab.classList.add('active');
}

const changeTabPopular = (tabId) =>{
    // hide all content
    
}
  
