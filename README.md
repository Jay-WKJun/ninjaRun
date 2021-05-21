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
```

**BackEnd**

```
$ git clone https://github.com/Jay-WKJun/ninjaRunBack
$ cd ninjaRunBack
$ npm install
$ npm start
```

후에 **localhost://8080**에 접속

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
