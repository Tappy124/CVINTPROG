fetch('https://intprog1.onrender.com')
        .then(response => response.json())
        .then(data => {
            const personalInfo = data.personalInfo;
            document.getElementById('personal-info').innerHTML = `<strong>Name:</strong> ${personalInfo.name}<br>
                                                                   <strong>Address:</strong> ${personalInfo.address}<br>
                                                                   <strong>Email:</strong> ${personalInfo.email}<br>
                                                                   <strong>Phone:</strong> ${personalInfo.phoneNumber}<br>
                                                                   <strong>Birthdate:</strong> ${personalInfo.birthdate}<br>
                                                                   <strong>Sex:</strong> ${personalInfo.sex}`;

            const education = data.education;
            document.getElementById('education').innerHTML = `<strong>Degree:</strong> ${education.degree}<br>
                                                               <strong>University:</strong> ${education.university}<br>
                                                               <strong>Year:</strong> ${education.year}`;

            const experience = data.experience[0];
            document.getElementById('experience').innerHTML = `<strong>Position:</strong> ${experience.position}<br>
                                                                 <strong>Company:</strong> ${experience.company}<br>
                                                                 <strong>Year:</strong> ${experience.year}<br>
                                                                 <strong>Responsibilities:</strong><ul>${experience.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>`;
        })
        .catch(error => console.error('Error fetching data:', error));