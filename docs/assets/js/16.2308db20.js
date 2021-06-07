(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{370:function(s,t,a){s.exports=a.p+"assets/img/host_monitors.68795670.png"},400:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"公式チェックプラグインを導入する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公式チェックプラグインを導入する"}},[s._v("#")]),s._v(" 公式チェックプラグインを導入する")]),s._v(" "),e("p",[s._v("公式チェックプラグインをインストールしてサーバーの状態を監視してみましょう。")]),s._v(" "),e("h2",{attrs:{id:"公式プラグインをインストールする"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公式プラグインをインストールする"}},[s._v("#")]),s._v(" 公式プラグインをインストールする")]),s._v(" "),e("p",[s._v("監視対象サーバーで以下のコマンドを実行し、公式チェックプラグインをインストールします。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mackerel-check-plugins\n")])])]),e("p",[s._v("完了したら、インストールされたプラグインを見てましょう。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /usr/bin/check-*\n")])])]),e("p",[s._v("30近いプラグインがインストールされていることを確認していただけるかと思います！")]),s._v(" "),e("p",[s._v("チェックプラグインもGitHubリポジトリにてソースコードを公開しています。")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/mackerelio/go-check-plugins/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/mackerelio/go-check-plugins/"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("それではプロセス監視を行う"),e("code",[s._v("check-procs")]),s._v("をセットアップしてみましょう。")]),s._v(" "),e("h2",{attrs:{id:"プロセス監視をしてみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#プロセス監視をしてみる"}},[s._v("#")]),s._v(" プロセス監視をしてみる")]),s._v(" "),e("p",[s._v("インストールされたプラグインのうち check-procs プラグインでプロセス監視をしてみます。")]),s._v(" "),e("p",[s._v("現時点でホスト上ではシステムを構成する役割となるようなプログラムが動いていないため、httpd (Apache) をインストールしてWebサーバーとしてプロセス監視を設定してみます。")]),s._v(" "),e("p",[s._v("以下のコマンドでhttpdをインストールして特に設定などはせずにそのまま起動します。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start httpd\n")])])]),e("p",[s._v("念のため"),e("code",[s._v("ps")]),s._v("コマンドでhttpdプロセスが実行されていることを確認してください。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" httpd\n")])])]),e("p",[s._v("mackerel-agentの設定ファイル "),e("code",[s._v("/etc/mackerel-agent/mackerel-agent.conf")]),s._v(" をviなどで開いて以下の2行を追記します。")]),s._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.checks.proc_httpd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[s._v("command")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"check-procs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pattern"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("p",[s._v("以下のコマンドをターミナルで実行することでも追記できます。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('SCRIPT\ncat >>/etc/mackerel-agent/mackerel-agent.conf <<\'EOF\';\n[plugin.checks.proc_httpd]\ncommand = ["check-procs", "--pattern", "httpd"]\n\nEOF\nSCRIPT')]),s._v("\n")])])]),e("p",[s._v("特にエラーなどが発生せず、再びコマンドが入力できる状態になっていれば成功です。（完了メッセージも表示されません）")]),s._v(" "),e("p",[s._v("確認して問題なければ、設定内容のシンタックスチェックを行い mackerel-agent を再起動します。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mackerel-agent configtest\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart mackerel-agent\n")])])]),e("p",[s._v("コマンド実行後、"),e("code",[s._v("[ OK ]")]),s._v("と表示されていれば起動成功です。")]),s._v(" "),e("h2",{attrs:{id:"プラグインを手動で実行してみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#プラグインを手動で実行してみる"}},[s._v("#")]),s._v(" プラグインを手動で実行してみる")]),s._v(" "),e("p",[s._v("以下のコマンドにより実行してみて、どのような結果が得られるか確認してみましょう。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("check-procs --pattern httpd\n")])])]),e("p",[s._v("以下のような結果が表示されればプラグインが正常に実行され、結果の1行目に"),e("code",[s._v("Procs OK")]),s._v("とある様にプロセスが正常に稼働している事が確認できます。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Procs OK:\nFound "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" matching processes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cmd /httpd/\n")])])]),e("p",[s._v("また設定を反映したホストの詳細画面の上部／下部にある Monitors にチェック監視とその結果が反映されているか確認してみましょう。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(370),alt:""}})]),s._v(" "),e("p",[s._v("Monitors に"),e("code",[s._v("proc_httpd")]),s._v("が追加されていることが確認できます。（スクリーンショットは画面下部）")]),s._v(" "),e("h2",{attrs:{id:"監視対象プロセスを停止してみる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#監視対象プロセスを停止してみる"}},[s._v("#")]),s._v(" 監視対象プロセスを停止してみる")]),s._v(" "),e("p",[s._v("監視しているhttpdプロセスを停止してアラートの発報を確認してみましょう。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop httpd\n")])])]),e("p",[s._v("アラートが発報される前に手動でプラグインを実行して監視結果がどの様に変化するか確認してみます。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("check-procs --pattern httpd\n")])])]),e("p",[s._v("以下のように"),e("code",[s._v("Procs CRITICAL")]),s._v("と1行目が"),e("code",[s._v("OK")]),s._v("から"),e("code",[s._v("CRITICAL")]),s._v("に変わっていることが確認できます。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Procs CRITICAL:\nFound "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" matching processes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" cmd /httpd/\n")])])]),e("p",[s._v("発報されたアラートを"),e("a",{attrs:{href:"https://mackerel.io/my/alerts",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alerts"),e("OutboundLink")],1),s._v("で確認して、障害を復旧させてみましょう。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start httpd\n")])])]),e("p",[s._v("httpdプロセスを起動して数分するとアラートが自動的にクローズされることを確認します。")])])}),[],!1,null,null,null);t.default=n.exports}}]);