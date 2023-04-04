+++
title = "delay"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/time/delay/)

## 説明

指定したミリ秒の間、プログラム全体の動作を停止させます

## 注意すべき点

プログラム全体が停止することに留意してください

例えば、待ち時間になにかしらの動作をさせたいにも関わらず、 `delay(1000)` などとすると、意図しない動作になってしまうことが多いです

## サンプルコード

```c++
delay(停止させたいミリ秒数);

// 4番に接続されたブザーを440Hzで1000ms鳴らす
int buzzer_pin = 4;
int frequency = 440;

tone(buzzer_pin, frequency);
delay(1000);
noTone(buzzer_pin);
```
