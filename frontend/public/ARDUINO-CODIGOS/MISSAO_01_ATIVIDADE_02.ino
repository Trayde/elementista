 /****************************************
 SC+ | Projeto: Sensor de CO2
 ****************************************/
 // Definição da ligação dos pinos com o Arduino
 #define pinoAnalogico A0
 #define pinoDigital 2
 void setup()  {
 // Inicializa a comunicação serial
 Serial.begin(9600);
 // Define os pinos do sensor como entrada
 pinMode(pinoAnalogico, INPUT);
 pinMode(pinoDigital, INPUT);       }
 void loop()    {
 // Lê o pino analógico do sensor
 int leitura_analogica = analogRead(pinoAnalogico);
 // Lê o pino digital do sensor
 int leitura_digital = digitalRead(pinoDigital);
 // Apresenta a leitura analógica no monitor serial
 Serial.print(“leitura do sensor: “);
 Serial.println(leitura_analogica);
 // Verifica se existe gás tóxico presente no ambiente
 if (leitura_digital == HIGH)
  {
 Serial.println(“Gás tóxico detectado!”);
 }
 else
 {
 Serial.println(“Gás tóxico não detectado”);
 }
 // Repete a leitura do sensor a cada 1 segundo
 delay(1000);
 }