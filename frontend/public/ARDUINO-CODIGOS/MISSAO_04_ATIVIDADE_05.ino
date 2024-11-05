 /*******************************************************************************************S
 SC+ | Projeto: Sensor de turbidez arduino
 *******************************************************************************************/
 #include <Wire.h>
 #include <LiquidCrystal_I2C.h>
 LiquidCrystal_I2C lcd(0x27, 16, 2); // Inicia o Display LCD 16x2 através do endereço 0x27
 int SensorTurbidez = A0; // Define o pino de Leitura do Sensor
 // Inicia as variáveis
 int i;
 f
 loat voltagem;
 f
 loat NTU;
 void setup() {
 lcd.init();// Inicia o display LCD
 lcd.backlight();
 }
 void loop() {
 voltagem = 0; // Inicia a leitura da voltagem em 0
 for (i = 0; i < 800; i++) {       // Realiza a soma dos “i” valores de voltagem
 voltagem += ((float)analogRead(SensorTurbidez) / 1023) * 5;
 }
 voltagem = voltagem / 800; // Realiza a média entre os valores lidos na função for acima
 voltagem = ArredondarPara(voltagem, 1);
 if (voltagem < 2.5) { // Se Voltagem menor que 2.5 fixa o valor de NTU
 NTU = 3000;
  }
 else if (voltagem > 4.2) {
 NTU = 0;
 voltagem = 4.2;
 }// Senão calcula o valor de NTU através da fórmula
 else {
 NTU = -1120.4 * square(voltagem) + 5742.3 * voltagem - 4353.8;
 }
 // Imprime as informações na tela do LCD
 lcd.clear();
 lcd.setCursor(0, 0); // define a posição do cursor na primeira coluna e primeira linha
 lcd.print(“Leitura: “);
 lcd.print(voltagem);
 lcd.print(“ V”);
 // Imprime as informações na tela do LCD
 lcd.setCursor(3, 1); // define a posição de inicio da palavra na terceira coluna e primeira 
linha
 lcd.print(NTU);
 lcd.print(“ NTU”);
 delay(10);}
 // Sistema de arredendamento para Leitura
 f
 loat ArredondarPara( float ValorEntrada, int CasaDecimal ) {
 f
 loat multiplicador = powf( 10.0f, CasaDecimal );
 ValorEntrada = roundf( ValorEntrada * multiplicador ) / multiplicador;
 return ValorEntrada;}