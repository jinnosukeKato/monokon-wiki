+++
title = "pinMode"
tags = ["解説", "組み込み関数", "基礎"]
+++

## [リファレンス](https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/)

## 説明

指定したピンをインプットもしくはアウトプットとして設定します

入力を読み取る場合(スイッチやセンサー)にはインプットを、出力を行う場合にはアウトプットを指定してください

## 注意すべき点

`pinMode` 関数を使用しない場合でもプログラムが動作することがありますが、 `pinMode` 関数は内部インピーダンスを用途に合わせて切り替えているので、
なるべく指定するようにしてください

## サンプルコード

```c++
pinMode(ピン番号, INPUT); // インプットに指定
pinMode(ピン番号, OUTPUT); // アウトプットに指定

// for-each文を用いた効率的な指定方法
const int output_pins[] = {11, 12, 13, 14, 15};

for(int i : output_pins) {
    pinMode(i, OUTPUT);
}
```
