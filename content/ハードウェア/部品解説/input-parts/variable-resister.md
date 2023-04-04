+++
title = "可変抵抗"
tags = ["ハードウェア", "部品", "解説", "基礎", "入力部品"]
+++

## 説明

軸がどれだけ回転されられたかを読み取ることができます

出力値は、0から1023の1024段階で出力されます

## 使用方法

[`digitalRead`](/arduino言語解説/embedded-functions/digitalread) 関数を使用すると `HIGH` / `LOW` で値を読み取ることができます

[`analogRead`](/arduino言語解説/embedded-functions/analogread) 関数を使用するとアナログ値で読み取ることができます

あまりHIGH/LOWで読み取るような問題は出題されないので [`analogRead`](/arduino言語解説/embedded-functions/analogread) 関数を使用することが一般的です

## サンプルコード

```c++
int volume = analogRead(ピン番号);

if (volume <= 500) {
    // 中央より下の値のときの処理
} else if(volume <= 524) {
    // 中央付近のときの処理
} else {
    // 中央より上の値のときの処理
}
```
