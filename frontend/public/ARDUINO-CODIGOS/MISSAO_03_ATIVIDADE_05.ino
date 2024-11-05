 /*******************************************************************************************
 SC+ | Projeto: Sensor de umidade e temperatura para solo
 *******************************************************************************************/
 #include <Adafruit_LiquidCrystal.h>
 Adafruit_LiquidCrystal lcd_1(0);
 Adafruit_LiquidCrystal lcd_4(0);
 void setup() {
   pinMode(A0, INPUT);
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  lcd_1.begin(16, 2);
  pinMode(A5, INPUT);
  lcd_4.begin(16, 2);       }
 void loop() {
  Serial.println(analogRead(A0));
  if (analogRead(A0) >= 20 && analogRead(A0) < 135) {
   digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);       }
  if (analogRead(A0) >= 135 && analogRead(A0) < 186) {
    digitalWrite(3, HIGH);
    digitalWrite(2, LOW);
    digitalWrite(4, LOW);      }
     if (analogRead(A0) >= 186 && analogRead(A0) <= 358) {
    digitalWrite(4, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(2, LOW);    }
  lcd_4.print(analogRead(A5));
  lcd_1.setCursor(3, 3);
  if (analogRead(A5) <= 716 || analogRead(A0) >= 229) {
    servo_5.write(90);
  } else {
    servo_5.write(0);       }
  delay(10);      }