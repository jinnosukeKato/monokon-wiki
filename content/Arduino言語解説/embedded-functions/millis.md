+++
title = "millis"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/time/millis/)

## 説明

プログラムが書き込まれ、実行されてからの経過時間(ミリ秒)を返す関数です

## 注意すべき点

返り値は `unsigned long` 型です

`int` に値を代入することも可能ですが、 `unsigned long` は `int` や `long` と比べて保持可能なデータ量が大きいので、
長い時間を計測する場合などにエラーを引き起こす原因となることがあります

## サンプルコード

```c++
unsigned long time = millis();

// delayを使わないクロック
unsigned long start_ms;

// クロックを開始する関数
void clock_start() {
    digitalWrite(5, HIGH);
    start_ms = millis();
}

// 定期実行してクロックを停止させる関数
void　clock_check(unsigned long duration) {
    if(millis() - start_ms >= duration) {
        digitalWrite(5, LOW);
    }
}
````
