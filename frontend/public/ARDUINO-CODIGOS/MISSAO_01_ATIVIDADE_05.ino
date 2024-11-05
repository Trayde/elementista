 /****************************************
 SC+ | Projeto: Sensor de luminosidade e temperatura
 ****************************************/
 #include <LiquidCrystal.h>
 int rs =  12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
 int linhas = 2;
 int colunas = 16;
 //int SensorTemp = A0;
 int TempBaixa = 8;
 int TempMedia = 9;
 int TempAlta = 10;
 int LumBaixa = 13;
 int LumMedia = 7;
 int LumAlta = 6;
 f
 loat sensor = 0;
 f
 loat coef = 0.19802;
 f
 loat C = 0.59406;
 f
 loat luminosidade = 0;
 LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
 void setup(){
   lcd.begin(linhas, colunas);
  lcd.print(“Temp: “);
  //lcd.setCursor(0,1);
  //lcd.print(“       C”);
 }
 void loop() {
  float SensorTempTensao = analogRead(A0);
  float Tensao = SensorTempTensao*5;
 ***************************Tensao/= 1024;
  float TemperaturaC =(Tensao-0.5)*100;
  lcd.setCursor(7,0);
  lcd.print(TemperaturaC);
  //lcd.setCursor(9,1);
 delay(100);
 if (TemperaturaC>=25) {
 *************************************** 
*************************************** 
        digitalWrite(TempAlta, HIGH);    }
 ************else if (TemperaturaC<=20){
 *************************************** 
*************************************** 
        digitalWrite(TempAlta, LOW);  **}
 digitalWrite(TempBaixa, LOW);
 digitalWrite(TempMedia, LOW);
 digitalWrite(TempBaixa, HIGH);
 digitalWrite(TempMedia, LOW);
  *********************************else {
 *************************************** 
*************************************** 
        digitalWrite(TempAlta, LOW);    }
    if (luminosidade<45) {
 *************************************** 
*************************************** 
        digitalWrite(LumAlta, LOW);    }
 else if (luminosidade>75){
 *************************************** 
*************************************** 
        digitalWrite(LumAlta, HIGH);  **}
    else {
 *************************************** 
*************************************** 
        digitalWrite(LumAlta, LOW);    }
    sensor = analogRead(A2);
  luminosidade = (sensor*coef) - C;
  lcd.setCursor(0,1);
  lcd.print(“Lumi: “);
  lcd.setCursor(7,1);
  lcd.print(luminosidade);
  //lcd.setCursor(9,1);
  delay(100);}