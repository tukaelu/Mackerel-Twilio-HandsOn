(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"公式チェックプラグインを導入する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公式チェックプラグインを導入する"}},[t._v("#")]),t._v(" 公式チェックプラグインを導入する")]),t._v(" "),a("p",[t._v("公式チェックプラグインをインストールしてサーバーの状態を監視してみましょう。")]),t._v(" "),a("h2",{attrs:{id:"公式プラグインをインストールする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公式プラグインをインストールする"}},[t._v("#")]),t._v(" 公式プラグインをインストールする")]),t._v(" "),a("p",[t._v("監視対象サーバーで以下のコマンドを実行し、公式チェックプラグインをインストールします。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mackerel-check-plugins\n")])])]),a("p",[t._v("完了したら、インストールされたプラグインを見てましょう。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /usr/bin/check-*\n")])])]),a("p",[t._v("30近いプラグインがインストールされていることを確認していただけるかと思います！")]),t._v(" "),a("p",[t._v("チェックプラグインもGitHubリポジトリにてソースコードを公開しています。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mackerelio/go-check-plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mackerelio/go-check-plugins/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("それではプロセス監視を行う"),a("code",[t._v("check-procs")]),t._v("をセットアップしてみましょう。")]),t._v(" "),a("h2",{attrs:{id:"プロセス監視をしてみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プロセス監視をしてみる"}},[t._v("#")]),t._v(" プロセス監視をしてみる")]),t._v(" "),a("p",[t._v("インストールされたプラグインのうち check-procs プラグインでプロセス監視をしてみます。")]),t._v(" "),a("p",[t._v("現時点でホスト上ではシステムを構成する役割となるようなプログラムが動いていないため、httpd (Apache) をインストールしてWebサーバーとしてプロセス監視を設定してみます。")]),t._v(" "),a("p",[t._v("以下のコマンドでhttpdをインストールして特に設定などはせずにそのまま起動します。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start httpd\n")])])]),a("p",[t._v("念のため"),a("code",[t._v("ps")]),t._v("コマンドでhttpdプロセスが実行されていることを確認してください。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" httpd\n")])])]),a("p",[t._v("mackerel-agentの設定ファイル "),a("code",[t._v("/etc/mackerel-agent/mackerel-agent.conf")]),t._v(" をviなどで開いて以下の2行を追記します。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("plugin.checks.proc_httpd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"check-procs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--pattern"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("以下のコマンドをターミナルで実行することでも追記できます。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('SCRIPT\ncat >>/etc/mackerel-agent/mackerel-agent.conf <<\'EOF\';\n[plugin.checks.proc_httpd]\ncommand = ["check-procs", "--pattern", "httpd"]\nEOF\nSCRIPT')]),t._v("\n")])])]),a("p",[t._v("特にエラーなどが発生せず、再びコマンドが入力できる状態になっていれば成功です。（完了メッセージも表示されません）")]),t._v(" "),a("p",[t._v("確認して問題なければ、設定内容のシンタックスチェックを行い mackerel-agent を再起動します。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mackerel-agent configtest\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart mackerel-agent\n")])])]),a("p",[t._v("コマンド実行後、"),a("code",[t._v("[ OK ]")]),t._v("と表示されていれば起動成功です。")]),t._v(" "),a("h2",{attrs:{id:"プラグインを手動で実行してみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プラグインを手動で実行してみる"}},[t._v("#")]),t._v(" プラグインを手動で実行してみる")]),t._v(" "),a("p",[t._v("以下のコマンドにより実行してみて、どのような結果が得られるか確認してみましょう。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("check-procs --pattern httpd\n")])])]),a("p",[t._v("以下のような結果が表示されればプラグインが正常に実行され、結果の1行目に"),a("code",[t._v("Procs OK")]),t._v("とある様にプロセスが正常に稼働している事が確認できます。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Procs OK:\nFound "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" matching processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" cmd /httpd/\n")])])]),a("p",[t._v("また設定を反映したホストの詳細画面にある Monitors にチェック監視とその結果が反映されているか確認してみましょう。")]),t._v(" "),a("p",[t._v("TODO: スクショ貼る")]),t._v(" "),a("h2",{attrs:{id:"監視対象プロセスを停止してみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#監視対象プロセスを停止してみる"}},[t._v("#")]),t._v(" 監視対象プロセスを停止してみる")]),t._v(" "),a("p",[t._v("監視しているhttpdプロセスを停止してアラートの発報を確認してみましょう。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop httpd\n")])])]),a("p",[t._v("アラートが発報される前に手動でプラグインを実行して監視結果がどの様に変化するか確認してみます。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("check-procs --pattern httpd\n")])])]),a("p",[t._v("以下のように"),a("code",[t._v("Procs CRITICAL")]),t._v("と1行目が"),a("code",[t._v("OK")]),t._v("から"),a("code",[t._v("CRITICAL")]),t._v("に変わっていることが確認できます。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Procs CRITICAL:\nFound "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" matching processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" cmd /httpd/\n")])])]),a("p",[t._v("発報されたアラートを"),a("a",{attrs:{href:"https://mackerel.io/my/alerts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alerts"),a("OutboundLink")],1),t._v("で確認して、障害を復旧させてみましょう。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start httpd\n")])])]),a("p",[t._v("httpdプロセスを起動して数分するとアラートが自動的にクローズされることを確認します。")]),t._v(" "),a("h2",{attrs:{id:"障害を自動復旧させる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#障害を自動復旧させる"}},[t._v("#")]),t._v(" 障害を自動復旧させる")]),t._v(" "),a("p",[t._v("チェック監視では監視を行った結果に応じて任意のコマンドを実行する"),a("code",[t._v("action")]),t._v("オプションが用意されています。")]),t._v(" "),a("p",[t._v("ハンズオンではhttpdプロセスの監視を実践したので、httpdプロセスのダウンを検知したらhttpdプロセスの自動復旧を行うように"),a("code",[t._v("action")]),t._v("を定義してみましょう。")]),t._v(" "),a("p",[t._v("先ほどの設定に"),a("code",[t._v("action = ...")]),t._v("の行を追加してください。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash -c \'[ \\"$MACKEREL_STATUS\\" != \\"OK\\" ]\' && systemctl start httpd"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以下のように設定ができれば完了です。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("plugin.checks.proc_httpd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"check-procs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--pattern"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("action")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash -c \'[ \\"$MACKEREL_STATUS\\" != \\"OK\\" ]\' && systemctl start httpd"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("action")]),t._v("オプションを指定すると監視が行われる度に"),a("code",[t._v("action")]),t._v("に指定された"),a("code",[t._v("command")]),t._v("が実行されます。\nその際、監視の実行結果が環境変数"),a("code",[t._v("$MACKEREL_STATUS")]),t._v("に代入されるので、"),a("code",[t._v("OK")]),t._v("以外だった場合にhttpdを起動するコマンドを実行して自動復旧させるといった仕組みになります。")]),t._v(" "),a("p",[t._v("それでは、httpdプロセスを停止してアラートの発報から自動復旧がされるか確認してみましょう。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop httpd\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);