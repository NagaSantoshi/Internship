document.addEventListener('DOMContentLoaded', () => {
    const modelsList = document.getElementById('models-list');
    const urlParams = new URLSearchParams(window.location.search);
    const xmlFile = urlParams.get('xml');

    if (xmlFile) {
        fetch(xmlFile)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'application/xml');
                const cars = xmlDoc.querySelector('wagoneer') || xmlDoc.querySelector('grand_wagoneer') || xmlDoc.querySelector('gladiator') || xmlDoc.querySelector('renegade') || xmlDoc.querySelector('wringer_4xe') || xmlDoc.querySelector('wringer') || xmlDoc.querySelector('grand_cherokee_wl') || xmlDoc.querySelector('grand_cherokee_wl_4xe') || xmlDoc.querySelector('compass') ;
                const models = cars.querySelector('models');

                // Clear previous models list
                modelsList.innerHTML = '';

                for (let model of models.children) {
                    if (model.tagName !== '#text') {
                        const display = model.querySelector('display').textContent;
                        const msrp = model.querySelector('msrp').textContent;
                        const drive = model.querySelector('drive').textContent;
                        const mpgHwy = model.querySelector('mpg hwy').textContent;
                        const mpgCity = model.querySelector('mpg city').textContent;
                        const buildButtonHtml = `<a class="build-button" href="PAGE3/integrate1.html?car=${display}">Build</a>`;


                        // Get all image URLs
                        const imageElements = model.querySelectorAll('image');
                        const imagesHtml = Array.from(imageElements).map(img => {
                            const imageUrl = img.textContent;
                            return `<img src="${imageUrl}" alt="${display}">`;
                        }).join('');

                        const li = document.createElement('li');
                        li.innerHTML = `
                            <h3>${display}</h3>
                            <div class="model-images">${imagesHtml}</div>
                            <p>MSRP: $${msrp}</p>
                            <p>Drive: ${drive}</p>
                            <p>Highway MPG: ${mpgHwy}</p>
                            <p>City MPG: ${mpgCity}</p>
                            ${buildButtonHtml} 
                        `;
                        modelsList.appendChild(li);
                    }
                }
            })
            .catch(error => console.error('Error fetching or parsing XML:', error));
    } else {
        console.error('No XML file specified in URL parameters.');
    }
});
