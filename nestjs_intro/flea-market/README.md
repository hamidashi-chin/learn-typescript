<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## NestJSの基本アーキテクチャ

![](./for_readme/nestjs_architecture.png)

## Controllerについて

Controllerがルーティングの機能を担う

1. classに@Controller()デコレーターを付ける

```typescript
import { Controller } from '@nestjs/common';

@Controller('User')
export class UsersController {}
```

2. メソッド(ハンドラー)にHTTPメソッドデコレーターを付ける

```typescript
@Controller('users)
export class UsersController {
  @Post()
  create() {
    // Create User
  }
}
```

## Serviceについて

- ビジネスロジックを定義する
- Controllerから呼び出すことで、ユースケースを実現する
- Controllerにビジネスロジックを書いてもプログラムは動作するが、Controllerの責務はルーティングなので。
  - 責務毎に分割することで、保守性・拡張性等上がり良い設計となる
- 定義
  1. classに`@Injecable()`でデコレーターを付ける ※`@Service()`ではない

  ```typescript
  Import { Injectable } from '@nestjs/common';

  @Injectable()
  export class UserService {}
  ```

  2. ビジネスロジックを実現するメソッドを作成する

   ```typescript
  @Injectable()
    export class UserService {
      find(userName: string) {
        // Find user
      }
    }
   ```

  3. ModuleのprovidersにServiceを登録する

  ```typescript
  @Module({
    controllers: [UserController],
    providers: [UserService],
  })
  export class UsersModule {}
  ```

  4. ControllerのconstructorでServiceを引数にとる

  ```typescript
  @Controller('users')
  export class UsersController {
    constructor(private readonly UserService: UserService) {}

    @Get(':username')
    find(@Param('username') userName: string) {
      this.userService.find(userName);
    }
  }
  ```
- Nest Cliで作成する

```bash
nest g service items --no-spec # --no-specオプション付けると関連するスクリプト(テストとか)が生成されない
```

## Dependency Injection (DI)

- 依存関係のあるオブジェクトを外部から渡す
- 依存元のプログラムを書き換えることなく、依存先を変更できる
  - 主な用途
    - 本番用とテスト用でインスタンスの切り替え
    - ログの出力先の切り替え

## DTOについて
- データの受け渡しに使われるオブジェクト
  - データベースとモデルクラス間のデータのやり取り
  - リクエストオブジェクトからのデータ受け取り
- メンテナンス性が高まる
  - データの内容や型等が変更になった場合でも、修正箇所をDTO内に閉じ込めることができる
- 安全性が高まる
  - やりとりするデータをDTOの型に制限することができるので、誤ったデータが扱われるリスクが減る
- NestJSのバリデーション機能が使える
  - 型チェックだけではなく複雑なバリデーションも可能