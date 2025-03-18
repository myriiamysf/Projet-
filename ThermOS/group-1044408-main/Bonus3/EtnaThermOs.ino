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

void promgram(int num) {
  for (int i=0;i<10;i++){
  digitalWrite(num, HIGH);
  delay(100);
  digitalWrite(num, LOW);
  delay(100);
  }
}

void loop() {
  lcd.setCursor(0,0);
  lcd.println("Temp = " + String(dht.readTemperature())+" °C");
  if (dht.readTemperature() > 30) {
    promgram(13);
    lcd.setCursor(0,0);
    lcd.println("Temp. trop eleve");
  }
  lcd.setCursor(0,1);
  lcd.println("Humidite = " + String(dht.readHumidity())+" %");
  if (dht.readHumidity() > 70) {
    lcd.setCursor(0,1);
    lcd.println("Hum. trop eleve");
    promgram(10);
  }
}



