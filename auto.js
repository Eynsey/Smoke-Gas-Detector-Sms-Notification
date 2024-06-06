// Example data from sensors
let sensorData = {
    methane: 50,
    alcohol: 70,
    gas: 30,
    smoke: 80,
    butane: 60,
    lpg: 40
  };
  
  function updateGraph() {
    document.querySelector('.bar1').style.height = sensorData.methane + '%';
    document.querySelector('.bar2').style.height = sensorData.alcohol + '%';
    document.querySelector('.bar3').style.height = sensorData.gas + '%';
    document.querySelector('.bar4').style.height = sensorData.smoke + '%';
    document.querySelector('.bar5').style.height = sensorData.butane + '%';
    document.querySelector('.bar6').style.height = sensorData.lpg + '%';
  }
  
  // Simulate real-time data update
  setInterval(() => {
    // Fetch new data from Blynk or any other source
    // For now, we'll just simulate new data
    sensorData.methane = Math.floor(Math.random() * 100);
    sensorData.alcohol = Math.floor(Math.random() * 100);
    sensorData.gas = Math.floor(Math.random() * 100);
    sensorData.smoke = Math.floor(Math.random() * 100);
    sensorData.butane = Math.floor(Math.random() * 100);
    sensorData.lpg = Math.floor(Math.random() * 100);
    
    updateGraph();
  }, 5000); // Update every 5 seconds
  