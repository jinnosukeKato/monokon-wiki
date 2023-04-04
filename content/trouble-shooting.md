+++
title = "動かないときは"
weight = 4
+++

**エラーコードが出てるときはエラーコードを読む！**

エラーコードは赤色で、英語で、よくわからなくて、怖いかもしれませんが、恐れることはありません  
エラーコードと仲良くなりましょう

このページを読んでも分からないときは、ほかの部員に相談しましょう

## とにかく動かないとき

```mermaid
flowchart TD
    Root(["動かない！"]) --> CanCompile{"コンパイルが通るか"};
    CanCompile -- yes --> Program{"プログラムの内容は正しいか\n(分からなければ他人に読んでもらう)"};
    CanCompile -- no --> USBConnection{"PCとArduinoが接続されているか"};
    USBConnection -- yes --> PortSetting{"ポートの指定は正しいか"};
    PortSetting -- yes -->SyntaxErr["プログラムの構文が正しくない\nエラーコードを読んで修正"];
    PortSetting -- no --> ChangePort["ポートの指定を直す"];
    USBConnection -- no --> ConnectUSB["USBを接続する"];
    Program -- yes --> Hardware;
    Program -- no --> 正しいプログラムを書く;
    Hardware["ハードウェアに\n問題がある可能性が高い"] -->  PowerOkay{"電源が接続されているか"};
    PowerOkay -- yes --> TapOkay{"電源タップに通電しているか"};
    PowerOkay -- no --> PowerTurnOn["電源を接続する"];
    TapOkay -- yes --> ActOtherPart{"動かない部品は一つか"};
    TapOkay -- no --> ConnectTap["タップを接続する"];
    ActOtherPart -- yes --> IsConnectionErr{"ワイヤーが断線しているか"};
    IsConnectionErr -- yes --> ConnectionErr;
    IsConnectionErr -- no --> PartFailure["パーツもしくは\nICが故障している"];
    ActOtherPart -- no --> IsPluralPartsFailure{"すべてのパーツが動かないか"};
    IsPluralPartsFailure -- yes --> IsArduinoErr{"Arduinoと\n制御対象基盤との\n接続はできているか"};
    IsPluralPartsFailure -- no --> IcFailure["制御対象基盤の\nICか回路の故障が疑わしい"];
    IsArduinoErr -- yes --> ArduinoErr;
    IsArduinoErr -- no --> ConnectionErr;
    ArduinoErr["Arduinoの故障が疑われる"]
    ConnectionErr["基板or部品間の接続を直す"]
```

## プログラムのどこが間違っているかわからないとき

```mermaid
flowchart TD
ROOT["動かない！"] --> ExplainToTheDuckRoopS;
ExplainToTheDuckRoopS[/"一行ずつ読む"\] --> ExPlainToTheDuck;
ExPlainToTheDuck["誰かに説明するようにじっくり読む"] --> CheckSyntaxErr;
CheckSyntaxErr{"間違っている箇所を発見した"};
CheckSyntaxErr -- yes --> Fix["修正する"] --> Run;
Run{"正しく動作するか"};
Run -- yes --> End["修正完了"];
Run -- no --> ROOT;
CheckSyntaxErr -- no --> ExplainToTheDuckRoopE[\全文読んだ/];
ExplainToTheDuckRoopE -- yes --> 他人に相談;
ExplainToTheDuckRoopE -- no --> ExplainToTheDuckRoopS;
```
