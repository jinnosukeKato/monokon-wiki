var relearn_search_index=[{content:`About ものコンに関することをまとめたWIKIです
大会概要などは、公式な情報を必ず参照してください！
ものコン全国大会公式サイトはこちら
Features サイドメニューの検索より、全文検索が可能です
また、タグ一覧より、各ページにつけられたタグからページを参照することもできます
初心者の方へ 基礎的なことが書いてあるページは基礎のタグをつけています
基礎のタグがついているページをまず読んでいただくと良いかと思います
また、分からないことがあったら先輩に聞いてみましょう
ググるよりも聞いたほうが正確で手っ取り早いことが多々あります
また、問題集も用意しましたので、時間のあるときに過去問と並行して解いてみてください
Arduino IDE ダウンロードページ https://www.arduino.cc/en/software
上記のサイトから2.x.xのバージョン(1.x.xではないほう)をダウンロードして使ってください
ピン番号について ピン番号は UNO と MEGA で違うので、あえてサンプル内で記述しないようにしています
詳しくはピン対応表を参照してください
この WIKI のリポジトリ https://github.com/jinnosukeKato/monokon-wiki
加筆修正依頼 この WIKI 内で何か間違っていたり、加筆してほしい部分があればリポジトリに issue を立てるか連絡してください
`,description:"ものづくりコンテストについての知見をまとめたウィキです",tags:null,title:"ものコン wiki",uri:"/index.html"},{content:`このページでは、ものコン(電子回路組立部門)がどんなことをするのか簡単に説明します
正式名称 正式名称は 高校生ものづくりコンテスト(電子回路組立部門) と言います
通称 ものコン です
部門概要 様々ある部門の中で私たちは電子回路組立部門に出場します
電子回路組立部門は入力回路基板とプログラムを作成して、制御対象装置と呼ばれるDCモーター、ステッピングモーター、ブザー、2つの7セグメントが搭載された 基盤に問題で指定された動作を行わさせる部門です
大会で上位を目指すには、プログラミングの知識、技術はもちろん、はんだづけの技術や電子回路に関する知識も必要です
大会の流れ ものコンには県大会、関東大会、全国大会があります
県大会(一人部門)で3位以上に入賞すると、関東大会に県代表として進むことができます
また、関東大会で優勝すると全国大会に進むことができます
`,description:"このページではものコン(電子回路組立部門)がどんなことをするのか簡単に説明します",tags:["基礎"],title:"ものコンとは",uri:"/about-monokon/index.html"},{content:`setup() この関数はプログラムが実行されたあとに一度だけ呼び出されます
この関数の中には pinMode など最初に一度だけ行えばよい処理を記述します
// 2番ピンをアウトプットとして指定する void setup() { pinMode(2, OUTPUT); } loop() この関数は setup() が呼び出された後に名前の通り繰り返し実行されます
プログラムの主な処理内容はこの関数の中に記述します
// 1秒おきに4番ピンに接続されたブザーを440Hzで鳴らす void loop() { tone(4, 440); delay(1000); noTone(4); delay(1000); } `,description:"プログラムの流れを制御する2つの関数についての解説",tags:["解説","基礎","構文"],title:"基礎構文",uri:"/software/syntax/language/index.html"},{content:`このセクションでは、Arduino言語の構文などについて解説します
`,description:"",tags:null,title:"構文",uri:"/software/syntax/index.html"},{content:`このセクションでは出力部品について、その動作や制御方法を解説します
`,description:"",tags:null,title:"出力部品",uri:"/hardware/about-parts/output-parts/index.html"},{content:`このセクションでは各部品について、その動作や制御方法を解説します
`,description:"",tags:null,title:"部品解説",uri:"/hardware/about-parts/index.html"},{content:`このページでは、県大会で使用するハードウェアについて解説します
制御の流れ ものコンでは 制御対象装置 、 入力回路基板 と制御用コンピューターを接続して問題を解きます
制御用コンピューターには指定はありませんが、Arduino (Uno, Mega) を使用しています
PCからArduinoへArduino IDEを用いてプログラムを書き込み、実行します
制御対象装置 制御対象装置には、
DCモーター ステッピングモーター ブザー 7セグメント x2個 以上のパーツがついています
入力回路基板 入力回路基板には
タクトスイッチ ホトカプラ 可変抵抗 以上のパーツがついています
`,description:"県大会で使用するハードウェアについての接続図と解説",tags:["ハードウェア","解説","基礎"],title:"接続図",uri:"/hardware/connections/index.html"},{content:`使用頻度が高い組み込み関数について、ひとつづつ解説します
ここで紹介する関数以外にも様々な関数がArudino言語には 標準で用意されているので、 Arduino公式リファレンス も併せて読むことを推奨します
また、インターネット上には非公式日本語リファレンスもいくつかありますが、情報が古いことがあるので気を付けるようにしてください
`,description:"",tags:null,title:"組み込み関数",uri:"/software/embedded-functions/index.html"},{content:`このセクションでは入力部品について、その動作や制御方法を解説します
`,description:"",tags:null,title:"入力部品",uri:"/hardware/about-parts/input-parts/index.html"},{content:`変数とは、値を格納できる箱のようなものです
実際には、変数を宣言することによって、指定された型の分だけメモリ空間を確保し、そのメモリ空間へのアドレスに対して変数名のエイリアスをつけることが行われています
宣言 Arduino言語では以下のようにして変数を宣言します
型 任意の変数名; 具体的には以下のようになります
// int型のvariableという変数を宣言する int variable; 同一の型であれば複数の変数を同時に宣言することも可能です
// int型の first, second, thirdの3つの変数を一行で宣言する int first, second, third; 型 変数の宣言時に指定する型によって格納可能な値の大きさが変わります
もっともよく使う int 型であれば、基本的には-2の15乗から、2の15乗-1まで格納することができます
ものコンでは、符号付整数を格納できる int や、真偽値を格納できる bool をよく使います
某H先生はint型のことを実数型と教えてきましたが、それは間違っているので注意してください
int や bool 以外にも様々な型がArduino言語には存在します
公式リファレンスの型一覧
これらの型はケースバイケースで使い分けます
値の代入 変数には = を用いて値を格納することができます
変数に値を格納することを、代入といいます
// int型の変数variableに1を代入する int variable; variable = 1; また、変数の宣言と同時に値を代入することもできます
// int型のvarという変数を宣言し、1を代入 int var = 1; 変数を用いた演算 変数は式の一部に用いることができます
int one = 1; int two = 2; // oneとtwoの足し算の結果をsumに代入 int sum = one + two; スコープ 宣言した変数や関数が有効な範囲のことを、スコープと呼びます
int max = 123; void setup() { // ここでも max は使える int foo = 0; } // ここでは foo は使えない void loop() { // ここでも max は使える // ここでは foo は使えない } このように、変数には宣言したブロック( {} で囲まれた部分)より外では使うことができないというルールがあります
この使用できる範囲のことをスコープと呼びます
また、同一のスコープの中では同じ名前を変数につけることはできません
int hoge = 1; void setup(){ int hoge = 3; // ここで上書きされてしまう } `,description:"変数についての解説",tags:["解説","基礎"],title:"変数",uri:"/software/syntax/variables/index.html"},{content:`演算子を用いることで様々な演算を行うことができます
Arduino言語には様々な演算子がありますが、このセクションでは算術演算子、比較演算子、論理演算子と一部の複合演算子の説明を行います
算術演算子 数値を計算することのできる演算子です
算術演算子 例 例の演算結果 意味 + 1 + 2 3 足し算 - 2 - 1 1 引き算 * 2 * 2 4 掛け算 / 10 / 5 2 割り算 % 3 % 2 1 割り算の余り = a = 5 aは5 代入 複合演算子 変数に対して代入と計算を同時に行うことのできる演算子です
複合演算子を使うことでプログラムを簡潔に記述することができます
複合演算子 例 意味 ++ a++ a = a + 1 – a– a = a - 1 += a += 2 a = a + 2 -= a -= 2 a = a - 2 *= a *= 2 a = a * 2 /= a /= 2 a = a / 2 %= a %= 2 a = a % 2 ++ (インクリメント)と -- (デクリメント)は ++a のように、変数の前に置くこともできますが、意味が変わります
int a = 0; int b = 1; a = b++; // a = 1, b = 2 となり、代入=\u003eインクリメント となる a = ++b; // a = 2, b = 2 となり、インクリメント=\u003e代入 となる 上記の例のように、インクリメントやデクリメントをした変数の値をほかの変数に代入する場合に、代入結果が変わることに注意してください
比較演算子 二つの値を比較することができる演算子です
主に if文 で使用します
比較演算子 例 意味 == a == b aとbが等しいか != a != b aとbが等しくないか \u003c a \u003c b aはb未満か \u003e a \u003e b aはbより大きいか \u003c= a \u003c= b aはb以下か \u003e= a \u003e= b aはb以上か 演算の結果は bool で返ってくるので変数に代入することも可能です
bool var = a == b; 論理演算子 真偽値(boolean)を扱うことができる演算子です
論理演算を行います
複数の条件を組み合わせた分岐処理を作成したいときなどに使用します
論理演算子 例 意味 ! !a NOT \u0026\u0026 a \u0026\u0026 b AND || a || b OR bool t = true; bool f = false; bool not = !t; // false bool and = t \u0026\u0026 f; // false bool or = t || f; // true また、これらの演算子を用いた式は () でまとめることができます
bool exam = (true \u0026\u0026 false) || (false || true); // true int n = 5 * (9 + 1); // 10 `,description:"各種演算子についての解説",tags:["解説","基礎"],title:"演算子",uri:"/software/syntax/operators/index.html"},{content:`条件分岐文は、その名の通り、ある条件を評価し、処理を分岐させる文です
例えば、センサーの値や変数の値によって処理を変えたいときに使用します
if文 与えられた条件によって処理内容を変える文です
条件は bool 型で与えます
各種スイッチなどの入力値を与えたり、 比較演算子 と 論理演算子 と入力値を組み合わせたりして条件を与えます
else if 句によって一つ目の条件に合致しない場合、別の条件を与えて分岐させることもできます
else if 句は複数回連続して記述することが可能です
また、else 句によってどの条件にも合致しない場合の処理を記述することもできます
if (a != b) { // aがbと等しくない場合の処理 } if (a == b) { // aがbと等しい場合の処理 } else { // aがbと等しくない場合の処理 } if (a == b) { // aがbと等しい場合の処理 } else if (a \u003c b) { // aがbと等しくないかつ、aがbより小さい場合の処理 } else if (a != 42) { // aがbと等しくないかつ、aがbより小さくなく、aが42ではない場合の処理 } else { // 上の3つの条件すべてに当てはまらない場合の処理 } if (a == b \u0026\u0026 a != c) { // aがbと等しいかつ、 aがcと等しくない場合の処理 } switch文 与えられた変数がどの値かによって処理を変える文です
if文 は条件で分岐するのに対し、 switch 文 は一つの変数がどの値かという点で処理を分岐します
case 句の後に分岐させる場合の定数を書きます
処理の終わりには必ず break 文を書きます
break 文がない場合、次の break 文までに記述されている処理すべてが行われます
default 句の後にはどの条件にも当てはまらない場合に実行される内容を書きます
int x = 1; switch (x) { case 1: // xが1の時の処理 break; case 2: // xが2の時の処理 break; case 3: case 4: // x が3か4の時の処理 break; default: // どの条件にも当てはまらないときの処理 break; } `,description:"条件分岐文についての解説",tags:["解説","基礎","構文"],title:"条件分岐",uri:"/software/syntax/conditional-branch/index.html"},{content:`このセクションでは、Arduino言語やソフトウェアについて解説します
`,description:"",tags:null,title:"ソフトウェア",uri:"/software/index.html"},{content:`同じような処理を繰り返して実行するようなときには繰り返し文を使用します
繰り返し文を使用することで、プログラムの行数を削減し、プログラムを記述する手間を削減することができます。
また、簡潔なプログラムを書くことにもつながります
for文 任意の処理を任意の回数繰り返して実行することができる文です
繰り返しの条件は文頭で宣言する変数によって行います
この変数をfor文の中で使用することもできます
break 文が処理中にあった場合、ループを強制的に抜け出します
continue 文が処理中にあった場合には、 continue 文以降の処理を一度スキップしてループを続けます
for (変数の初期化; ループ継続条件; 変数の増加もしくは減少処理) { // 繰り返す処理 } // iが0から9まで10回繰り返す for (int i = 0; i \u003c= 9; i++) { // 10回繰り返される処理 } while文 任意の処理を条件が真になるまで繰り返して実行する文です
条件は if文 と同じように指定します
break 文が処理中にあった場合、ループを強制的に抜け出します
continue 文が処理中にあった場合には、 continue 文以降の処理を一度スキップしてループを続けます
// 22番ピンのスイッチの値がHIGHの間何かしらの処理を行う const int SWITCH_PIN = 22; while (digitalRead(SWITCH_PIN) == HIGH) { // 何かしらの処理 } for-each文 for-each文は for文 を拡張した構文です
配列の要素をひとつづつ取り出して、その値を処理したいときに使用します
for(配列の値の型 内部変数名: 配列名) { // 処理 } 通常の for文 でそのような処理を記述する場合、以下の例のように、配列の長さを事前に知っている必要があります
int length = 5; int array[length] = {0, 1, 2, 3, 4}; for(int i = 0; i \u003c length; i++) { // iがlengthを超えた場合バグが発生する tone(4, array[i] * 100); delay(1000); noTone(4); } 上の例を for-each文を利用して記述した例を下に示します
int length = 5; // lengthはここしか使用しない int array[length] = {0, 1, 2, 3, 4}; for(int i: array) { tone(4, array[i] * 100); delay(1000); noTone(4); } この構文は主にピンの初期化などに有効です
int OUTPUT_PINS = {4, 5, 6, 12, 13, 14, 15}; for(int i: OUTPUT_PINS) { pinMode(i, OUTPUT); } `,description:"反復処理についての解説",tags:["解説","基礎","構文","応用"],title:"反復処理",uri:"/software/syntax/iteration/index.html"},{content:`プログラムを書いているときに、同じ処理を何度も別の場所で行うことがよくあります
例えば、ステッピングモーターを回すなどです
処理の行数が少なかったり、使用頻度が少ないものであれば、コピーペーストでもよいかもしれません
しかし、行数が多かったり、何度も行う処理をコピーペーストで書いてしまうと長く、読みづらいプログラムになってしまうので、関数としてまとめて宣言し、それを呼び出すようにします
また、動作が似ている処理を抽象化して、関数にすることでコードを書く手間を大幅に削減できます
7セグメントを点灯させる際に、各数字ごとに別の関数を用意する必要はありません
どの数字を点灯するかを引数に取り、数値によって動作を変えればよいのです
宣言 返り値の型 関数名(引数の型 仮引数) { 処理 } 返り値とは処理の結果の値のことです
例えば、整数の足し算をする関数なら int 型を指定します
また、返り値がない場合(処理だけ行う)ときは void 型を指定します
引数は、関数の動作に必要な変数のことです
引数がいらない場合は省略できます
, で区切って複数個指定することもできます
// 整数同士の足し算を行う関数 int add(int a, int b) { return a + b; // return句で返り値を返すことができる } // 呼び出せる int i = add(5, 10); // クロック書き込みを行う関数 void clock() { digitalWrite(5, HIGH); delay(5); digitalWrite(5, LOW); } また、名前が同じでも引数が違う複数個の関数を宣言する(オーバーロード)こともできます
// 5msで固定のクロック void clock() { digitalWrite(5, 1); delay(5); digitalWrite(5, 0); } // 秒数を指定できるバージョン void clock(int ms) { digitalWrite(5, 1); delay(ms); digitalWrite(5, 0); } スコープ 関数にも変数と同様にスコープの概念があるので、宣言の際には気を付けましょう
`,description:"関数についての解説",tags:["解説","基礎","関数"],title:"関数",uri:"/software/syntax/functions/index.html"},{content:`配列は値を複数格納し、ひとまとめにすることができます
配列は、変数を連続的にしたものと考えてください
変数が電車の一車両、配列が電車全体と思ってください
実際には、指定された型のサイズ*長さ分だけのメモリ空間をメモリ上に確保します
値の読み書きを行う際には、その空間の先頭アドレスに型のサイズ*インデックス文を加算したアドレスを参照します
宣言 宣言の際には、型名、配列名、 [] の中に配列の長さ(何個値を格納するか)を指定して宣言します
型名 配列名[長さ]; 宣言と同時に値を代入する場合は長さの指定を省略することもできます
int array[] = {1, 2}; // 長さは2 値の代入には通常の変数と同様に = を使用します
{} で囲み、 , で値を区切ります
int array[3] = {0, 1, 2}; 配列内の値がすべて同じ場合はこのように代入することも可能です
// すべて0の場合 int array[5] = {0}; また、宣言と代入を別々に行うこともできます
インデックスを指定することで代入ができますが、インデックスは0から始まるので注意してください
int array[3]; array[0] = 1; // ↑ インデックス array[1] = 7; array[2] = 5; 値を取り出す際も同じようにインデックスを指定します
int array[5] = {1, 2, 3, 4, 5}; // 0番目の値を取り出す(値は1) int first_num_of_array = array[0]; 二次元配列 配列の中に配列を代入をすることもできます
変数を点、配列をx方向のみの一次元と捉えたうえで、配列を値に持つ配列はx-y平面として捉えることができるので、二次元配列と呼びます
宣言規則は通常の配列と同じですが、変数名の後に [] を2つつける必要があります
// 最深部の値の型が int、外側の配列の長さ4、内側の長さ5の二次元配列 int two_dim_array[4][5] = { {1, 1, 34, 0, 12}, {128, 1, 1, 0, 3}, {0, 134, 2, 5, 0}, {1, 8, 0, 1, 15} }; 二次元配列は 7セグメント や、 ステッピングモーター の表示・回転パターンを表現するためによく使用します
`,description:"配列について解説",tags:["解説","応用"],title:"配列",uri:"/software/syntax/arrays/index.html"},{content:`定数とは、一度しか代入できない変数のことです
例えば7セグメントの点灯パターンなど、プログラム実行中に書き換えることのない変数は、頭に const を付けることで、再代入を防ぐことができます
const int VAL = 0; VAL = 10; // 再代入のため、エラーが発生する また、ファイルの最上部に #define 定数名 値 と記述することでも定数宣言が可能です(置換マクロ)
#define PI 3.14 float ans = 5.0 * 5.0 * PI; ただし、 #define を使用すると、ファイル内のすべての定数名に使用した語句が含まれる部分が置き換えられてしまうので、可能な限り const を使うようにしましょう
#define get 10 void getNum() { // この関数宣言のgetの部分も10に置き換えられてしまう } `,description:"定数について解説",tags:["解説","応用"],title:"定数",uri:"/software/syntax/constants/index.html"},{content:`このセクションでは、ハードウェアについて解説します
`,description:"",tags:null,title:"ハードウェア",uri:"/hardware/index.html"},{content:`県大会レベルの例題をいくつか作題して載せておくので解いてみてください
レベル0から順に難易度が上がっていきます
また、並行して過去問も解いてみましょう
すべて解き終わってしまったら、関東大会の過去問にチャレンジしてみてください
レベル0 7セグメント部分点灯 電源投入後、右側の7セグメントが-と表示する。(中央横棒) 1秒後、右側の7セグメントは1秒間消灯し、それを繰り返す。 レベル1 ブザー 電源投入後、ブザーが1秒間高い音で鳴音する。 その後、低い音で2秒間鳴音する。これを繰り返す。 ステッピングモーター回転 電源投入後、ステッピングモーターが時計回りに2秒間回転する。 その後1秒間停止したのち、最初に戻り、繰り返す。 7セグメント片側点灯 電源投入後、右側の7セグメントが1を表示する。 1秒後、右側の7セグメントは消灯し、左側の7セグメントが7と表示する。 2秒後、両方のセグメントが消灯しつづける。 レベル2 DCモーター低速回転 電源投入後、DCモーターが時計回りに2秒間高速回転する。 その後、反時計回りに低速回転し、2秒間隔でこれを繰り返す。 ステッピングモーター角度指定回転 電源投入後、ステッピングモーターが右回りに回転する。 180度回転したのち、1秒間停止する。 その後、180度反時計回りに回転し、これを繰り返す。 タクトスイッチで動作を切り替え タクトスイッチが押されている間、ブザーが鳴音する。 タクトスイッチが押されていない間はブザーは鳴音しない。 7セグメント両側点灯 電源投入後、左側の7セグメントが0、右側の7セグメントが6を表示し続ける。 タクトスイッチとホトカプラで動作を切り替え 電源投入後、すべての部品は動作しない。 タクトスイッチが押されている間、DCモーターが左回転する。 タクトスイッチが離されるとDCモーターは停止する。 ホトカプラが遮光されるとブザーが低い音で鳴音する。 タクトスイッチが押されている間にホトカプラが遮光されるとブザーが高い音で鳴音し、DCモーターが右回転する。 レベル3 DCモーター回転と7セグメント両側点灯 電源投入後、DCモーターが時計回りに回転する。 タクトスイッチが押されている間、7セグメントが0 1と表示する。表示している間、DCモーターは反時計回りに回転する。 ステッピングモーターと7セグメント片側点灯 電源投入後、ステッピングモーターは時計回りに回転する。 ステッピングモーターが一回転するごとに右側の7セグメントは0から数字を1ずづ増やしていく。 7セグメントが9を表示するとステッピングモーターは回転を止め、右側の7セグメントは9を表示し続ける。 レベル4 7セグメント両側とステッピングモーターの組み合わせ 電源投入後、ステッピングモーターは反時計回りに回転し、左側の7セグメントは消灯、右側は0を表示する。 ステッピングモーターが一回転するごとに7セグメントは0から数字を1ずづ増やしていく。 7セグメントが99を表示するとステッピングモーターは回転を止め、右側の7セグメントは99を表示し続ける。 7セグメントとDCモーター低速回転 電源投入後、7セグメントは--と表示し、DCモーターは停止する。 タクトスイッチが押されると、7セグメントはHIと表示し、DCモーターは高速で回転する。 タクトスイッチがもう一度押されると、7セグメントはLOと表示し、DCモーターは低速で回転する。 さらにもう一度タクトスイッチが押されると、動作状態は1に戻る。 全問解き終わった人へ 関東大会や全国大会の過去問も解いてみてください
(参考: H25~H29までの過去問(基盤が違うので問題のテイスト確認用)) http://www.zenjouken.com/index.php?key=jobecwus6-146#
`,description:"",tags:["資料"],title:"問題集",uri:"/problem-collection/index.html"},{content:`このページでは変数や関数の命名について解説します
より詳しく知りたい人は リーダブルコード を読んでみてください
また、Arduino言語公式のスタイルガイド(英語)もあるので こちら も読んでみてください
様々な記述法 よく使われる識別子の記法はいくつかあります
識別子名とは変数や関数など、プログラマが好きな名前を付けられるものの名前のことです
記法名 例 (get dataという名前) 特徴 アッパーキャメルケース (UCC) GetData 単語を大文字で区切る ローワーキャメルケース (LCC) getData 単語を大文字で区切るが先頭は小文字 スネークケース get_data 単語をアンダーバーで区切る 言語によって記法の指定があったりなかったりしますが、Arduino言語で書くときに筆者は
対象 記法 例 関数 ローワーキャメルケース digitalWrite() 変数 ローワーキャメルケース pushCount 定数 すべて大文字のスネークケース SEG_PTN というふうにしています
識別子名の言語 Arduino言語でプログラムを記述する際に、関数名、変数名に日本語の文字を使うことは規則上は可能です
しかし、環境によってはコンパイルできない場合があるのでお勧めしません
また、関数名、変数名はローマ字ではなく、できれば英語をおすすめします
理由としては、
世界標準である 英語の勉強になる からです
また、単語はわかりやすいものを使うようにしましょう
識別子名の具体性 識別子名にどこまで具体性を持たせるかによって、プログラムの可読性(人間にとっての読みやすさ)が変わってきます
どこまで具体性を持たせるかは、その識別子名がどのスコープで使われるかなどで決定します
int a = 3; int rad = 2; int answer_of_calculation = rad * rad * a; print("%d", answer_of_calculation); 上記の例は、円周率を3として半径2の円の面積を求めるプログラムですが、変数の命名があまりよろしくありません
int a = 3; // aが何を示しているのかわかりずらい int rad = 2; // radian(ラジアン)と間違える可能性がある int answer_of_calculation = rad * rad * a; // 1行しか使わないのに名前が長すぎる printf("%d", answer_of_calculation); 分かりやすく書き直してみたものが以下の例です
const int PI = 3; // const を付けて定数にして、名前も大文字にする int radius = 2; // radius(半径)にする int ans = radius * radius * PI; // わかりやすく短い名前にする printf("%d", ans); このように、簡潔な識別子名を付けることで、読み返しやすいプログラムを書くことができます
`,description:"",tags:null,title:"変数・関数の命名",uri:"/software/naming/index.html"},{content:`HIGH, LOWの書き換え HIGH, LOW はぞれぞれArduinoライブラリ内で 1, 0 と定義されているので、書き換えることができます
digitalWrite(5, HIGH); // ↓ digitalWrite(5, 1); 書き換えることで二次元配列などの可読性が上がる場合があります
クロックのタイミング ステッピングモーター、DCモーターの信号入力部にはトランジスタアレイ(TD62783APG)が使用されています
そのため、電圧が印加された瞬間に信号が流れます
digitalWrite(5, 1); // ここの時点で信号が流れる delay(5); digitalWrite(5, 0); これを利用すると、ステッピングモーターなどのクロックの待ち時間の間に7セグメントを動作させることができ、7セグメントのちらつきや輝度の低下を防ぐことができます
Arduino言語とは Arduino言語という表記でこのwikiでは統一していますが、Arduino言語の本質はC++言語です
Arduino IDEでプログラムをビルドすると、自動的に Arduino.h というヘッダファイルとリンクが行われます
この Arduino.h はArduinoを操作するための基本的なライブラリとなっていて、 普段使うdigitalWriteのような関数、HIGH 、LOW などの定数はこのライブラリに記述されています
`,description:"",tags:["資料","応用"],title:"tips",uri:"/software/tips/index.html"},{content:`作る機会の多い関数のサンプルを集めました
参考にしてもらって構いませんが、まずは自分で考えることが大事です
また、このサンプルのピンは Arduino MEGA を前提としているので、 UNO(小さいほう)を使うときは逐次書き換えてください
クロック ステッピングモーター、 DCモーターを回転させるときに使うクロックです
void clock() { digitalWrite(5, 1); delay(5); digitalWrite(5, 0); } delay の秒数を指定できるバージョン
void clock(int ms) { digitalWrite(5, 1); delay(ms); digitalWrite(5, 0); } ステッピングモーター ステッピングモーターを回転させる関数です
二次元配列をパターンに使用した例
void stepper() { const int PTN[4][4] = { { 1, 1, 0, 0 }, { 0, 1, 1, 0 }, { 0, 0, 1, 1 }, { 1, 0, 0, 1 } }; for (int i = 0; i \u003c 4; i++) { for (int pin = 12; pin \u003c= 15; pin++) { digitalWrite(pin, PTN[i][pin - 12]); } clock(); } } ビットでパターンを作成した例 (暗記はしやすいかもしれない)
void stepper() { const int PTN[4] = { 12, 6, 3, 9 }; // 二進数に変換すると意味が分かる for (int p : PTN) { for (int j = 0; j \u003c 4; j++) { digitalWrite(j + 6, (p \u003e\u003e j) \u0026 1); } clock(); } } 7セグメント 7セグメントを光らせるためのいろいろな関数です
// 点灯パターン const int SEG_PTN[][7] = { { 1, 1, 1, 1, 1, 1, 0 }, // 0 { 0, 1, 1, 0, 0, 0, 0 }, // 1 { 1, 1, 0, 1, 1, 0, 1 }, // 2 { 1, 1, 1, 1, 0, 0, 1 }, // 3 { 0, 1, 1, 0, 0, 1, 1 }, // 4 { 1, 0, 1, 1, 0, 1, 1 }, // 5 { 1, 0, 1, 1, 1, 1, 1 }, // 6 { 1, 1, 1, 0, 0, 1, 0 }, // 7 { 1, 1, 1, 1, 1, 1, 1 }, // 8 { 1, 1, 1, 1, 0, 1, 1 }, // 9 { 0, 0, 0, 0, 0, 0, 0 }, // 空白(リセット用) }; // 信号だけ送る関数 void seg(int num) { for (int i = 12; i \u003c= 18; i++) { digitalWrite(i, SEG_PTN[num][i - 12]); } } // 左側だけ光らせる関数 void segL(int num) { seg(10); //残像防止 digitalWrite(2, 1); digitalWrite(3, 0); seg(num); } // 右側だけ光らせる関数 void segR(int num) { seg(10); //残像防止 digitalWrite(2, 0); digitalWrite(3, 1); seg(num); } // 両方を指定した時間光らせる関数 void segW(int l, int r, int duration) { for (int i = 0; i \u003c= duration; i++) { if (i % 2 == 0) { segL(l); } else { segR(r); } delay(1); } } ステッピングモーターと7セグメント 県大会レベルでは一番の難関だと思うので、あえてここにはコードを書きませんが、ヒントは
ステッピングモータのクロックの前に余計な信号を入れないこと ステッピングモータのクロックの間も7セグメントを点灯させること です
どうしてもコードが見たければ以下のリポジトリに書いてあるので見てください https://github.com/jinnosukeKato/Monokon-Kanagawa-2022
押して離されたら(バンプ) const int SW = 22; void loop() { while(digitalRead(SW) == 1) { // ここに押されている間の待機動作 if(digitalRead(SW) != 1) { // ここには離されたときに動作する内容 } } } `,description:"",tags:["資料"],title:"サンプルコード集",uri:"/software/sample-code-collection/index.html"},{content:`エラーコードが出てるときはエラーコードを読む！
エラーコードは赤色で、英語で、よくわからなくて、怖いかもしれませんが、恐れることはありません
エラーコードと仲良くなりましょう
このページを読んでも分からないときは、ほかの部員に相談しましょう
とにかく動かないとき flowchart TD Root(["動かない！"]) --\u003e CanCompile{"コンパイルが通るか"}; CanCompile -- yes --\u003e Program{"プログラムの内容は正しいか\\n(分からなければ他人に読んでもらう)"}; CanCompile -- no --\u003e USBConnection{"PCとArduinoが接続されているか"}; USBConnection -- yes --\u003e PortSetting{"ポートの指定は正しいか"}; PortSetting -- yes --\u003eSyntaxErr["プログラムの構文が正しくない\\nエラーコードを読んで修正"]; PortSetting -- no --\u003e ChangePort["ポートの指定を直す"]; USBConnection -- no --\u003e ConnectUSB["USBを接続する"]; Program -- yes --\u003e Hardware; Program -- no --\u003e 正しいプログラムを書く; Hardware["ハードウェアに\\n問題がある可能性が高い"] --\u003e PowerOkay{"電源が接続されているか"}; PowerOkay -- yes --\u003e TapOkay{"電源タップに通電しているか"}; PowerOkay -- no --\u003e PowerTurnOn["電源を接続する"]; TapOkay -- yes --\u003e ActOtherPart{"動かない部品は一つか"}; TapOkay -- no --\u003e ConnectTap["タップを接続する"]; ActOtherPart -- yes --\u003e IsConnectionErr{"ワイヤーが断線しているか"}; IsConnectionErr -- yes --\u003e ConnectionErr; IsConnectionErr -- no --\u003e PartFailure["パーツもしくは\\nICが故障している"]; ActOtherPart -- no --\u003e IsPluralPartsFailure{"すべてのパーツが動かないか"}; IsPluralPartsFailure -- yes --\u003e IsArduinoErr{"Arduinoと\\n制御対象基盤との\\n接続はできているか"}; IsPluralPartsFailure -- no --\u003e IcFailure["制御対象基盤の\\nICか回路の故障が疑わしい"]; IsArduinoErr -- yes --\u003e ArduinoErr; IsArduinoErr -- no --\u003e ConnectionErr; ArduinoErr["Arduinoの故障が疑われる"] ConnectionErr["基板or部品間の接続を直す"]プログラムのどこが間違っているかわからないとき flowchart TD ROOT["動かない！"] --\u003e ExplainToTheDuckRoopS; ExplainToTheDuckRoopS[/"一行ずつ読む"\\] --\u003e ExPlainToTheDuck; ExPlainToTheDuck["誰かに説明するようにじっくり読む"] --\u003e CheckSyntaxErr; CheckSyntaxErr{"間違っている箇所を発見した"}; CheckSyntaxErr -- yes --\u003e Fix["修正する"] --\u003e Run; Run{"正しく動作するか"}; Run -- yes --\u003e End["修正完了"]; Run -- no --\u003e ROOT; CheckSyntaxErr -- no --\u003e ExplainToTheDuckRoopE[\\全文読んだ/]; ExplainToTheDuckRoopE -- yes --\u003e 他人に相談; ExplainToTheDuckRoopE -- no --\u003e ExplainToTheDuckRoopS;`,description:"トラブルシューティングのページ",tags:["基礎","資料"],title:"動かないときは",uri:"/trouble-shooting/index.html"},{content:`説明 7つのセグメント(棒)と小数点の点灯を切り替えることで、数字や文字を表示することができます
制御対象基盤には2つ取り付けてあり、指定のピンに信号を送ることで各7セグメントの表示のON/OFFを切り替えることができます
制御方法 各セグメントには9つのピンがあり、2つ合計で18個のピンを使用します
9つのうち1つは表示の切り替え(ON/OFF)に使用し、残りの8つで各セグメントと小数点のON/OFFを切り替えます
セグメントのピン配置は一番上の横棒、右上、右下と時計回りに配置されており、最後は中央横棒、小数点となっています
ステッピングモーターと同じように、二次元配列にパターンを格納することを推奨します
// パターン例 const int SEG_PTN[][7] = { {1,1,1,1,1,1,0}, // 0 {0,1,1,0,0,0,0}, // 1 {1,1,0,1,1,0,1}, // 2 // 省略 {1,1,1,1,0,1,1}, // 9 {0,0,0,0,0,0,0} // リセット }; // リセットを入れると便利 `,description:"",tags:["ハードウェア","部品","解説","基礎","出力部品"],title:"7セグメント",uri:"/hardware/about-parts/output-parts/seven-segment/index.html"},{content:`リファレンス 説明 指定したピンをアナログ値で読み取ります
注意すべき点 返り値は最大10bitsの値です
2^10は1024なので0~1023の整数値が返ってきます
この関数で値を読み取ることができるのは A0 などの　A から始まるピン番号のピンのみです
また、番号は A0 のように A を含めて指定してください
サンプルコード analogRead(ピン番号); // A0の値で周波数を変更 int value = analogRead(A0); if(value \u003c= 500) { tone(4, 200, 1000); } else if(value \u003c= 524) { tone(4, 400, 1000); } else { tone(4, 800, 1000); } `,description:"",tags:["解説","組み込み関数","基礎"],title:"analogRead",uri:"/software/embedded-functions/analogread/index.html"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories/index.html"},{content:`説明 DCモーターは回る、止まるの動作のみをする基本的なモーターです
プログラムで、回転する方向、速度、停止の素早さを制御できます
制御方法 2つのピンとクロックで制御します
ピン1 ピン2 動作 LOW LOW 緩やかな停止 HIGH HIGH 急停止 HIGH LOW 回転 LOW HIGH 逆回転 `,description:"",tags:["ハードウェア","部品","解説","基礎","出力部品"],title:"DCモーター",uri:"/hardware/about-parts/output-parts/dc-motor/index.html"},{content:`リファレンス 説明 指定したミリ秒の間、プログラム全体の動作を停止させます
注意すべき点 プログラム全体が停止することに留意してください
例えば、待ち時間になにかしらの動作をさせたいにも関わらず、 delay(1000) などとすると、意図しない動作になってしまうことが多いです
サンプルコード delay(停止させたいミリ秒数); // 4番に接続されたブザーを440Hzで1000ms鳴らす int buzzer_pin = 4; int frequency = 440; tone(buzzer_pin, frequency); delay(1000); noTone(buzzer_pin); `,description:"",tags:["解説","組み込み関数","基礎"],title:"delay",uri:"/software/embedded-functions/delay/index.html"},{content:`リファレンス 説明 指定したピンをデジタル値で読み取ります
注意すべき点 読み取った値は HIGH, LOW として返ってきますが、booleanに代入可能です
入力基板によってプルアップ、プルダウンが違う場合があるので基盤を実際に確認をしてください
サンプルコード digitalRead(ピン番号); // if文を使って22番ピンの値で分岐処理 if(digitalRead(22) == HIGH) { tone(4, 440, 1000); } // スマートな記法(動作は上と同じ) if(digitalRead(22)) { tone(4, 440, 1000); } // 変数に値を代入 boolean value = digitalRead(22); `,description:"",tags:["解説","組み込み関数","基礎"],title:"digitalRead",uri:"/software/embedded-functions/digitalread/index.html"},{content:`リファレンス 説明 ピンに対してデジタル出力(LOW, HIGH)を行います
注意すべき点 一度HIGHを出力したピンはLOWを出力するまでHIGHが出力されつづけます
意図しないピンがHIGHになり続け、意図しない部品が動作することが多々あるので気を付けましょう
サンプルコード digitalWrite(ピン番号, HIGH); // HIGHを出力 digitalWrite(ピン番号, LOW); // LOWを出力 // 5番ピンを使用したクロック動作 int clock_pin = 5; digitalWrite(clock_pin, HIGH); delay(5); digitalWrite(clock_pin, LOW); `,description:"",tags:["解説","組み込み関数","基礎"],title:"digitalWrite",uri:"/software/embedded-functions/digitalwrite/index.html"},{content:`リファレンス 説明 プログラムが書き込まれ、実行されてからの経過時間(ミリ秒)を返す関数です
注意すべき点 返り値は unsigned long 型です
int に値を代入することも可能ですが、 unsigned long は int や long と比べて保持可能なデータ量が大きいので、 長い時間を計測する場合などにエラーを引き起こす原因となることがあります
サンプルコード unsigned long time = millis(); // delayを使わないクロック unsigned long start_ms; // クロックを開始する関数 void clock_start() { digitalWrite(5, HIGH); start_ms = millis(); } // 定期実行してクロックを停止させる関数 void　clock_check(unsigned long duration) { if(millis() - start_ms \u003e= duration) { digitalWrite(5, LOW); } } `,description:"",tags:["解説","組み込み関数","基礎"],title:"millis",uri:"/software/embedded-functions/millis/index.html"},{content:`リファレンス 説明 tone で鳴らした音を消す関数です
注意すべき点 特になし
サンプルコード noTone(ピン番号); // 4番で鳴らした音を1秒後に消す tone(4, 440); delay(1000); noTone(4); `,description:"",tags:["解説","組み込み関数","基礎"],title:"noTone",uri:"/software/embedded-functions/notone/index.html"},{content:`リファレンス 説明 指定したピンをインプットもしくはアウトプットとして設定します
入力を読み取る場合(スイッチやセンサー)にはインプットを、出力を行う場合にはアウトプットを指定してください
注意すべき点 pinMode 関数を使用しない場合でもプログラムが動作することがありますが、 pinMode 関数は内部インピーダンスを用途に合わせて切り替えているので、 なるべく指定するようにしてください
サンプルコード pinMode(ピン番号, INPUT); // インプットに指定 pinMode(ピン番号, OUTPUT); // アウトプットに指定 // for-each文を用いた効率的な指定方法 const int output_pins[] = {11, 12, 13, 14, 15}; for(int i : output_pins) { pinMode(i, OUTPUT); } `,description:"",tags:["解説","組み込み関数","基礎"],title:"pinMode",uri:"/software/embedded-functions/pinmode/index.html"},{content:`static修飾子は、関数、変数の宣言時につけることによって、様々な効果を変数に付与することができます
ただし、ほとんどの効果はものづくりコンテストレベルでは使用しないので、 このページでは、 static ローカル変数についてのみ解説します
宣言 { static int var = 0; } ブロック内(if, ループ, 関数宣言, etc…)で static をつけて変数を宣言することで、 static ローカル変数として宣言することができます
通常、ブロック内で内容を保存するような変数(カウンターなど)を宣言するときには、以下のように、スコープ外で変数を宣言することが多いでしょう
// 通常の while ループのカウント int count = 0; while(digitalRead(22) == HIGH) { count++; delay(1000); printf("%d", count); } static 修飾子を使うことで、以下の例のようにすることができます
while(digitalRead(22) == HIGH) { static int count = 0; count++; delay(1000); printf("%d", count); } 特徴 static ローカル変数は以下の特徴があります
再宣言されない 内容が保存される スコープ外からは参照できない 再宣言されない static ローカル変数は一度宣言された後、再宣言されません
while(digitalRead(22) == HIGH) { int count = 0; count++; delay(1000); printf("%d", count); } 上で出した例のcountを通常の変数にした例です
この場合、ループが何度も回るたびに、countは0として再宣言されてしまいます
static ローカル変数にすることで、再代入を防ぐことができます
内容が保存される staticをつけることで内容が保存されます
一度宣言された static ローカル変数は内容が保存され続けます
while(digitalRead(22) == HIGH) { static int count = 0; count++; delay(1000); printf("%d", count); } 上記の例では、countは最初に0が代入された後、+1されていきます
スコープ外からは参照できない // 通常の while ループのカウント int count = 0; while(digitalRead(22) == HIGH) { count++; delay(1000); printf("%d", count); } count += 100; // 意図しないスコープから変数にアクセスできてしまう 通常の宣言では上記のような問題が起こりますが、 static ローカル変数にすることでそれを防ぐことができます
`,description:"static ローカル変数についての解説ページ",tags:["解説","応用"],title:"static ローカル変数",uri:"/software/syntax/static-local-variable/index.html"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags/index.html"},{content:`リファレンス 説明 指定したピンに指定した周波数の信号を送る関数です
鳴らし続ける時間(ミリ秒)を指定することも可能です
注意すべき点 鳴らし続ける時間を指定しなかった場合、 noTone が実行されるまで音が鳴り続けます
時間を指定した場合、 delay と違い、 時間が経過する間プログラムは停止しません
また、31Hz以下の周波数は生成できません
サンプルコード tone(ピン番号, 周波数); // 時間を指定しない場合 tone(ピン番号, 周波数, 時間(ミリ秒)); // 時間を指定する場合 // ドの音を4番ピンで3秒間鳴らす tone(4, 440, 3000); `,description:"",tags:["解説","組み込み関数","基礎"],title:"tone",uri:"/software/embedded-functions/tone/index.html"},{content:"",description:"",tags:null,title:"ハードウェア",uri:"/tags/%E3%83%8F%E3%83%BC%E3%83%89%E3%82%A6%E3%82%A7%E3%82%A2/index.html"},{content:`説明 ステッピングモーターは回転する角度を調節できるモーターです
プログラムで、回転する方向、角度、速度を調節することができます
制御方法 4つのピンとクロックで制御します
ピン1 ピン2 ピン3 ピン4 HIGH HIGH LOW LOW LOW HIGH HIGH LOW LOW LOW HIGH HIGH HIGH LOW LOW HIGH パターンを二次元配列に格納して for 文などで値を取り出すと簡潔なプログラムにすることができます
`,description:"",tags:["ハードウェア","部品","解説","基礎","出力部品"],title:"ステッピングモーター",uri:"/hardware/about-parts/output-parts/stepper/index.html"},{content:`説明 押している間のみ通電する、最も単純なスイッチです
入力基盤によって、プルアップ・プルダウンがあるので注意しましょう
使用方法 digitalRead 関数を用いて値を読み取ります
サンプルコード if (digitalRead(ピン番号) == HIGH) { // HIGHの時の処理 } else { // LOWの時の処理 } `,description:"",tags:["ハードウェア","部品","解説","基礎","入力部品"],title:"タクトスイッチ",uri:"/hardware/about-parts/input-parts/tact-switch/index.html"},{content:`Arduino Mega (大きいほう) 連絡いただければ基盤データは渡します
ピン番号 接続先 メモ 1 Vcc 2 7セグ左ON/OFF 3 7セグ右ON/OFF 4 ブザー toneで鳴らしてください 5 クロック DCモーター/ステッピングモーター使用時に入力必須 6 オプション6-2 未使用 CN6と書いてあるピン 7 オプション6-3 〃 8 オプション6-4 〃 9 オプション6-5 〃 10 GND 11 Vcc 12 7セグ/ステッピング 7セグのピンは一番上の横棒から時計回り 13 7セグ/ステッピング 14 7セグ/ステッピング 15 7セグ/ステッピング 16 7セグ/DCモータ 17 7セグ/DCモータ 18 7セグ 中央横棒 19 7セグ 小数点 20 GND 22 製作基盤入力 digitalRead用 24 製作基盤入力 〃 26 製作基盤入力 〃 A0 製作基盤入力 analogRead用 A1 製作基盤入力 〃 A2 製作基盤入力 〃 Arduino Uno (小さいほう) 基板データ
ピン番号 接続先 メモ 2 7セグ左ON/OFF 3 7セグ右ON/OFF 4 ブザー toneで鳴らしてください 5 クロック DCモーター/ステッピングモーター使用時に入力必須 6 7セグ/ステッピング 7セグのピンは一番上の横棒から時計回り 7 7セグ/ステッピング 8 7セグ/ステッピング 9 7セグ/ステッピング 10 7セグ/DCモーター 11 7セグ/DCモーター 12 7セグ 中央横棒 13 7セグ 小数点 14 製作基盤入力 digitalRead用 15 製作基盤入力 〃 16 製作基盤入力 〃 A0 製作基盤入力 analogRead用 A1 製作基盤入力 〃 A2 製作基盤入力 〃 `,description:"各Arduinoのピン対応表",tags:["資料","基礎","ハードウェア"],title:"ピン対応表",uri:"/hardware/pin-assignment/index.html"},{content:`説明 ブザーは一定の周波数の音を鳴らすことができます
プログラムで周波数、音を鳴らす長さを指定することができます
制御方法 Arduino言語に含まれている tone 関数を使用することで周波数、音を鳴らす秒数を指定することができます
また、 noTone 関数を使用することで音を消すこともできます
`,description:"",tags:["ハードウェア","部品","解説","基礎","出力部品"],title:"ブザー",uri:"/hardware/about-parts/output-parts/buzzer/index.html"},{content:`説明 明るさを読み取ることができるセンサーです
使用方法 digitalRead 関数を使用すると HIGH / LOW で値を読み取ることができます
analogRead 関数を使用するとアナログ値で読み取ることができます
明るさの具合で処理を変更する問題は出題されないので、 digitalRead 関数を使用することが一般的です
サンプルコード if (digitalRead(ピン番号) == HIGH) { // HIGHの時の処理 } else { // LOWの時の処理 } `,description:"",tags:["ハードウェア","部品","解説","基礎","入力部品"],title:"ホトカプラ",uri:"/hardware/about-parts/input-parts/photo-coupler/index.html"},{content:"",description:"",tags:null,title:"応用",uri:"/tags/%E5%BF%9C%E7%94%A8/index.html"},{content:`説明 軸がどれだけ回転されられたかを読み取ることができます
出力値は、0から1023の1024段階で出力されます
使用方法 digitalRead 関数を使用すると HIGH / LOW で値を読み取ることができます
analogRead 関数を使用するとアナログ値で読み取ることができます
あまりHIGH/LOWで読み取るような問題は出題されないので analogRead 関数を使用することが一般的です
サンプルコード int volume = analogRead(ピン番号); if (volume \u003c= 500) { // 中央より下の値のときの処理 } else if(volume \u003c= 524) { // 中央付近のときの処理 } else { // 中央より上の値のときの処理 } `,description:"",tags:["ハードウェア","部品","解説","基礎","入力部品"],title:"可変抵抗",uri:"/hardware/about-parts/input-parts/variable-resister/index.html"},{content:"",description:"",tags:null,title:"解説",uri:"/tags/%E8%A7%A3%E8%AA%AC/index.html"},{content:"",description:"",tags:null,title:"関数",uri:"/tags/%E9%96%A2%E6%95%B0/index.html"},{content:"",description:"",tags:null,title:"基礎",uri:"/tags/%E5%9F%BA%E7%A4%8E/index.html"},{content:"",description:"",tags:null,title:"構文",uri:"/tags/%E6%A7%8B%E6%96%87/index.html"},{content:"",description:"",tags:null,title:"資料",uri:"/tags/%E8%B3%87%E6%96%99/index.html"},{content:"",description:"",tags:null,title:"出力部品",uri:"/tags/%E5%87%BA%E5%8A%9B%E9%83%A8%E5%93%81/index.html"},{content:"",description:"",tags:null,title:"組み込み関数",uri:"/tags/%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E9%96%A2%E6%95%B0/index.html"},{content:"",description:"",tags:null,title:"入力部品",uri:"/tags/%E5%85%A5%E5%8A%9B%E9%83%A8%E5%93%81/index.html"},{content:"",description:"",tags:null,title:"部品",uri:"/tags/%E9%83%A8%E5%93%81/index.html"}]