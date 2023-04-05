+++
title = "タクトスイッチ"
tags = ["ハードウェア", "部品", "解説", "基礎", "入力部品"]
+++

## 説明

押している間のみ通電する、最も単純なスイッチです  
入力基盤によって、プルアップ・プルダウンがあるので注意しましょう

## 使用方法

[`digitalRead`](/software/embedded-functions/digitalread) 関数を用いて値を読み取ります

## サンプルコード

```c++
if (digitalRead(ピン番号) == HIGH) {
    // HIGHの時の処理
} else {
    // LOWの時の処理
}
```
