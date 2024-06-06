// Replace with your Blynk server information
const BLYNK_URL = 'https://blynk-cloud.com/YourAuthToken/get/V1';

// Function to fetch sensor data from Blynk
async function fetchSensorData() {
  try {
    const response = await fetch(BLYNK_URL);
    const data = await response.json();
    return data[0]; // Assuming Blynk returns an array with one element
  } catch (error) {
    console.error('Error fetching sensor data:', error);
    return null;
  }
}

function updateGraph(smokeValue) {
  const smokeBar = document.querySelector('.bar1');
  smokeBar.style.height = `${smokeValue}%`;
  smokeBar.setAttribute('data-description', `Smoke: ${smokeValue}`);
}

// Update graph with real-time data every 5 seconds
setInterval(async () => {
  const smokeValue = await fetchSensorData();
  if (smokeValue !== null) {
    updateGraph(smokeValue);
  }
}, 5000);
