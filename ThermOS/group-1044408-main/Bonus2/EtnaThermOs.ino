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
// COMPTE JUSQU'A 3___________________________________________________________________________________________________________________________________

 for (int i = 0; i < 3; i++) {

  digitalWrite(8, HIGH);
  delay(500);
  digitalWrite(8, LOW);
  delay(500);
 }

// COMPTE A REBOUR___________________________________________________________________________________________________________________________________

  digitalWrite(8, HIGH);
  delay(1000);
  digitalWrite(9, HIGH);
  delay(1000);
  digitalWrite(10, HIGH);
  delay(1000);
  digitalWrite(11, HIGH);
  delay(1000);
  digitalWrite(12, HIGH);
  delay(1000);
  digitalWrite(13, HIGH);
  delay(1000);
// FIN___________________________________________________________________________________________________________________________________________
 
 for (int i = 0; i < 6; i++) {

  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);
  digitalWrite(12, HIGH);
  digitalWrite(13, HIGH);
  delay(100);

  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, LOW);
  digitalWrite(11, LOW);
  digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  delay(100);
}

  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, LOW);
  digitalWrite(11, LOW);
  digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  delay(1000);

// ECRAN__________________________________________________________________________________________________________________________________________

  lcd.setCursor(0,0);
  lcd.println("Temp = " + String(dht.readTemperature())+" °C");
  
  lcd.setCursor(0,1);
  lcd.println("Humidite = " + String(dht.readHumidity())+" %");
}



