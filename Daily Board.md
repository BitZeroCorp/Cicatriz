## Daily Board - Cicatriz
Olá! Esse arquivo será utilizado para resumir todo o progresso feito para facilitar na documentação final. Espero que seja útil tanto para mim quanto para vocês. Obrigado pela visita e o mais importante: *havin' fun!*

### 1ª semana: 
Após um brainstorm sobre o projeto como um todo, decidimos o ponto de partida, o nome e desenhamos uma logo (temporária ou não) para irmos acostumando com a identidade visual. Comecei uma pesquisa sobre o React Native ~tecnologia que já havia me interessado antes~ através do [tutorial oficial](https://facebook.github.io/react-native/docs/getting-started.html) disponível. Dessa vez estou desenvolvendo inteiramente no Windows 10 por conta do alto desempenho que tenho na criação de aplicativos mobile. Meu primeiro desafio é criar um aplicativo para mobile onde consiga interagir com o raspberry dentro da mesma rede de dados. Mãos a obra! <br>
EDIT 1: tive alguns problemas seguindo apenas a documentação oficial, então decidi investir um pouco$$$ nesse projeto e comprei um [curso da udemy](https://www.udemy.com/construa-aplicativos-mobile-do-zero-com-react-native/) de React Native. Sou muito chato para comprar cursos, então fiz uma GRANDE varredura em várias outras opções antes e acabei optando por esse. Aproveitei a promoção da Udemy e acabei levando mais 2 cursos, um de [Unity 2D](https://www.udemy.com/desenvolvimento-de-jogos-2d-para-android-com-unity-5) e um de [Web](https://www.udemy.com/curso-web). Provavelmente não vou render muito mais nessa primeira semana, pois tenho algumas provas na faculdade...manterei esse documento atualizado.<br>
EDIT 2: confundi as datas e não possuo prova nenhuma, apenas alguns trabalhos. Commitei o front-end do [SITE](https://github.com/cicatrizwp/site-aquario) que fiz para o projeto de iniciação científica *"Automação de Aquário com Raspberry Pi"* e agora consigo dedicar 100% aos estudos desse projeto. Assim encerro o relatório dessa primeira semana, a partir de agora teremos menos blablabla e mais conteúdo técnico aqui.<br><br>

**Resumo do inicio do projeto**<br>
* Desenvolver um aplicativo mobile;
* Comunicar celular e Raspberry;
* Estudar React Native;
<br>
<br>

### 2ª semana (under construction):
Essa semana tem sido massante no aspecto técnico, então acompanhem comigo:<br><br>
**O que utilizei no Windows:**
* [Cmder](http://cmder.net/) - prompt sucks, cmder rules;
* [Chocolatey](https://chocolatey.org/) - gerenciador de pacotes;
* [Visual Studio Code](https://code.visualstudio.com/) - minha IDE preferida;
* [Android Studio](https://developer.android.com/studio/?hl=pt-br) - já vem com as dependências todas;
* [Genymotion](https://www.genymotion.com/) - mais leve que o Android Studio.. testei no Linux e gostei mais dele;

Configurei o React Native através desse [tutorial](https://facebook.github.io/react-native/docs/getting-started.html) oficial clicando na aba *"Building Projects with Native Code"*.<br>
Passei essa semana mais arrumando os notebooks (problema de reconhecimento de video no Windows que tive que abrir e limpar tudo e no Linux nova formatação...) e por conta ~do péssimo serviço de internet~ da instabilidade na rede, ficou bem complicado render muito. <br>
No Raspberry Pi eu já configurei o servidor para receber as informações do aplicativo. Supondo que você já tenha feito a configuração básica, vou partir pros códigos.<br><br>

**Com o terminal aberto:**<br>
Verifique se o NodeJS está instalado utilizando `node -v` no terminal. Caso retorne uma mensagem de erro, instale dessa forma:<br>
`$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -` Versão 10.x<br>
OU <br>
`$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -` Versão 8.x Stable<br>
`$ sudo apt install -y nodejs`<br><br>

A partir do Node, vamos instalar um pacote do chamado [ExpressJS](https://www.npmjs.com/package/express-generator). Faremos isso dentro do próprio Node com o comando `sudo npm install -g express-generator`. Esse pacote serve justamente para comunicar os códigos Javascript do Aplicativo Mobile com o Raspberry Pi.<br><br>

Precisamos, também, de uma biblioteca que controle os GPIO's do nosso Raspberry. E adivinhe: o Node tem uma para isso! Instale a partir do comando `sudo npm install -g onoff`. <br><br>


A última dependência que nosso servidor precisa é a de poder ser executado sempre que o Raspberry ligar, sem necessidade de entrar via SSH ou outra forma para digitar o comando no terminal. E aqui vamos nós com mais uma biblioteca do Node no comando `sudo npm install -g forever`. <br><br>

Caso a instalação de alguma das bibliotecas acima de problema, adicione a tag `--unsafe-perm` antes da tag `-g`.<br><br>




