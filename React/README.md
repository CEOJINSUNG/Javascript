React의 모든 것
=============

### [React.js]

- 리액트(React) 원서 : https://reactjs.org/

  cf) 리액트 앱 생성시 command line에서 'npx create-react-app 이름' 을 쳐줘야한다
  
      생성 후 npm start or yarn start를 폴더 위에서 치면 작동한다.
      yarn add react-router-dom
      yarn add axios는 redux나 redux middleware 없이 API를 연동할 때 사용한다
      yarn add react-redux
      yarn add redux-devtools-extension

- 리액트(React) Velopert : https://velopert.com/reactjs-tutorials

- 리액트 아이콘(React-icon) : https://react-icons.netlify.com/#/

- 센트리(sentry, 오류를 잡아내는 기능을 더해줌) : https://sentry.io/welcome/

- 프리티어(Prettier, 코드의 규칙을 설정해주는 기능을 지원해준다) : https://prettier.io/

  cf) format document or format on save 둘중 하나 하면 됨
  
- EsLint : VScode에서 다운을 받으면 여기서 어떤 변수가 쓰였는지 않쓰였는지 알 수 있다. 여러 규칙들을 설정해줌.

- Snippet : 코드들을 자동생성하는 기능으로 VScode에서 다운을 받거나 직접 코드조각들을 생성해서 사용하는 방법이 있다. 

- Sass(스타일링을 쉽게 해주는 기능) : https://sass-guidelin.es/ko/

- JSONPlaceholder(API 연동을 도와주는 사이트) : https://jsonplaceholder.typicode.com/

   cf) Redux 및 ContextAPI를 사용할 때 쓰는 함수들의 기능

       Action : type이 있어야 하고 data와 text를 가지고 있는 경우로 있다.
       Dispatch : Action을 실행시키는 기능을 가진다.
       Reducer : 상태를 바꿔주는 역할을 한다.
       Subscribe : Dispatch가 발생했을 때 특정함수를 호출하는 역할을 한다.
       
#### React&Firestore 연동

  - Firestore와 연동 : https://velog.io/@chdb57/%E3%85%87-bvk60v5ufy
    
        # 설치
        $ npm install --save firebase
        
        # Firebase의 앱 연동
        App.js에서 아래 코드 추가
        
        import React from 'react';
        import firebase from 'firebase';
        import 'firebase/firestore';

        const firebaseConfig = {
         //위에서 복사한 개인의 Config
        };

        firebase.initializeApp(firebaseConfig) //firebase 초기화

        const db = firebase.firestore(); //store 사용
        
### [React Native]

- React Native 시작 및 node_module 설치

  1) React Native 시작
      
      React-Native 공식 사이트 : https://reactnative.dev/versions
      
      공식사이트를 통해 React Native CLI를 사용하고 초기 환경 설정을 한다.
      
      그 다음 window환경 같은 경우 npx react-native init myownProject(다른 이름도 좋음)을 치면 초기 시작이 됨
      
      다운이 완료되면 핸드폰 기기와 컴퓨터를 연결하고 npx react-native start를 치면 앱이 실행이 됨
  
  2) node_module 설치
      
      npm install or yarn add 추가하고자 하는 모듈을 하면 나옴 
      
      아래와 같은 순서로 다운 받는 것을 추천한다. 왜냐하면 react-native-firebase를 설치하고 react-navigation/native를 설치하면 react-native-firebase/firestore가 삭제되기 때문이다
      
      (1) React Navigation : https://reactnavigation.org/
      
      (2) react-native-firebase : https://rnfirebase.io/
      
      (3) react-native-image-picker : https://github.com/dev-yakuza/react-native-image-picker-example/blob/master/src/App.tsx
      
      (4) react-native-vector-icons : https://oblador.github.io/react-native-vector-icons/
      
      (5) react-native-elements : https://react-native-elements.github.io/react-native-elements/

- 오류
  오류가 발생했을 때는 어느 경로에서 오류가 발생했는지 확인해야함
  
    1번 구글 firebase와 연결할 떄 package 오류가 발생했음 이 때 googleservice.json()에서 package name을 바꿔야함
    
    2번 https://stackoverflow.com/questions/43604603/module-appregistry-is-not-registered-callable-module-calling-runapplication
    
    3번 https://stackoverflow.com/questions/47291056/could-not-find-tools-jar-please-check-that-c-program-files-java-jre1-8-0-151-c
    
    4번 https://stackoverflow.com/questions/60310873/execution-failed-for-task-appmergedexdebug-firestore-flutter
    
    5번 https://github.com/oblador/react-native-vector-icons/issues/429
    
    6번 리액트 네이티브 앱을 만들던 도중 version이 6.0이상이면 android를 실행할 때 @react-native-community/toolbar-android가 존재하지 않는다 따라서 이를 설치해줘야 함
