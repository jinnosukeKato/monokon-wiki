+++
title = "パーツ解説"
description = "各パーツの制御方法、使用方法"
tags = ["ハードウェア", "解説", "基礎"]
draft = true
+++

このページは各パーツの制御方法、使用方法をまとめてあります

## 7セグメント

7つのセグメント(棒)と小数点の点灯を切り替えることで、数字や文字を表示することができます

制御対象基盤には2つ取り付けてあり、指定のピンに信号を送ることで各7セグメントの表示のON/OFFを切り替えることができます

### 制御方法

各セグメントには9つのピンがあり、2つ合計で18個のピンを使用します

9つのうち1つは表示の切り替え(ON/OFF)に使用し、残りの8つで各セグメントと小数点のON/OFFを切り替えます

セグメントのピン配置は一番上の横棒、右上、右下と時計回りに配置されており、最後は中央横棒、小数点となっています

ステッピングモーターと同じように、二次元配列にパターンを格納することを推奨します

```c++
// パターン例
const int SEG_PTN[][7] = {
    {1,1,1,1,1,1,0}, // 0
    {0,1,1,0,0,0,0}, // 1
    {1,1,0,1,1,0,1}, // 2
    // 省略
    {1,1,1,1,0,1,1}, // 9
    {0,0,0,0,0,0,0} // リセット
};
// リセットを入れると便利
```
***

## タクトスイッチ

ON/OFFの切り替えができるもっとも単純なスイッチです

### 使用方法

[`digitalRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#digitalread) 
関数を用いて値を読み取ります

## ホトカプラ

明るさを読み取ることができるセンサーです

### 使用方法

[`digitalRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#digitalread) 
関数を使用すると `HIGH` / `LOW` で値を読み取ることができます

[`analogRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#analogread) 
関数を使用するとアナログ値で読み取ることができます

明るさの具合で処理を変更する問題は出題されないので 
[`digitalRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#digitalread) 
関数を使用することが一般的です

## サンプルコード

```c++
if (digitalRead(ピン番号) == HIGH) {
    // HIGHの時の処理
} else {
    // LOWの時の処理
}
```

## 可変抵抗

軸がどれだけ回転されられたかを読み取ることができます

### 使用方法

[`digitalRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#digitalread) 
関数を使用すると `HIGH` / `LOW` で値を読み取ることができます

[`analogRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#analogread) 
関数を使用するとアナログ値で読み取ることができます

あまりHIGH/LOWで読み取るような問題は出題されないので 
[`analogRead`](https://github.com/jinnosukeKato/Monokon/wiki/%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E9%96%A2%E6%95%B0#analogread)
関数を使用することが一般的です

### サンプルコード

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