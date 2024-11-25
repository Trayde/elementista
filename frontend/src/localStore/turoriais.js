const placa = require('../../public/img/placa.png')



const dados =[{
         id_atividade: "MISSAO_01_ATIVIDADE_01.ino",
         id_ordem: "1",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de velocidade",
         texto: ` //Pino ligado ao pino D0 do sensor  int pino_D0 = 2; int rpm; volatile byte pulsos;  unsigned long timeold; 
                //Altere o numero abaixo de acordo com o seu disco encoder
                unsigned int pulsos_por_volta = 20;
                void contador() {
                //Incrementa contador
                pulsos++; }
                void setup() {
                Serial.begin(9600);
                //Pino do sensor como entrada
                pinMode(pino_D0, INPUT);
                //Interrupcao 0 - pino digital 2
                //Aciona o contador a cada pulso
                attachInterrupt(0, contador, FALLING);
                pulsos = 0;
                rpm = 0;
                timeold = 0; }
                void loop() {
                //Atualiza contador a cada segundo
                if (millis() - timeold >= 1000)  {
                    //Desabilita interrupcao durante o calculo
                    detachInterrupt(0);
                    rpm = (60 * 1000 / pulsos_por_volta ) / (millis() - timeold) * pulsos;
                    timeold = millis();
                    pulsos = 0;
                    //Mostra o valor de RPM no serial monitor
                    Serial.print(“RPM = “);
                    Serial.println(rpm, DEC);
                    //Habilita interrupcao
                    attachInterrupt(0, contador, FALLING);  }}`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "velocidade"
     },
     {
         id_atividade: "MISSAO_01_ATIVIDADE_02.ino",
         id_ordem: "2",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de CO2",
         texto: ` // Definição da ligação dos pinos com o Arduino
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
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "CO2"
     },
     {
         id_atividade: "MISSAO_01_ATIVIDADE_03.ino",
         id_ordem: "3",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de pH",
         texto: ` #include <Wire.h>
                    #include <LiquidCrystal_I2C.h>
                    LiquidCrystal_I2C lcd(0x27, 16, 2);
                    float valor_calibracao = 21.34;   // Fator de calibração
                    int contagem = 0;           // Variável de contagem
                    f
                    loat soma_tensao = 0;      // Variável para soma de tensão
                    f
                    loat media = 0;            // Variável que calcula a media
                    f
                    loat entrada_A0;           // Variável de leitura do pino A0
                    f
                    loat tensao;               // Variável para conversão em tensão
                    unsigned long tempo;        // Float tempo
                    void setup() {
                    lcd.init();                   // Inicializa o display
                    lcd.begin(16, 2);             // Inicializa todos os caracteres
                    lcd.backlight();              // Inicializa o backlight
                    lcd.setCursor(0, 0);          // Posiciona o cursor na posição
                    lcd.print(“USINAINFO”);       // Escreve no monitor serial
                    lcd.setCursor(0, 1);          // Posiciona o cursor na posição
                    lcd.print(“Leitura de pH”);   // Escreve no monitor serial
                    delay(2000);
                        lcd.clear();                  // Limpa o conteúdo do display
                    }
                    void loop() {
                    soma_tensao = 0;   // Inicia soma_tensão em 0
                    contagem = 0;      // Inicia a contagem em 0
                    while (contagem < 10) {                   // Executa enquanto contagem < que 10
                        tempo = millis();                       // Define o tempo em microsegundos
                        entrada_A0 = analogRead(A0);            // Lê a entrada analógica
                        tensao = (entrada_A0 * 5.0) / 1024.0;   // Converte o valor em tensão    soma_tensao = 
                    (soma_tensao + tensao);   // Soma a tensão anterior
                    contagem++;                             // Soma 1 à variável de contagem
                    delay(100);                             // Aguarda para próxima leitura 
                    }
                    }
                    media = soma_tensao / 10;                 // Calcula a média das leituras
                    float valor_pH = -5.70 * media + valor_calibracao;    // Calcula valor de pH
                    lcd.setCursor(0, 0);            // Posiciona o cursor no display
                    lcd.print(“Valor pH: “);        // Escreve no display
                    lcd.setCursor(11, 0);           // Posiciona o cursor no display
                    lcd.print(valor_pH, 1);         // Escreve o pH com uma casa decimal
                    delay(1000);                    // Aguarda para próxima leitura
                    )
                    `,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "pH"
     },
     {
         id_atividade: "MISSAO_01_ATIVIDADE_04.ino",
         id_ordem: "4",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de poeira",
         texto: `  #include <Adafruit_GFX.h>
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
                        starttime = millis();  }}`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "poeira"
     },
     {
         id_atividade: "MISSAO_01_ATIVIDADE_05.ino",
         id_ordem: "5",
         usuario: "",
         titulo: "Projeto: Sensor de luminosidade e temperatura",
         texto: ` #include <LiquidCrystal.h>
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
            delay(100);}`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "luminosidade e temperatura"
     },
     {
         id_atividade: "MISSAO_02_ATIVIDADE_01.ino",
         id_ordem: "6",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de chuva",
         texto: `// Declarando as variáveis do projeto
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
}`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "chuva"
     },
     {
         id_atividade: "MISSAO_02_ATIVIDADE_02.ino",
         id_ordem: "7",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de óleo na água",
         texto: ` void setup() 
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
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "óleo na água"
     },
     {
         id_atividade: "MISSAO_02_ATIVIDADE_03.ino",
         id_ordem: "8",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de turbidez",
         texto: `  #include <Wire.h>
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
                    lcd.setCursor(0, 0);
                    lcd.print(“Leitura: “);
                    lcd.print(voltagem);
                    lcd.print(“ V”);
                    // Imprime as informações na tela do LCD
                    lcd.setCursor(3, 1);
                    lcd.print(NTU);
                    lcd.print(“ NTU”);
                    delay(10);
                    }
                    // Sistema de arredendamento para Leitura
                    f
                    loat ArredondarPara( float ValorEntrada, int CasaDecimal ) {
                    f
                    loat multiplicador = powf( 10.0f, CasaDecimal );
                    ValorEntrada = roundf( ValorEntrada * multiplicador ) / multiplicador;
                    return ValorEntrada;
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "turbidez"
     },
     {
         id_atividade: "MISSAO_02_ATIVIDADE_04.ino",
         id_ordem: "9",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de pH",
         texto: ` #include <Wire.h>
                    #include <LiquidCrystal_I2C.h>
                    LiquidCrystal_I2C lcd(0x27, 16, 2);
                    float valor_calibracao = 21.34;   // Fator de calibração
                    int contagem = 0;           // Variável de contagem
                    f
                    loat soma_tensao = 0;      // Variável para soma de tensão
                    f
                    loat media = 0;            // Variável que calcula a media
                    f
                    loat entrada_A0;           // Variável de leitura do pino A0
                    f
                    loat tensao;               // Variável para conversão em tensão
                    unsigned long tempo;        // Float tempo
                    void setup() {
                    lcd.init();                   // Inicializa o display
                    lcd.begin(16, 2);             // Inicializa todos os caracteres
                    lcd.backlight();              // Inicializa o backlight
                    lcd.setCursor(0, 0);          // Posiciona o cursor na posição
                    lcd.print(“USINAINFO”);       // Escreve no monitor serial
                    lcd.setCursor(0, 1);          // Posiciona o cursor na posição
                    lcd.print(“Leitura de pH”);   // Escreve no monitor serial
                    delay(2000);
                        lcd.clear();                  // Limpa o conteúdo do display
                    }
                    void loop() {
                    soma_tensao = 0;   // Inicia soma_tensão em 0
                    contagem = 0;      // Inicia a contagem em 0
                    while (contagem < 10) {                   // Executa enquanto contagem < que 10
                        tempo = millis();                       // Define o tempo em microsegundos
                        entrada_A0 = analogRead(A0);            // Lê a entrada analógica
                        tensao = (entrada_A0 * 5.0) / 1024.0;   // Converte o valor em tensão    soma_tensao = 
                    (soma_tensao + tensao);   // Soma a tensão anterior
                    contagem++;                             // Soma 1 à variável de contagem
                    delay(100);                             // Aguarda para próxima leitura 
                    }
                    }
                    media = soma_tensao / 10;                 // Calcula a média das leituras
                    float valor_pH = -5.70 * media + valor_calibracao;    // Calcula valor de pH
                    lcd.setCursor(0, 0);            // Posiciona o cursor no display
                    lcd.print(“Valor pH: “);        // Escreve no display
                    lcd.setCursor(11, 0);           // Posiciona o cursor no display
                    lcd.print(valor_pH, 1);         // Escreve o pH com uma casa decimal
                    delay(1000);                    // Aguarda para próxima leitura
                    )
                    `,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "pH"
     },
     {
         id_atividade: "MISSAO_02_ATIVIDADE_05.ino",
         id_ordem: "10",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de condutividade",
         texto: ` #define TdsSensorPin A1
                    #define VREF 5.0 // analog reference voltage(Volt) of the ADC
                    #define SCOUNT 30 // sum of sample point
                    int analogBuffer[SCOUNT]; // store the analog value in the array, read from ADC
                    int analogBufferTemp[SCOUNT];
                    int analogBufferIndex = 0,copyIndex = 0;
                    f
                    loat averageVoltage = 0,tdsValue = 0,temperature = 25;
                    void setup()
                    {
                    Serial.begin(115200);
                    pinMode(TdsSensorPin,INPUT);
                    }
                    void loop()
                    {
                    static unsigned long analogSampleTimepoint = millis();
                    if(millis()-analogSampleTimepoint > 40U) //every 40 milliseconds,read the analog value from 
                    the ADC
                    {
                    analogSampleTimepoint = millis();
                    analogBuffer[analogBufferIndex] = analogRead(TdsSensorPin); //read the analog value and store 
                    into the buffer
                    analogBufferIndex++;
                    if(analogBufferIndex == SCOUNT)
                    analogBufferIndex = 0;
                    }
                    static unsigned long printTimepoint = millis();
                    if(millis()-printTimepoint > 800U)
                    {
                    printTimepoint = millis();
                    for(copyIndex=0;copyIndex<SCOUNT;copyIndex++)
                    analogBufferTemp[copyIndex]= analogBuffer[copyIndex];
                    averageVoltage = getMedianNum(analogBufferTemp,SCOUNT) * (float)VREF / 1024.0; // read the 
                    analog value more stable by the median filtering algorithm, and convert to voltage value
                    f
                    loat compensationCoefficient=1.0+0.02*(temperature-25.0); //temperature compensation formula: 
                    fFinalResult(25^C) = fFinalResult(current)/(1.0+0.02*(fTP-25.0));
                    f
                    loat compensationVolatge=averageVoltage/compensationCoefficient; //temperature compensation
                    tdsValue=(133.42*compensationVolatge*compensationVolatge*compensationVolatge - 
                    255.86*compensationVolatge*compensationVolatge + 857.39*compensationVolatge)*0.5; //convert 
                    voltage value to tds value
                    //Serial.print(“voltage:”);
                    //Serial.print(averageVoltage,2);
                    //Serial.print(“V “);
                    Serial.print(“TDS Value:”);
                    Serial.print(tdsValue,0);
                    Serial.println(“ppm”);}}
                    int getMedianNum(int bArray[], int iFilterLen)
                    {int bTab[iFilterLen];
                    for (byte i = 0; i<iFilterLen; i++)
                    bTab[i] = bArray[i];
                    int i, j, bTemp;
                    for (j = 0; j < iFilterLen - 1; j++)
                    {
                    for (i = 0; i < iFilterLen - j - 1; i++)
                    {
                    if (bTab[i] > bTab[i + 1])
                    {
                    bTemp = bTab[i];
                    bTab[i] = bTab[i + 1];
                    bTab[i + 1] = bTemp;}
                        }}
                    if ((iFilterLen & 1) > 0)
                    bTemp = bTab[(iFilterLen - 1) / 2];
                    else
                    bTemp = (bTab[iFilterLen / 2] + bTab[iFilterLen / 2 - 1]) / 2;
                    return bTemp;}
                    `,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "condutividade"
     },
     {
         id_atividade: "MISSAO_03_ATIVIDADE_01.ino",
         id_ordem: "11",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de umidade do solo",
         texto: ` int umidade;
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
                Serial.println(“Irrigando...”);
                digitalWrite(13, HIGH); // LED existente na placa do arduino ascende 
                }
                else
                {
                digitalWrite(13, LOW);
                }
                delay(1000);
                }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "solo"
     },
     {
         id_atividade: "MISSAO_03_ATIVIDADE_02.ino",
         id_ordem: "12",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de nível de líquido",
         texto: ` /* Pinos correspondentes ao sensor */
                    #define sensorvcc 2     /*Define vcc como pino 2 */ 
                    #define sensorsinal A1  /*Define sinal como pino A1 */ 
                    /* Declara variável inteira para armazenamento dos dados */
                    int val = 0;
                    void setup() { /*abre laço de configuração*/
                    pinMode(sensorvcc, OUTPUT); /* define 2 como pino de saída do Arduino */
                    digitalWrite(sensorvcc, LOW); /* vcc tem nível lógico baixo até que haja alguma variação na 
                    leitura*/
                    Serial.begin(9600); /* Baudrate de 9600 */
                    }
                    void loop() { /*laço de repetição */    int level = readSensor(); /*variável level é igual a 
                    leitura do sensor */
                    /*printa o nível da água no monitor serial */
                    Serial.print(“Nível de água: “); /*printa o “Nível da água: “ no monitor serial */
                    Serial.println(level); /*printa o nível da água no monitor serial */
                    delay(1000);  /*Atraso de 1s entre leituras*/
                    }
                    int readSensor() {  /* leitura do sensor */
                    digitalWrite(sensorvcc, HIGH);  /* alimenta o sensor */
                    delay(10);              /* espera 10ms */
                    val = analogRead(sensorsinal);    /* Realiza a leitura analógica do sinal do sensor */
                    digitalWrite(sensorvcc, LOW);   /* Desliga o sensor */
                    return val;             /* envia leitura */
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "líquido"
     },
     {
         id_atividade: "MISSAO_03_ATIVIDADE_03.ino",
         id_ordem: "13",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de umidade do solo",
         texto: ` int umidade;
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
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "solo"
     },
     {
         id_atividade: "MISSAO_03_ATIVIDADE_04.ino",
         id_ordem: "14",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de turbidez",
         texto: `  #include <Wire.h>
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
            delay(10);              /* espera 10ms */
            val = analogRead(sensorsinal);    /* Realiza a leitura analógica do sinal do sensor */
            digitalWrite(sensorvcc, LOW);   /* Desliga o sensor */
            return val;             /* envia leitura */
            }
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
            lcd.setCursor(0, 0);
            lcd.print(“Leitura: “);
            lcd.print(voltagem);
            lcd.print(“ V”);
            // Imprime as informações na tela do LCD
            lcd.setCursor(3, 1);
            lcd.print(NTU);
            lcd.print(“ NTU”);
            delay(10);
            }
            // Sistema de arredendamento para Leitura
            f
            loat ArredondarPara( float ValorEntrada, int CasaDecimal ) {
            f
            loat multiplicador = powf( 10.0f, CasaDecimal );
            ValorEntrada = roundf( ValorEntrada * multiplicador ) / multiplicador;
            return ValorEntrada;
            }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "turbidez"
     },
     {
         id_atividade: "MISSAO_03_ATIVIDADE_05.ino",
         id_ordem: "15",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de umidade e temperatura para solo",
         texto: `  #include <Adafruit_LiquidCrystal.h>
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
                    delay(10);      }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "solo"
     },
     {
         id_atividade: "MISSAO_04_ATIVIDADE_01.ino",
         id_ordem: "16",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de temperatura",
         texto: `  #define pin_lm35 A0 //Pino o qual o sensor está conectado
                    void setup() 
                    {
                    Serial.begin(9600); // Inicia a comunicação com
                    pinMode(pin_lm35, INPUT); // Define o sensor como uma entrada de sinal
                    }
                    void loop() 
                    {
                    f
                    loat valor_analog_lm35 = float(analogRead(pin_lm35)); // Obtém o valor analógico que varia de 
                    0 a 1023
                    f
                    loat tensao = (valor_analog_lm35 * 5) / 1023; // Vamos converter esse valor para tensão 
                    elétrica
                    f
                    loat temperatura = tensao / 0.010; // dividimos a tensão por 0.010 que representa os 10 mV
                    Serial.print(“A temperatura eh “);
                    Serial.println(temperatura); // Mostra na serial a temperatura do sensor
                    delay(1000); // aguarda 1 segundo
                    }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "temperatura"
     },
     {
         id_atividade: "MISSAO_04_ATIVIDADE_02.ino",
         id_ordem: "17",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de CO2",
         texto: `  // Definição da ligação dos pinos com o Arduino
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
                    /*******************************************************************************************
                     SC+ | Projeto: Sensor de CO2
                    *******************************************************************************************/
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
                    Serial.println(“Gás tóxico detectado!”);`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "CO2"
     },
     {
         id_atividade: "MISSAO_04_ATIVIDADE_03.ino",
         id_ordem: "18",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de temperatura",
         texto: ` #define pin_lm35 A0 //Pino o qual o sensor está conectado
                void setup() {
                Serial.begin(9600); // Inicia a comunicação com
                pinMode(pin_lm35, INPUT); // Define o sensor como uma entrada de sinal
                }
                void loop() {
                f
                loat valor_analog_lm35 = float(analogRead(pin_lm35)); // Obtém o valor analógico que varia de 
                0 a 1023
                f
                loat tensao = (valor_analog_lm35 * 5) / 1023; // Vamos converter esse valor para tensão 
                elétrica
                f
                loat temperatura = tensao / 0.010; // dividimos a tensão por 0.010 que representa os 10 mV
                Serial.print(“A temperatura eh “);
                Serial.println(temperatura); // Mostra na serial a temperatura do sensor
                delay(1000); // aguarda 1 segundo
                }`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "temperatura"
     },
     {
         id_atividade: "MISSAO_04_ATIVIDADE_04.ino",
         id_ordem: "19",
         usuario: "",
         titulo: " SC+ | Projeto: Sensor de corrente",
         texto: `   f
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
                `,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "corrente"
     },
     {
         id_atividade: "MISSAO_04_ATIVIDADE_05.ino",
         id_ordem: "20",
         usuario: "",
         titulo: "SC+ | Projeto: Sensor de turbidez arduino",
         texto: `  #include <Wire.h>
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
                    return ValorEntrada;}`,
         link: placa,
         imageName: placa,
         dt_criacao: "2024-10-06",
         publicada: "",
         tag: "turbidez arduino"
     }
 ]



 export default dados;