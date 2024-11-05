 /*******************************************************************************************
 SC+ | Projeto: Sensor de umidade do solo
 *******************************************************************************************/
 int umidade;
 void setup()
 {
 Serial.begin(9600);
 pinMode(13, OUTPUT);
 }
 void loop()
 {
 umidade = analogRead(A0);
 int Porcento = map(umidade, 1023, 0, 0, 100);
 Serial.print(Porcento);
 Serial.println(“%”);
 if(Porcento <=70)
 {
 digitalWrite(13, HIGH);
 }
  else
 {
 digitalWrite(13, LOW);
 }
 delay(1000);
 }