 /****************************************
 SC+ | Projeto: Sensor de chuva
 ****************************************/
 // Declarando as variáveis do projeto
 const int led = 10; // pino do LED
 const int sensor = 3; // pino digital do sensor
 // Passando as configurações iniciais
 void setup()
 {
 //Define led como saída
  pinMode(led, OUTPUT); 
//Define sensor como entrada de sinal
  pinMode(sensor, INPUT); 
    // LED começa desligado
  digitalWrite(led, LOW); 
} 
// Construindo a lógica do projeto
 void loop()
 {
    // Se o sensor estiver no estado LOW (ou seja, tem chuva!),o LED acende
  if(digitalRead(sensor) == LOW){digitalWrite(led, HIGH);}
    // Caso o sensor esteja no estado HIGH, o LED permanece desligado
    else {digitalWrite(led, LOW);}
 }