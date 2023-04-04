+++
title = "ホトカプラ"
tags = ["ハードウェア", "部品", "解説", "基礎", "入力部品"]
+++

## 説明

明るさを読み取ることができるセンサーです

## 使用方法

[`digitalRead`](/arduino言語解説/embedded-functions/digitalread) 関数を使用すると `HIGH` / `LOW` で値を読み取ることができます

[`analogRead`](/arduino言語解説/embedded-functions/analogread) 関数を使用するとアナログ値で読み取ることができます

明るさの具合で処理を変更する問題は出題されないので、 [`digitalRead`](/arduino言語解説/embedded-functions/digitalread) 関数を使用することが一般的です

## サンプルコード

```c++
if (digitalRead(ピン番号) == HIGH) {
    // HIGHの時の処理
} else {
    // LOWの時の処理
}
```
