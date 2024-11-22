       
        let currentLocation = {
            latitude: null,
            longitude: null,
            address: null,
            postalCode: null
        };

        //SET DEFAULT MAP POSİTİON (REST POSİTİON)
        const map = L.map('map').setView([43.7315, -79.7624], 13); 
        let marker; 

        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
            
        }).addTo(map);

        // handling reverse geocoding
        async function getAddress(lat, lon) {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch address');
                }

                const data = await response.json();

                
                currentLocation = {
                    latitude: lat,
                    longitude: lon,
                    address: data.display_name || "Address not found",
                    postalCode: data.address.postcode || "Postal code not found"
                };

                
                if (marker) {
                    marker.bindPopup(
                        `Address: ${currentLocation.address}<br>Postal Code: ${currentLocation.postalCode}`
                    ).openPopup();
                }

                
                document.getElementById('location-info').textContent =
                    `${currentLocation.address} (Postal Code: ${currentLocation.postalCode})`;

            } catch (error) {
                console.error("Error fetching address:", error);
                document.getElementById('location-info').textContent = "Error fetching address";
                throw error;
            }
        }

        // Add click event to place marker and get address
        map.on('click', async function (e) {
            const { lat, lng } = e.latlng;

            
            if (marker) {
                map.removeLayer(marker);
            }

            
            marker = L.marker([lat, lng]).addTo(map);

            
            await getAddress(lat, lng);
        });

        // Function  VALİDATİON
        function validateForm() {
            const ageRange = document.getElementById('age-range').value;
            const gender = document.getElementById('gender').value;

            if (!ageRange || !gender) {
                alert('Please fill in all required fields');
                return false;
            }

            if (!currentLocation.latitude || !currentLocation.longitude) {
                alert('Please select a location on the map');
                return false;
            }

            return true;
        }

        
        async function getInformation() {
            try {
                
                if (!validateForm()) {
                    return;
                }

                const information = {
                    age: document.getElementById('age-range').value,
                    gender: document.getElementById('gender').value,
                    postalCode: currentLocation.postalCode,
                    latt: currentLocation.latitude,
                    lott: currentLocation.longitude,
                    
                    comment: "" //NOT İMPLEMENTED !!
                };

                const response = await fetch('http://127.0.0.1:3000/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(information)
                });

                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }

                
                document.getElementById('personal-info').textContent =
                    `Gender: ${information.gender}, Age Range: ${information.ageRange}`;

               
                document.getElementById('age-range').value = '';
                document.getElementById('gender').value = '';

                

            } catch (error) {
                console.error('Error submitting form:', error);
                
            }
        }
