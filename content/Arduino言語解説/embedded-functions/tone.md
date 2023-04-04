+++
title = "tone"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/advanced-io/tone/)

## 説明

指定したピンに指定した周波数の信号を送る関数です

鳴らし続ける時間(ミリ秒)を指定することも可能です

## 注意すべき点

鳴らし続ける時間を指定しなかった場合、 [`noTone`](/arduino言語解説/embedded-functions/notone/) が実行されるまで音が鳴り続けます

時間を指定した場合、 [`delay`](/arduino言語解説/embedded-functions/delay/) と違い、
時間が経過する間プログラムは停止しません

また、31Hz以下の周波数は生成できません

## サンプルコード

```c++
tone(ピン番号, 周波数); // 時間を指定しない場合
tone(ピン番号, 周波数, 時間(ミリ秒)); // 時間を指定する場合

// ドの音を4番ピンで3秒間鳴らす
tone(4, 440, 3000);
```
