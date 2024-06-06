#define BLYNK_PRINT Serial

#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

// Replace with your network credentials and Blynk token
char auth[] = "YourAuthToken";
char ssid[] = "YourSSID";
char pass[] = "YourPassword";

// Pin definitions
const int smokeSensorPin = A0; // Smoke sensor analog pin
const int buzzerPin = D1;      // Buzzer digital pin
const int greenLedPin = D2;    // Green LED digital pin
const int redLedPin = D3;      // Red LED digital pin

const int smokeThreshold = 300; // Example threshold value

void setup() {
  Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);
  
  pinMode(smokeSensorPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  pinMode(redLedPin, OUTPUT);

  digitalWrite(buzzerPin, LOW);
  digitalWrite(greenLedPin, HIGH); // System idle
  digitalWrite(redLedPin, LOW);
}

void loop() {
  Blynk.run();
  
  int smokeValue = analogRead(smokeSensorPin);
  
  Blynk.virtualWrite(V1, smokeValue); // Send smoke value to Blynk

  if (smokeValue > smokeThreshold) {
    digitalWrite(buzzerPin, HIGH);
    digitalWrite(greenLedPin, LOW);
    digitalWrite(redLedPin, HIGH);
    Blynk.notify("Smoke detected!");
  } else {
    digitalWrite(buzzerPin, LOW);
    digitalWrite(greenLedPin, HIGH);
    digitalWrite(redLedPin, LOW);
  }
  
  delay(1000);
}
