+++
title = "static ローカル変数"
description = "static ローカル変数についての解説ページ"
tags = ["解説", "応用"]
+++

`static`修飾子は、関数、変数の宣言時につけることによって、様々な効果を変数に付与することができます

ただし、ほとんどの効果はものづくりコンテストレベルでは使用しないので、
このページでは、 static ローカル変数についてのみ解説します

## 宣言

```c++
{
    static int var = 0;
}
```

ブロック内(if, ループ, 関数宣言, etc...)で `static` をつけて変数を宣言することで、 static ローカル変数として宣言することができます

通常、ブロック内で内容を保存するような変数(カウンターなど)を宣言するときには、以下のように、スコープ外で変数を宣言することが多いでしょう

```c++
// 通常の while ループのカウント
int count = 0;
while(digitalRead(22) == HIGH) {
    count++;
    delay(1000);
    printf("%d", count);
}
```

`static` 修飾子を使うことで、以下の例のようにすることができます

```c++
while(digitalRead(22) == HIGH) {
    static int count = 0;
    count++;
    delay(1000);
    printf("%d", count);
}
```

## 特徴

static ローカル変数は以下の特徴があります

1. 再宣言されない
1. 内容が保存される
1. スコープ外からは参照できない

### 再宣言されない

static ローカル変数は一度宣言された後、再宣言されません

```c++
while(digitalRead(22) == HIGH) {
    int count = 0;
    count++;
    delay(1000);
    printf("%d", count);
}
```

上で出した例の`count`を通常の変数にした例です

この場合、ループが何度も回るたびに、`count`は0として再宣言されてしまいます

static ローカル変数にすることで、再代入を防ぐことができます

### 内容が保存される

`static`をつけることで内容が保存されます

一度宣言された static ローカル変数は内容が保存され続けます

```c++
while(digitalRead(22) == HIGH) {
    static int count = 0;
    count++;
    delay(1000);
    printf("%d", count);
}
```

上記の例では、`count`は最初に0が代入された後、+1されていきます

### スコープ外からは参照できない

```c++
// 通常の while ループのカウント
int count = 0;
while(digitalRead(22) == HIGH) {
    count++;
    delay(1000);
    printf("%d", count);
}

count += 100; // 意図しないスコープから変数にアクセスできてしまう
```

通常の宣言では上記のような問題が起こりますが、 static ローカル変数にすることでそれを防ぐことができます
