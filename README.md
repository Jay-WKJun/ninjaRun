# 🐱‍👤Ninja Run

### Rope swing And Jump Over!

스파이더맨 처럼 로프를 타고 장애물을 넘어가는 게임입니다!

👉Deploy Address: https://www.ninjarun.fun/

## Demo

<img src="./readme/mainDemo.gif" />

(게임화면의 일부를 촬영했습니다)

# ❗ Motivation

- why game?

  - **객체지향 패러다임을 심도있게** 다루어보고 싶었습니다.
  - **직접 물리 현상들을 코드로** 구현해보고 싶었습니다.
  - **바닐라 자바스크립트를 사용하며 자바스크립트의 이해도를 높여보고 싶었습니다.**

- why Rope Action?

  - **대중적이지만** 사람들에게 **상대적으로 덜 알려진** 로프액션이 참신하다고 생각했습니다.
  - 개인적으로 스파이더맨과 과거 Worms 라는 게임처럼 속도 있는 게임을 좋아합니다.

# 🛠 Tech stack

- Phaser 3
- matterJS
- Vanilla Javascript
- Webpack
- Express.js

# 🌐 Deploy

**Client**

- Netlify를 이용

**Server**

- AWS Elastic Beanstalk (EB)
- AWS Code Pipeline for Deployment automation

# 💿 Install

**FrontEnd**

```
$ git clone https://github.com/Jay-WKJun/ninjaRun
$ cd ninjaRun
$ npm install
$ npm start

환경변수: root파일에 .env 파일을 만들어 설정해주세요
SERVER_URL -> backend server의 url
```

**BackEnd**

```
$ git clone https://github.com/Jay-WKJun/ninjaRunBack
$ cd ninjaRunBack
$ npm install
$ npm start

환경변수: root파일에 .env 파일을 만들어 설정해주세요
MONGO_URL -> mongoDB의 url
```

후에 **localhost://8080**에 접속

(백엔드 서버 default url **localhost://3000**)

# 🕹 How to Play?

- **표창 발사**

  **클릭**시, 마우스 커서 위치로 표창 발사

  - **땅**에 맞을 시?

    **로프 생성!** Swing 시작!

  - **적**에게 맞을 시?

    **적을 처치!**

- **Rope 놓기**

  **Swing중 클릭**, 관성 그대로 날아간다

- **점수 획득**

  적 하나당 1점! 10초 당 1점!

- **Rule!!**

  - 로프와 표창은 화면상 하나만 가능(swing중 표창 발사 불가)
  - 1분 마다, 난이도 증가!

# 🎯 Focus point!

## OOP 설계 (Object-Oriented Programming)

게임이기에 여러 Object들의 상호작용을 코드로 직관적이고 간결하게 나타내기 위해 OOP 설계에 집중하였습니다.

**높은 응집도와 낮은 결합도**

```
OOP의 다른 법칙도 모두 고려하며 개발하였지만 특히 응집도와 결합도의 원칙은
순수 함수가 핵심이 되는 Functional Programming과
module화 가능한 것을 만든다라는
함수 생성 원칙이 유사다고 생각하여 조금 더 신경쓰며 설계했습니다.
```

### 대표적인 적용 예시

이번에 **사용한 엔진은 'matterJS' 물리엔진**은 Object가 스스로 움직이도록 하는 기능이 없어 처음에는 frame이 update될 때마다 velocity를 설정해주어 속도를 일정하게 유지해 주었지만,

다른 Object와 상호작용도 없이도 되는 건데 게임 field의 update 함수에 있는 것은 코드의 낭비라고 생각,

tween의 counter를 각 object내에 심어서 사용, 1x -> 2x지점까지 일정한 간격으로 숫자를 count, 그것을 속도로 삼아 스스로 움직이도록 설정하였습니다.

이런식으로 **class의 응집성은 늘이고 결합성을 줄였습니다.**

### 느낀점

- OOP의 장점

  - 매우 직관적인 설계

    현실세계의 물건을 만드는 것 처럼 **매우 직관적인 설계가 가능**하여 좋았습니다.

    설계 뿐만 아니라 **object끼리의 상호작용에도 각각의 method만 활용하면 되는 점에서 매우 편리하고 직관적이어서 좋았습니다.**

    동시에 코드 또한 직관적으로 읽히도록 작성이 가능했습니다.

- 불편했던 점, 단점

  - 불완전한 캡슐화

    javascript만의 문제일 수 있지만 ES2019에 추가된 private밖에 없어 capsulation이 불완전하다는 점입니다. class 하나의 수많은 method들의 범위 설정이 어려워 가독성이 떨어진것 같습니다.

  - 메모리 비효율성

    필요한 기능은 class의 여러 기능 중에 몇가지인데 그것을 위해 instance로 모든 것을 만들어내야 한다는 점이 비효율 적이라 생각했습니다.

## Vanilla Javascript와 관심사의 분리



# 📝 느낀점

### 중요한건 무엇을 쓰냐가 아니라 무엇을 만드느냐 이다.

