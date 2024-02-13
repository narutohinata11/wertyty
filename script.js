document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var code = document.getElementById('code').value;
    
    if (code === 'Ammulu') {
        window.location.href = 'home1.html';
    } else {
        alert('Incorrect code! Please try again.');
    }
});
