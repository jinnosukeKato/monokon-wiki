+++
title = "digitalRead"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/)

## 説明

指定したピンをデジタル値で読み取ります

## 注意すべき点

読み取った値は `HIGH`, `LOW` として返ってきますが、booleanに代入可能です

入力基板によってプルアップ、プルダウンが違う場合があるので基盤を実際に確認をしてください

## サンプルコード

```c++
digitalRead(ピン番号);

// if文を使って22番ピンの値で分岐処理
if(digitalRead(22) == HIGH) {
    tone(4, 440, 1000);
}

// スマートな記法(動作は上と同じ)
if(digitalRead(22)) {
    tone(4, 440, 1000);
}

// 変数に値を代入
boolean value = digitalRead(22);
```
