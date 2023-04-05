+++
title = "配列"
description = "配列について解説"
tags = ["解説", "応用"]
weight = 7
+++

配列は値を複数格納し、ひとまとめにすることができます  
配列は、[変数](/software/syntax/variables/)を連続的にしたものと考えてください  
変数が電車の一車両、配列が電車全体と思ってください

実際には、指定された型のサイズ\*長さ分だけのメモリ空間をメモリ上に確保します  
値の読み書きを行う際には、その空間の先頭アドレスに型のサイズ\*インデックス文を加算したアドレスを参照します

## 宣言

宣言の際には、型名、配列名、 `[]` の中に配列の長さ(何個値を格納するか)を指定して宣言します

```text
型名 配列名[長さ];
```

宣言と同時に値を代入する場合は長さの指定を省略することもできます

```c++
int array[] = {1, 2}; // 長さは2
```

値の代入には通常の変数と同様に `=` を使用します  
`{}` で囲み、 `,` で値を区切ります

```c++
int array[3] = {0, 1, 2};
```

配列内の値がすべて同じ場合はこのように代入することも可能です

```c++
// すべて0の場合
int array[5] = {0};
```

また、宣言と代入を別々に行うこともできます

インデックスを指定することで代入ができますが、**インデックスは0から始まる**ので注意してください

```c++
int array[3];

array[0] = 1;
//    ↑ インデックス
array[1] = 7;
array[2] = 5;
```

値を取り出す際も同じようにインデックスを指定します

```c++
int array[5] = {1, 2, 3, 4, 5};

// 0番目の値を取り出す(値は1)
int first_num_of_array = array[0];
```

## 二次元配列

配列の中に配列を代入をすることもできます

変数を点、配列をx方向のみの一次元と捉えたうえで、配列を値に持つ配列はx-y平面として捉えることができるので、二次元配列と呼びます

宣言規則は通常の配列と同じですが、変数名の後に `[]` を2つつける必要があります

```c++
// 最深部の値の型が int、外側の配列の長さ4、内側の長さ5の二次元配列
int two_dim_array[4][5] = {
    {1, 1, 34, 0, 12},
    {128, 1, 1, 0, 3},
    {0, 134, 2, 5, 0},
    {1, 8, 0, 1, 15}
};
```

二次元配列は [7セグメント](パーツについて#7セグメント) や、 [ステッピングモーター](パーツについて#ステッピングモーター) の表示・回転パターンを表現するためによく使用します