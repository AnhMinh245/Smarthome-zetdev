#include<LiquidCrystal_I2C.h>
#include<Wire.h>
#include "DHT.h"
#include <BlynkSimpleEsp8266.h>
#include <ESP8266WiFi.h>
//#include <BlynkSimpleEsp8266.h>

// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID "TMPLlgnqrxYy"
#define BLYNK_DEVICE_NAME "TEST DIEU KHIEN"
#define BLYNK_AUTH_TOKEN "tsrdHDnvY0E-Bge4Sw7egZsVstklQPax"
#define DHTTYPE DHT11
#define dht_dpin D2
#define BLYNK_PRINT Serial
#define Thietbi D1
#define MQ2 A0
#define Thietbi2 D0
#define AS D5
#define Thietbi3 D6
DHT dht(dht_dpin, DHTTYPE); 
LiquidCrystal_I2C lcd(0x27,16,2); 
//LiquidCrystal_I2C lcd(0x27,16,2);

char auth[] = "tsrdHDnvY0E-Bge4Sw7egZsVstklQPax";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "Hoang Tuan";
char pass[] = "13112000";

BlynkTimer timer;

// This function sends Arduino's up time every second to Virtual Pin (5).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  Blynk.virtualWrite(V5, millis() / 1000);
}

void setup() {
  Serial.begin(115200);

  //Blynk.begin(auth, ssid, pass);
  // You can also specify server:
 Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);

  pinMode(dht_dpin,INPUT);
  pinMode(D1,OUTPUT);
    pinMode(D0,OUTPUT);
    pinMode(D5,INPUT);
    pinMode(D6,OUTPUT);
  Wire.begin(D4,D3);//sda,scl 
  //Serial.begin(9600);
  //Blynk.begin(auth, ssid, pass);
  lcd.init();  
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("Nhiet do: ");
  lcd.setCursor(0,1);
  lcd.print("Do am: "); 
  //lcd.backlight();
dht.begin();
 timer.setInterval(1000L, sendUptime);
              }

void sendUptime() {
int h = dht.readHumidity();
  int t = dht.readTemperature(); 
  int m=analogRead(A0);
  int f= digitalRead(D5);
  Serial.print(m);
  Serial.print("\n");
//hiển thị lên màn hình LCD  
  lcd.setCursor(10,0);
 // lcd.print("Nhiet do: ");
  lcd.print(round(t));
  lcd.print((char)223); 
  lcd.print("C");
  lcd.setCursor(10,1);
  //lcd.print("Do am: ");
  lcd.print(round(h));
  lcd.print("%");
  //lcd.init();
  Blynk.virtualWrite(V1, t);
  Blynk.virtualWrite(V2, h);
  if(t>28){
      digitalWrite(D1, 1);
    }
    if(t<=28) {
      digitalWrite(D1,0);
}
if (m>300){
  digitalWrite(D0,1);
}
if(m<=300){
  digitalWrite(D0,0);
}
if( f==1){
  digitalWrite(D6,1);
}
if( f==0){
  digitalWrite(D6,0);
  }
}
  void loop()
{ 
  
                                                    
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
     WidgetLED led(V6);
   if(digitalRead(Thietbi) == 1){
     led.on();
   }
   else{
     led.off();

}
}
                                      
