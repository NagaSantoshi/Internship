// document.addEventListener('DOMContentLoaded', () => {
//     const modelsContainer = document.getElementById('models-container');
//     const modelsList = document.getElementById('models-list');

//     // Function to fetch car data
//     window.fetchCarData = function(xmlFile) {
//         fetch(xmlFile)
//             .then(response => response.text())
//             .then(data => {
//                 const parser = new DOMParser();
//                 const xmlDoc = parser.parseFromString(data, 'application/xml');
//                 const cars = xmlDoc.querySelector('wagoneer') || xmlDoc.querySelector('grand_wagoneer');
//                 const models = cars.querySelector('models');

//                 // Clear previous models list
//                 modelsList.innerHTML = '';

//                 for (let model of models.children) {
//                     if (model.tagName !== '#text') {
//                         const display = model.querySelector('display').textContent;
//                         const msrp = model.querySelector('msrp').textContent;
//                         const drive = model.querySelector('drive').textContent;
//                         const mpgHwy = model.querySelector('mpg hwy').textContent;
//                         const mpgCity = model.querySelector('mpg city').textContent;

//                         // Get all image URLs
//                         const imageElements = model.querySelectorAll('image');
//                         const imagesHtml = Array.from(imageElements).map(img => {
//                             const imageUrl = img.textContent;
//                             console.log(`Image URL for ${display}: ${imageUrl}`); // Debug log
//                             return `<img src="${imageUrl}" alt="${display}">`;
//                         }).join('');

//                         const li = document.createElement('li');
//                         li.innerHTML = `
//                             <h3>${display}</h3>
//                             <div class="model-images">${imagesHtml}</div>
//                             <p>MSRP: $${msrp}</p>
//                             <p>Drive: ${drive}</p>
//                             <p>Highway MPG: ${mpgHwy}</p>
//                             <p>City MPG: ${mpgCity}</p>
//                         `;
//                         modelsList.appendChild(li);
//                     }
//                 }

//                 // Show the models container
//                 modelsContainer.style.display = 'block';
//             })
//             .catch(error => console.error('Error fetching or parsing XML:', error));
//     };
// });
//  document.addEventListener('DOMContentLoaded', () => {
    
//    window.fetchCarData = function(xmlFile) {
        
//        window.location.href = `models.html?xml=${xmlFile}`;
//          };
// });

// document.addEventListener("DOMContentLoaded", function() {
//     function fetchCarData(xmlFile, defaultImg, yearImg, element) {

//         var siblings = element.parentNode.children;
//         for (var i = 0; i < siblings.length; i++) {
//             siblings[i].classList.remove('active');
//         }


//         element.classList.add('active');

        
//         var vehicleDiv = element.closest('.vehicle');
//         var imgTag = vehicleDiv.querySelector('img');
//         imgTag.src = yearImg;

       
//         var modelsContainer = document.getElementById('models-container');
//         var modelsList = document.getElementById('models-list');
//         modelsList.innerHTML = ''; // Clear previous models

       
//         setTimeout(function() {
           
//             var models = ["Model 1", "Model 2", "Model 3"];
//             models.forEach(function(model) {
//                 var li = document.createElement('li');
//                 li.textContent = model;
//                 modelsList.appendChild(li);
//             });

//             modelsContainer.style.display = 'block';
//         }, 1000);
//     }

    
//     window.fetchCarData = fetchCarData;
// });
// document.addEventListener('DOMContentLoaded', () => {
//     window.fetchCarData = function(xmlFile, imgSrc, element) {
//         // Remove 'active' class from all siblings
//         var siblings = element.parentNode.children;
//         for (var i = 0; i < siblings.length; i++) {
//             siblings[i].classList.remove('active');
//         }

//         // Add 'active' class to the clicked element
//         element.classList.add('active');

//         // Change the image based on the year
//         var vehicleDiv = element.closest('.vehicle');
//         var imgTag = vehicleDiv.querySelector('img');
//         imgTag.src = imgSrc;

//         // Redirect to models page with the xmlFile as a parameter
//         window.location.href = `models.html?xml=${xmlFile}`;
//     };
// });
// document.addEventListener('DOMContentLoaded', () => {
//     window.fetchCarData = function(xmlFile, imgSrc, element) {
//         // Remove 'active' class from all siblings
//         const siblings = element.parentNode.children;
//         for (let i = 0; i < siblings.length; i++) {
//             siblings[i].classList.remove('active');
//         }

//         // Add 'active' class to the clicked element
//         element.classList.add('active');

//         // Change the image based on the year
//         const vehicleDiv = element.closest('.vehicle');
//         const imgTag = vehicleDiv.querySelector('img');
//         imgTag.src = imgSrc;

//         // Redirect to models page with the xmlFile as a parameter
//         window.location.href = `models.html?xml=${xmlFile}`;
//     };
// });
document.addEventListener('DOMContentLoaded', () => {
    window.fetchCarData = function(xmlFile, imgSrc2023, imgSrc2024, element) {
        // Remove 'active' class from all siblings
        const siblings = element.parentNode.children;
        for (let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('active');
        }

        // Add 'active' class to the clicked element
        element.classList.add('active');

        // Change the image based on the year
        const vehicleDiv = element.closest('.vehicle');
        const imgTag = vehicleDiv.querySelector('img');
        imgTag.src = element.textContent === '2023' ? imgSrc2023 : imgSrc2024;

        // Redirect to models page with the xmlFile as a parameter
        window.location.href = `models.html?xml=${xmlFile}`;
    };
});
