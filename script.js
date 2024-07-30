//your JS code here. If required.
        document.getElementById('ageForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting the default way

            const nameInput = document.getElementById('name');
            const ageInput = document.getElementById('age');
            const name = nameInput.value.trim();
            const age = parseInt(ageInput.value);

            if (!name || isNaN(age)) {
                alert('Both fields are required.');
                return;
            }

            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000);
            })
            .then(message => {
                alert(message);
            })
            .catch(error => {
                alert(error);
            });
        });
