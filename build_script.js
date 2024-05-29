document.addEventListener("DOMContentLoaded", () => {
    const vehicles = document.querySelectorAll('.vehicle');

    vehicles.forEach(vehicle => {
        vehicle.addEventListener('click', () => {
            const vehicleId = vehicle.id;
            renderVehicleDetails(vehicleId);
        });
    });
});

function renderVehicleDetails(vehicleId) {
    // Example data, you can fetch this from a server or database
    const vehicleData = {
        compass: {
            name: "Compass",
            price: "₹20,69,000",
            description: "A compact SUV with excellent features.",
            image: "compass.jpg"
        },
        meridian: {
            name: "Meridian",
            price: "₹33,77,000",
            description: "A premium SUV with superior comfort.",
            image: "meridian.jpg"
        },
        wrangler: {
            name: "Wrangler",
            price: "₹67,65,000",
            description: "An off-road vehicle with rugged capabilities.",
            image: "wrangler.png"
        },
        grand: {
            name: "Grand Cherokee",
            price: "₹80,50,000",
            description: "An off-road vehicle with rugged capabilities.",
            image: "grand.png"
        }
    };

    const vehicle = vehicleData[vehicleId];
    if (vehicle) {
        document.body.innerHTML = `
            <div class="vehicle-details">
                <h1>${vehicle.name}</h1>
                <img src="${vehicle.image}" alt="${vehicle.name}">
                <p>Price: ${vehicle.price}</p>
                <p>${vehicle.description}</p>
                <button onclick="goBack()">Build and Price</button>
            </div>
        `;
    }
}


function goBack() {
    window.location.reload();
}