---
title: 公式チェックプラグインを導入する
lang: ja-jp
---

# 公式チェックプラグインを導入する

公式チェックプラグインをインストールしてサーバーの状態を監視してみましょう。

## 公式プラグインをインストールする

監視対象サーバーで以下のコマンドを実行し、公式チェックプラグインをインストールします。

```shell
sudo yum install -y mackerel-check-plugins
```

完了したら、インストールされたプラグインを見てましょう。

```shell
ls -l /usr/bin/check-*
```

30近いプラグインがインストールされていることを確認していただけるかと思います！

チェックプラグインもGitHubリポジトリにてソースコードを公開しています。

- [https://github.com/mackerelio/go-check-plugins/](https://github.com/mackerelio/go-check-plugins/)

それではプロセス監視を行う`check-procs`をセットアップしてみましょう。

## プロセス監視をしてみる

インストールされたプラグインのうち check-procs プラグインでプロセス監視をしてみます。

現時点でホスト上ではシステムを構成する役割となるようなプログラムが動いていないため、httpd (Apache) をインストールしてWebサーバーとしてプロセス監視を設定してみます。

以下のコマンドでhttpdをインストールして特に設定などはせずにそのまま起動します。

```shell
sudo yum install httpd
sudo systemctl start httpd
```

念のため`ps`コマンドでhttpdプロセスが実行されていることを確認してください。

```shell
ps aux | grep httpd
```

mackerel-agentの設定ファイル `/etc/mackerel-agent/mackerel-agent.conf` をviなどで開いて以下の2行を追記します。

```toml
[plugin.checks.proc_httpd]
command = ["check-procs", "--pattern", "httpd"]
```

以下のコマンドをターミナルで実行することでも追記できます。

```shell
sudo sh << SCRIPT
cat >>/etc/mackerel-agent/mackerel-agent.conf <<'EOF';
[plugin.checks.proc_httpd]
command = ["check-procs", "--pattern", "httpd"]
EOF
SCRIPT
```

特にエラーなどが発生せず、再びコマンドが入力できる状態になっていれば成功です。（完了メッセージも表示されません）

確認して問題なければ、設定内容のシンタックスチェックを行い mackerel-agent を再起動します。

```shell
mackerel-agent configtest
sudo systemctl restart mackerel-agent
```

コマンド実行後、`[ OK ]`と表示されていれば起動成功です。

## プラグインを手動で実行してみる

以下のコマンドにより実行してみて、どのような結果が得られるか確認してみましょう。

```shell
check-procs --pattern httpd
```

以下のような結果が表示されればプラグインが正常に実行され、結果の1行目に`Procs OK`とある様にプロセスが正常に稼働している事が確認できます。

```shell
Procs OK:
Found 6 matching processes; cmd /httpd/
```

また設定を反映したホストの詳細画面にある Monitors にチェック監視とその結果が反映されているか確認してみましょう。

TODO: スクショ貼る

## 監視対象プロセスを停止してみる

監視しているhttpdプロセスを停止してアラートの発報を確認してみましょう。

```shell
sudo systemctl stop httpd
```

アラートが発報される前に手動でプラグインを実行して監視結果がどの様に変化するか確認してみます。

```shell
check-procs --pattern httpd
```

以下のように`Procs CRITICAL`と1行目が`OK`から`CRITICAL`に変わっていることが確認できます。

```shell
Procs CRITICAL:
Found 0 matching processes; cmd /httpd/
```

発報されたアラートを[Alerts](https://mackerel.io/my/alerts)で確認して、障害を復旧させてみましょう。

```shell
sudo systemctl start httpd
```

httpdプロセスを起動して数分するとアラートが自動的にクローズされることを確認します。

## 障害を自動復旧させる

チェック監視では監視を行った結果に応じて任意のコマンドを実行する`action`オプションが用意されています。

ハンズオンではhttpdプロセスの監視を実践したので、httpdプロセスのダウンを検知したらhttpdプロセスの自動復旧を行うように`action`を定義してみましょう。

先ほどの設定に`action = ...`の行を追加してください。

```toml
action = { command = "bash -c '[ \"$MACKEREL_STATUS\" != \"OK\" ]' && systemctl start httpd" }
```

以下のように設定ができれば完了です。

```toml
[plugin.checks.proc_httpd]
command = ["check-procs", "--pattern", "httpd"]
action = { command = "bash -c '[ \"$MACKEREL_STATUS\" != \"OK\" ]' && systemctl start httpd" }
```

`action`オプションを指定すると監視が行われる度に`action`に指定された`command`が実行されます。
その際、監視の実行結果が環境変数`$MACKEREL_STATUS`に代入されるので、`OK`以外だった場合にhttpdを起動するコマンドを実行して自動復旧させるといった仕組みになります。

それでは、httpdプロセスを停止してアラートの発報から自動復旧がされるか確認してみましょう。

```shell
sudo systemctl stop httpd
```
