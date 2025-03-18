#include "DHT.h"
#include "LiquidCrystal_I2C.h"
#include  "Wire.h"

#define DHTPIN 2
#define DHTTYPE DHT11
#define LED_A 13
#define LED_B 12
#define LED_C 11
#define LED_D 10
#define LED_E 9
#define LED_F 8


DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27,  16, 2);

void setup() 
{
  dht.begin();
  lcd.init();
  lcd.backlight();
  pinMode(LED_A, OUTPUT); 
  pinMode(LED_B, OUTPUT);
  pinMode(LED_C, OUTPUT);
  pinMode(LED_D, OUTPUT);
  pinMode(LED_E, OUTPUT);
  pinMode(LED_F, OUTPUT);

}

void loop() {
  lcd.setCursor(0,0);
  lcd.println("Temp = " + String(dht.readTemperature())+" °C");
  if (dht.readTemperature() < 18) { digitalWrite(13, HIGH); } 
  else { digitalWrite(13, LOW); }

  if ( 18 < dht.readTemperature() < 22) { digitalWrite(12, HIGH); } 
  else { digitalWrite(12, LOW); }

  if ( dht.readTemperature() > 18 && dht.readTemperature() < 22) { digitalWrite(11, HIGH); } 
  else { digitalWrite(11, LOW); }

// __________________________________________________________________________________________________________________________________________________

  lcd.setCursor(0,1);
  lcd.println("Humidite = " + String(dht.readHumidity())+" %");

  if (dht.readHumidity() < 30) { digitalWrite(10, HIGH); } 
  else { digitalWrite(10, LOW); }

  if (dht.readHumidity() > 60) { digitalWrite(9, HIGH); } 
  else { digitalWrite(9, LOW); }

  if ( dht.readHumidity() > 30 && dht.readHumidity() < 60) { digitalWrite(8, HIGH); } 
  else { digitalWrite(8, LOW); }

}



