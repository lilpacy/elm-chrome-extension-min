require('../css/style.css');
const {Elm} = require('../src/Main.elm');

const g = document.createElement('div');
g.id = "elm-ex-node";
document.body.appendChild(g);

if (chrome && chrome.runtime && chrome.runtime.onMessage) {  // 3つ全てがdefinedだった場合のみ
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // let selection;
        // console.log(request.message); // -> 選択範囲ちょうだい が出力される

        // // 画面で選択されている部分を文字列で取得する
        // if(window.getSelection){
        //     selection = window.getSelection().toString();
        // }else{
        //     selection = '';
        // }
        console.log(request.message);
        var app = Elm.Main.init({
            node: document.getElementById('elm-ex-node')
        });
        sendResponse("Success!");
    });
} else {
    var app = Elm.Main.init({
        node: document.getElementById('elm-ex-node')
    });
}

