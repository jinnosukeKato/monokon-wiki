+++
title = "サンプルコード集"
tags = ["資料"]
weight = 40
+++

作る機会の多い関数のサンプルを集めました

参考にしてもらって構いませんが、**まずは自分で考えることが大事です**

また、このサンプルのピンは Arduino MEGA を前提としているので、 UNO(小さいほう)を使うときは逐次書き換えてください

## クロック

[ステッピングモーター](/hardware/about-parts/output-parts/stepper)、
[DCモーター](/hardware/about-parts/output-parts/dc-motor)を回転させるときに使うクロックです

```c++
void clock() {
    digitalWrite(5, 1);
    delay(5);
    digitalWrite(5, 0);
}
```

[delay](/software/embedded-functions/delay) の秒数を指定できるバージョン

```c++
void clock(int ms) {
    digitalWrite(5, 1);
    delay(ms);
    digitalWrite(5, 0);
}
```

## ステッピングモーター

[ステッピングモーター](/hardware/about-parts/output-parts/stepper)を回転させる関数です

二次元配列をパターンに使用した例

```c++
void stepper() {
  const int PTN[4][4] = {
    { 1, 1, 0, 0 },
    { 0, 1, 1, 0 },
    { 0, 0, 1, 1 },
    { 1, 0, 0, 1 }
  };
  for (int i = 0; i < 4; i++) {
    for (int pin = 12; pin <= 15; pin++) {
      digitalWrite(pin, PTN[i][pin - 12]);
    }
    clock();
  }
}
```

ビットでパターンを作成した例 (暗記はしやすいかもしれない)

```c++
void stepper() {
  const int PTN[4] = { 12, 6, 3, 9 }; // 二進数に変換すると意味が分かる
  for (int p : PTN) {
    for (int j = 0; j < 4; j++) {
      digitalWrite(j + 6, (p >> j) & 1);
    }
    clock();
  }
}
```

## 7セグメント

[7セグメント](/hardware/about-parts/output-parts/seven-segment)を光らせるためのいろいろな関数です

```c++
// 点灯パターン
const int SEG_PTN[][7] = {
  { 1, 1, 1, 1, 1, 1, 0 },  // 0
  { 0, 1, 1, 0, 0, 0, 0 },  // 1
  { 1, 1, 0, 1, 1, 0, 1 },  // 2
  { 1, 1, 1, 1, 0, 0, 1 },  // 3
  { 0, 1, 1, 0, 0, 1, 1 },  // 4
  { 1, 0, 1, 1, 0, 1, 1 },  // 5
  { 1, 0, 1, 1, 1, 1, 1 },  // 6
  { 1, 1, 1, 0, 0, 1, 0 },  // 7
  { 1, 1, 1, 1, 1, 1, 1 },  // 8
  { 1, 1, 1, 1, 0, 1, 1 },  // 9
  { 0, 0, 0, 0, 0, 0, 0 },  // 空白(リセット用)
};

// 信号だけ送る関数
void seg(int num) {
  for (int i = 12; i <= 18; i++) {
    digitalWrite(i, SEG_PTN[num][i - 12]);
  }
}

// 左側だけ光らせる関数
void segL(int num) {
  seg(10);  //残像防止
  digitalWrite(2, 1);
  digitalWrite(3, 0);
  seg(num);
}

// 右側だけ光らせる関数
void segR(int num) {
  seg(10);  //残像防止
  digitalWrite(2, 0);
  digitalWrite(3, 1);
  seg(num);
}

// 両方を指定した時間光らせる関数
void segW(int l, int r, int duration) {
  for (int i = 0; i <= duration; i++) {
    if (i % 2 == 0) {
      segL(l);
    } else {
      segR(r);
    }
    delay(1);
  }
}
```

## ステッピングモーターと7セグメント

県大会レベルでは一番の難関だと思うので、あえてここにはコードを書きませんが、ヒントは

- ステッピングモータのクロックの前に余計な信号を入れないこと
- ステッピングモータのクロックの間も7セグメントを点灯させること

です

どうしてもコードが見たければ以下のリポジトリに書いてあるので見てください
<https://github.com/jinnosukeKato/Monokon-Kanagawa-2022>

## 押して離されたら(バンプ)

```c++
const int SW = 22;

void loop() {
  while(digitalRead(SW) == 1) {
    // ここに押されている間の待機動作
    if(digitalRead(SW) != 1) {
      // ここには離されたときに動作する内容
    }
  }
}
```
