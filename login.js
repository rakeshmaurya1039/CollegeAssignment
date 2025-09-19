 const form = document.getElementById('myForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop page from reloading
      const name = document.getElementById('username').value.trim();
      if(name){
        message.textContent = "Hello " + name + "! Your info is submitted ✅";
      } else {
        message.textContent = "Please enter your name first ⚠️";
      }
    });