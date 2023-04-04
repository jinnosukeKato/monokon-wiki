+++
title = "noTone"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/advanced-io/notone)

## 説明

[`tone`](/arduino言語解説/embedded-functions/tone/) で鳴らした音を消す関数です

## 注意すべき点

特になし

## サンプルコード

```c++
noTone(ピン番号);

// 4番で鳴らした音を1秒後に消す
tone(4, 440);
delay(1000);
noTone(4);
```
