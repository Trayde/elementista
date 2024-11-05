 /****************************************
 SC+ | Projeto: Sensor de poeira
 ****************************************/
 #include <Adafruit_GFX.h>
 #include <Adafruit_SSD1306.h>
 int pin = 8;
 unsigned long duration;
 unsigned long starttime;
 unsigned long sampletime_ms = 1000;
 unsigned long lowpulseoccupancy = 0;
 f
 loat ratio = 0;
 f
 loat concentration = 0;
 #define SCREEN_WIDTH 128 // Largura da tela OLED, em pixels
 #define SCREEN_HEIGHT 64 // Altura da tela OLED, em pixels
 // Declaração para um monitor SSD1306 conectado a I2C (pinos SDA, SCL)
 #define OLED_RESET     -1 //Redefinir o pino # (ou -1 se estiver compartilhando o pino de 
redefinição do Arduino) Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_
 RESET);
  void setup() {
  Serial.begin(9600);
  pinMode(8,INPUT);
 display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  delay(2000);
  display.clearDisplay();
  display.setTextColor(WHITE);
  delay(10);
  starttime = millis();//hora atual;
 }
 void loop() {
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy+duration;
 if ((millis()-starttime) > sampletime_ms)  {
    ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Porcentagem inteira 0=>100
    concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // usando a curva da 
folha de especificações
    lowpulseoccupancy = 0;
    display.clearDisplay();
     display.setTextSize(2);
  display.setCursor(0, 10);
  display.print(“C:”+String(concentration));  
 if (concentration < 1000) { 
  display.setTextSize(2);
  display.setCursor(0, 40);
  display.print(“Limpar”);   }
   if (concentration > 1000 && concentration < 10000) {
   display.setTextSize(2);
  display.setCursor(0, 40);
  display.print(“Bom”);     }
 if (concentration > 10000 && concentration < 20000) {
   display.setTextSize(2);
  display.setCursor(0, 40);
  display.print(“Aceitável”);     }
    if (concentration > 20000 && concentration < 50000) {
  display.setTextSize(2);
  display.setCursor(0, 40);
  display.print(“Pesado”);   }
  if (concentration > 50000 ) {
  display.setTextSize(2);
  display.setCursor(0, 40);
  display.print(“Perigo”);     } 
      display.display();
    starttime = millis();  }}