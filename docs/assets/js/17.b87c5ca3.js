(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{388:function(t,a,s){t.exports=s.p+"assets/img/twiml_bin.74bef0c9.png"},410:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"twimlエンドポイントを利用する"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#twimlエンドポイントを利用する"}},[t._v("#")]),t._v(" TwiMLエンドポイントを利用する")]),t._v(" "),n("p",[t._v("さきほどは静的な文言を通知に利用しました。このセクションでは"),n("code",[t._v("TwiML")]),t._v("エンドポイントを利用し動的なメッセージを構築できます。")]),t._v(" "),n("h2",{attrs:{id:"twimlとは"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#twimlとは"}},[t._v("#")]),t._v(" TwiMLとは？")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TwiML"),n("OutboundLink")],1),t._v("は"),n("code",[t._v("Twilio Markup Language")]),t._v("の略でありTwilioが提供する音声、メッセージAPIで利用できるマークアップ言語です。")]),t._v(" "),n("p",[t._v("例えば「障害が発生しました」というメッセージを再生したい場合は"),n("a",{attrs:{href:"https://jp.twilio.com/docs/voice/twiml/say",target:"_blank",rel:"noopener noreferrer"}},[t._v("Say"),n("OutboundLink")],1),t._v("句を使って次のように表現できます。")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Say")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ja-JP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("障害が発生しました"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("また、リクエストにパラメータが渡されている場合は"),n("a",{attrs:{href:"https://support.twilio.com/hc/en-us/articles/230878368-How-to-use-templates-with-TwiML-Bins",target:"_blank",rel:"noopener noreferrer"}},[t._v("テンプレート"),n("OutboundLink")],1),t._v("を利用し、動的なメッセージを作成できます。")]),t._v(" "),n("h2",{attrs:{id:"twiml-binsを用いてエンドポイントを代用する"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#twiml-binsを用いてエンドポイントを代用する"}},[t._v("#")]),t._v(" TwiML Binsを用いてエンドポイントを代用する")]),t._v(" "),n("p",[t._v("TwiMLエンドポイントは自社で提供するWebアプリケーションのURL、またはAWSなどのクラウドサービスにホスティングされたエンドポイントなどを指定できます。複雑でないメッセージを通知する場合はTwilioが提供するTwiML専用エンドポイントである"),n("code",[t._v("TwiML Bins")]),t._v("を利用できます。")]),t._v(" "),n("h2",{attrs:{id:"twiml-binを作成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#twiml-binを作成"}},[t._v("#")]),t._v(" TwiML Binを作成")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://jp.twilio.com/console/twiml-bins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twilioコンソール - TwiML Bins"),n("OutboundLink")],1),t._v("を開き、"),n("code",[t._v("Create new TwiML Bin")]),t._v("ボタンをクリックします。")]),t._v(" "),n("p",[n("code",[t._v("FRIENDLY NAME")]),t._v("フィールドにはわかりやすい名前を入れ、"),n("code",[t._v("TWIML")]),t._v("フィールドには以下を追加します。")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Say")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ja-JP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    アラートID: {{alertId}} が発生しました。至急ダッシュボードを確認してください。\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Pause")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Say")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loop")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ja-JP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    くりかえします。アラートID: {{alertId}} が発生しました。至急ダッシュボードを確認してください。\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("ここまでの入力例は下記のスクリーンショットのようになります。"),n("code",[t._v("TWIML")]),t._v("フィールド下部に"),n("code",[t._v("Valid Voice TwiML")]),t._v("と表示されていることを確認してください。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(388),alt:"TwiML Bin"}})]),t._v(" "),n("p",[t._v("このTwiMLはMackerel側から渡される"),n("code",[t._v("alertId")]),t._v("の値を通知先に伝えています。このidは"),n("a",{attrs:{href:"https://mackerel.io/ja/api-docs/entry/alerts",target:"_blank",rel:"noopener noreferrer"}},[t._v("アラート API"),n("OutboundLink")],1),t._v("で利用できるため、TwiMLエンドポイントを独自のWebエンドポイント、またはTwilio FunctionsやAWS LambdaなどのFaaSで構築し、さらに複雑な情報を通知できます。")]),t._v(" "),n("h2",{attrs:{id:"障害を起こして通知の確認をする"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#障害を起こして通知の確認をする"}},[t._v("#")]),t._v(" 障害を起こして通知の確認をする")]),t._v(" "),n("p",[t._v("それでは障害を起こして通知を確認してみましょう。")]),t._v(" "),n("p",[t._v("サーバー上でhttpdプロセスを停止してアラートが発報されることを確認しましょう。")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop httpd\n")])])]),n("p",[t._v("指定した電話番号宛に架電され、指定したTwiMLによる通知が行われたでしょうか？")]),t._v(" "),n("p",[t._v("Twilioとの連携はいかがでしたでしょうか？とても簡単に連携ができることを体験いただけたかと思います！")]),t._v(" "),n("p",[t._v("ぜひ、本番環境などを監視される際はTwilioとの連携も併せてお試しください！")])])}),[],!1,null,null,null);a.default=e.exports}}]);