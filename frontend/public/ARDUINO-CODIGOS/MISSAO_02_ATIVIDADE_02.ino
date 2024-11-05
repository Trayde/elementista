 /****************************************
 SC+ | Projeto: Sensor de óleo na água
 ****************************************/
 void setup() 
{
  Serial.begin(9600); // velocidade de comunicação para visualização no monitor serial
 }
 void loop()
 {
  int dados = analogRead(A0); //variável para armazenar valor lido na porta analógica 0
  Serial.print(“Valor Lido: “);
  Serial.println(dados);
 if (dados < 340 || dados> 452) //comparação entre valor de referência da água (452)
 {
  }
    Serial.println(“tem oleo na agua .”); 
  delay(100);
 }