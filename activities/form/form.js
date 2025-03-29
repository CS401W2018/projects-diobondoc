document.getElementById('dio').addEventListener('submit', function(event){
    event.preventDefault();
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (!fullname){
        alert("You need to enter your name.");
        return;
    }

    if (!age || age <18){
        alert("You need to be 18");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        pass: pass,


    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            alert('Form submitted sucessfully')
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    }
    xhr.send(JSON.stringify(formData));
    alert(`Success: ${fullname}`);
});