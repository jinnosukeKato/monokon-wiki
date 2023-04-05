+++
title = "digitalWrite"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/)

## 説明

ピンに対してデジタル出力(LOW, HIGH)を行います

## 注意すべき点

一度HIGHを出力したピンはLOWを出力するまでHIGHが出力されつづけます

意図しないピンがHIGHになり続け、意図しない部品が動作することが多々あるので気を付けましょう

## サンプルコード

```c++
digitalWrite(ピン番号, HIGH); // HIGHを出力
digitalWrite(ピン番号, LOW); // LOWを出力

// 5番ピンを使用したクロック動作
int clock_pin = 5;

digitalWrite(clock_pin, HIGH);
delay(5);
digitalWrite(clock_pin, LOW);
```
