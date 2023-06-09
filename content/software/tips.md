+++
title = "tips"
tags = ["資料", "応用"]
weight = 35
+++

## HIGH, LOWの書き換え

`HIGH`, `LOW` はぞれぞれArduinoライブラリ内で `1`, `0` と定義されているので、書き換えることができます

```c++
digitalWrite(5, HIGH);
//     ↓
digitalWrite(5, 1);
```

書き換えることで二次元配列などの可読性が上がる場合があります

## クロックのタイミング

ステッピングモーター、DCモーターの信号入力部にはトランジスタアレイ([TD62783APG](https://toshiba.semicon-storage.com/jp/semiconductor/product/linear-ics/transistor-arrays/detail.TD62783APG.html))が使用されています

そのため、電圧が印加された瞬間に信号が流れます

```c++
digitalWrite(5, 1); // ここの時点で信号が流れる
delay(5);
digitalWrite(5, 0);
```

これを利用すると、ステッピングモーターなどのクロックの待ち時間の間に7セグメントを動作させることができ、7セグメントのちらつきや輝度の低下を防ぐことができます

## Arduino言語とは

Arduino言語という表記でこのwikiでは統一していますが、Arduino言語の本質はC++言語です

Arduino IDEでプログラムをビルドすると、自動的に `Arduino.h` というヘッダファイルとリンクが行われます  
この `Arduino.h` はArduinoを操作するための基本的なライブラリとなっていて、
普段使う[digitalWrite](/software/embedded-functions/digitalwrite)のような関数、`HIGH` 、`LOW` などの定数はこのライブラリに記述されています
