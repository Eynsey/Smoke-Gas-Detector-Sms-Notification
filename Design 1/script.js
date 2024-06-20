let currentImageIndex = 0;
const images = document.querySelectorAll('.product-image img');
const totalImages = images.length;
const descriptions = [
    {
        title: "Arduino Uno",
        text: "It's one of the most popular Arduino boards, featuring an ATmega328P microcontroller. " +
              "It has 14 digital input/output pins, 6 analog inputs, a USB connection, a power jack, " +
              "and more."
    },
    {
        title: "Smoke Sensors - MQ Series",
        text: "A metal Oxide Semiconductor (MOS) type Gas Sensor mainly used to detect gases like " +
              "Methane, Butane, LPG, Smoke, etc. It is also known as Chemiresistor as the gas " +
              "detection is based on the change of resistance of the sensing material."
    },
    {
        title: "The SIM800L",
        text:   "GSM module with a serial interface. It can send and receive text messages and receive phone calls. It can also connect to the internet and receive FM signals."
    },
    {
        title: "Wifi Module - ESP8266",
        text: "ESP8266 Wi-Fi module is a low-cost Wi-Fi microchip with built-in TCP/IP" +
               "networking software and microcontroller capability" +
              " It is mainly used for the development of end-point IoT applications" 
    },
    {
        title: "Buzzer",
        text: "An Arduino Buzzer is basically a beeper" +
               "The Arduino buzzer is a device that produces sound when an electric current is passed through it."
    },
    {
        title: "Jumper wires",
        text: "Used to make connections between items on Breadboard and aruinos header pin"
    }
    // Add more descriptions as needed for each image
];

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Update description based on current image index
    document.querySelector('.product-h2').textContent = descriptions[index].title;
    document.querySelector('.product-p').textContent = descriptions[index].text;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Initially show the first image and its description
showImage(currentImageIndex);
