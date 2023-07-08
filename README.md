# UnBroca
FrontEnd de React Native para o app Un-Broca. Desenvolvido pelo grupo 3 da matéria Sistemas de informação (turma 02) da Universidade de Brasília (UNB) em 1/2023.

O código é formatado utilizando o [Prettier](https://prettier.io/).

---

## Desenvolvendo

### Requisitos:

1. Você tem que ter [Node.js](https://nodejs.org/en) instalado na versão `18.16.0 (LTS)`. Não se esqueça de colocar o caminho de instalação na variável de sistema `PATH`.

Você pode escolher um dos dois abaixo (ou ambos)

1. O app [Expo Go](https://expo.dev/expo-go) instalado no seu celular, caso queira desenvolver usando um aparelho físico.
2. [Android Studio](https://developer.android.com/studio) na versão `Flamingo`, caso você queira usar o emulador para desenvolver.
    1. Siga as instruções do Expo para configurar o emulador: https://docs.expo.dev/workflow/android-studio-emulator/

#### Opcional:

1. [Visual Studio Code](https://code.visualstudio.com/)
2. Extensões do Visual Studio Code:
    - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Começando a desenvolver

1. Clone o repositório para o seu computador;
2. Abra um terminal na raiz da pasta clonada;
3. Digite `npm install` e espere o comando concluir com sucesso;
4. Inicie o expo usando o comando `npm run start`.  Você pode usar o emulador de android para desenvolver digitando `a` dentro da CLI, ou escanear no app `Expo Go` o código QR para abrir no celular. (No iOS você deve escanear o código QR usando o app de câmera.).
    - Para mais informações leia: https://docs.expo.dev/more/expo-cli/

---

### Dicas

- Você pode abrir o menu de desenvolvimento sacudindo o celular, digitando `ctrl-m` no emulador, ou digitando `m` na CLI do expo. Neste menu você pode abrir inspetor de elementos, recarregar, debugar performance, etc...
- Caso você queira limpar o cache do expo, inicie usando `npm run start -c`;
- O expo necessita que você abra uma porta tcp no seu computador e que ambos celular e computador estejam na mesma lan e tenham acesso à internet. Isso não é possível em redes empresariais ou públicas, como a da UNB, e para desenvolver nessas redes é necessário usar tunelamento. Leia: https://docs.expo.dev/more/expo-cli/#tunneling.
