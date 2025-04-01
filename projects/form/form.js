document.getElementById('dio').addEventListener('submit', function(event){
    event.preventDefault();
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const mmr = document.getElementById('mmr').value;
    const roles  = document.getElementById('role').value;
    const comments = document.getElementById('comments').value;
    const flexible = document.getElementById('agree').value;
    const hero = document.getElementById('Heroes').value
    if (!fullname){
        alert("You need to enter your name.");
        return;
    }

    if (!mmr || mmr <5000){
        alert("You need to be more than 5000 mmr");
        return;
    }

    if (!roles) {
        alert("Please select your main role.");
        return;
    }

    if (!hero || hero === ""){
        alert("Please select your favorite hero");
        return;
    }
    
    const formData = {
        fullname: fullname,
        email: email,
        pass: pass,
        mmr: mmr,
        hero: hero,
        roles: roles,
        comments: comments,
        flexible: flexible,

    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("dio").innerHTML = ""
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    }
    xhr.send(JSON.stringify(formData));
    alert(`Success: ${fullname}`);
});