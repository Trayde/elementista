 /*******************************************************************************************
 SC+ | Projeto: Sensor de corrente
 *******************************************************************************************/
 f
 loat voltage;
 void setup()
 {
  Serial.begin(9600);       //Inicia Monitor Serial para mostra o valor da corrente lida no 
monitor
 } 
void loop()
 {
  unsigned int x=0;
  float AcsValue=0.0,Samples=0.0,AvgAcs=0.0,AcsValueF=0.0;
  for (int x = 0; x < 10; x++)          //loop de 10 amostras
  {
    AcsValue = analogRead(A0);        
//lê os valores do sensor de corrente
    Samples = Samples + AcsValue;        //soma amostras
   delay (3);                        
  }
  AvgAcs=Samples/10.0;                
  voltage=AvgAcs*(5.0 / 1024.0);      
// aguarda 3 segundos
 //tira a média das amostras 
//converte os valores para a faixa de 0V a 5V
  Serial.print(“Raw Voltage:”);
  Serial.print(voltage);
  AcsValueF = (2.5 - voltage)*1000/0.185; //2.5 é o desvio,  0,185v é um aumento na tensão de 
saída quando a corrente 1A flui na entrada
  Serial.print(“\t”);
  Serial.print(“Motor Current :”);
  Serial.print(AcsValueF);        //Imprime valor da corrente no monitor serial    
  Serial.println(“ mA”);
 }
 