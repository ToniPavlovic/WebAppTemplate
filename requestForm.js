emailjs.init('U3BGN7uS4f3thji-c'); 

function sendMail(e) {
    e.preventDefault(); 

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_fu1yz1r', 'template_veelzq4', templateParams)
        .then(function() {
            console.log('Auto-reply sent to user');
            document.getElementById('formStatus').innerHTML =
                '<span class="text-success">Request sent successfully! Check your email for confirmation.</span>';
            document.getElementById('requestForm').reset();
        }, function(error) {
            console.error('Auto-reply failed:', error);
            document.getElementById('formStatus').innerHTML =
                '<span class="text-warning">Request sent, but auto-reply failed.</span>';
        });
}

document.getElementById('requestForm').addEventListener('submit', sendMail);