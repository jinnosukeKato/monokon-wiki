+++
title = "analogRead"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/)

## 説明

指定したピンをアナログ値で読み取ります

## 注意すべき点

返り値は最大10bitsの値です

2^10は1024なので0~1023の整数値が返ってきます

この関数で値を読み取ることができるのは `A0` などの　`A` から始まるピン番号のピンのみです

また、番号は `A0` のように `A` を含めて指定してください

## サンプルコード

```c++
analogRead(ピン番号);

// A0の値で周波数を変更
int value = analogRead(A0);

if(value <= 500) {
    tone(4, 200, 1000);
} else if(value <= 524) {
    tone(4, 400, 1000);
} else {
    tone(4, 800, 1000);
}
```
