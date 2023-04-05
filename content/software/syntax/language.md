+++
title = "基礎構文"
description = "プログラムの流れを制御する2つの関数についての解説"
tags = ["解説","基礎", "構文"]
weight = 1
+++

## [setup()](https://www.arduino.cc/reference/en/language/structure/sketch/setup/)

この関数はプログラムが実行されたあとに**一度だけ**呼び出されます

この関数の中には [`pinMode`](よく使う関数#pinmode) など最初に一度だけ行えばよい処理を記述します

```c++
// 2番ピンをアウトプットとして指定する
void setup() {
    pinMode(2, OUTPUT);
}
```

## [loop()](https://www.arduino.cc/reference/en/language/structure/sketch/loop/)

この関数は [`setup()`](Arduino言語解説-基礎編#setup) が呼び出された後に名前の通り**繰り返し**実行されます

プログラムの主な処理内容はこの関数の中に記述します

```c++
// 1秒おきに4番ピンに接続されたブザーを440Hzで鳴らす
void loop() {
    tone(4, 440);
    delay(1000);
    noTone(4);
    delay(1000);
}
```
