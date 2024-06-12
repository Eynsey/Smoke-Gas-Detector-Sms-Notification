// Replace with your Blynk server information
const BLYNK_AUTH_TOKEN = 'YourAuthToken';
const BLYNK_VPIN = 'V1';
const BLYNK_URL = `https://blynk-cloud.com/${BLYNK_AUTH_TOKEN}/get/${BLYNK_VPIN}`;

// Function to update the battery percentage displayed on the webpage
function updateBatteryPercentage(percentage) {
  document.getElementById("battery-percentage").innerText = percentage + "%";
}

// Function to fetch battery percentage from Blynk (simulated with a constant value)
function fetchBatteryPercentageFromBlynk() {
  var batteryPercentage = 50; // Example battery percentage received from Blynk (simulated)
  updateBatteryPercentage(batteryPercentage); // Update the displayed battery percentage
}

// Fetch the battery percentage initially when the page loads
fetchBatteryPercentageFromBlynk();

// Set interval to periodically fetch battery percentage from Blynk every 5 seconds (5000 milliseconds)
setInterval(fetchBatteryPercentageFromBlynk, 5000);

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

// Function to update the graph with the fetched smoke sensor data
function updateGraph(smokeValue) {
  const smokeBar = document.querySelector('.bar4'); // Assuming the smoke bar is .bar4
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