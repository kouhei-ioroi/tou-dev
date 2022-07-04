// ==UserScript==
// @name         TOU-Skipper
// @namespace    https://www.ioroi.org
// @version      1.3
// @description  レポートらくらくツール
// @author       Kouhei Ioroi
// @match        https://room.internet.ac.jp/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=internet.ac.jp
// @grant        none
// ==/UserScript==
const hacklogo = "data:image/png;base64,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bG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NGYyYjNhMTEtNjEyNS00ZTI0LTlhNjEtZDg3MDdmMzkzNzA4IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhiYzc1OWZjLTRkOWYtNDEwZi1hOTk3LWIxYmJkNWZkM2IxNCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4NDQ5ZDkwLTQyMWUtNDkwYS1hZjkxLTYxZTFlNjNlMWFmMCIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjUwMDc2NDQwNTgyODA1IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzAiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mjk1YjU3NDUtMDRjOS00NzA2LWE1NTgtMTY4NWJhZGY5MjE1IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA0LTE2VDExOjM0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvkMnjAAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfmBBACIgANZjEuAAAPNUlEQVR42u1dTYssSRU9WfTGj03JjDjqiNRzKW7qIYLgxi4Cf0D37GQW0r0S0U0X+AOscjWKs+hSUFzJtDsVTasQEYQRX4G49hWKI4MyWBvFjZgu+ua86HiRmREZEZkRUfdA0dWVmZE3I+KeOHHjIwt4gBBiS1/3ZVkuMRCk+6Isy4WnNOdlWe4xEoQQVwAuAOwBbMqyPAghzl3SLMtyF2NeS2lfAJiVZbnWHJtRfpy33VcI8Qbl2V1ZlgcwosaZp3TOR7L/3LMDrADcCCGuy7LcaI7NHZK/U9NswJye6xzAHf22dXy0ItYyFkI8qfNVCHGU80gIMQXwBMC0JmVdHhJx1Z+VEOIRk0+CxCOEuOmZ3szi2qPGua/qStajAtvYrLv3OYA6jVshBJRz5o7Ot7N18DGV14C4kwj9BsBGev6jEGIJ4FZ3XMKFnM9MOukqnlVf4rG4dqepRBcOzr2yJIGN2h2hSl6nsxJC7CXnv1PIYwrgitI5KunXx2QSPRqQ55TyENRtqLHIuA5uiFCm1HA9UDVlWW6oUZnpjktdsRprB1sqT+rQZ3pqGr5tTLqrlQXKslwLIeZUkacAtiTbdQppS+dcALiu4yiknG4l0jnS8TsDEx603K6xHUXNeYn1eOxinSsNQf3s50KIg0YV1Wp0rlwrf9/H+rwjkF56xFOWZWFZiSpJ5rq0zsu+XS1LtKmPa6rMU/qs6DdVmRwklbcVQqyV7tiRWt9NWZZHQ7vmihNtPT93TBV720K+Fy3XXdGnKf+2Hc9bGRCASR5WnvO4aFA3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";
var loadcounter = 0;
var updatecounter = 0;
var 回答 = {};
(function() {
    'use strict';
    setTimeout(DB構築,3000);//エラー防止の為ページ読み込み後3秒待ってからDBチェック
    window.addEventListener("hashchange", ページ移動判定, false);//ハッシュ移動先を検知するイベントを設置
    ページ移動判定();
})();
function DB構築(){
    if(localStorage.getItem("授業回答情報")==null){
        localStorage.setItem("授業回答情報",JSON.stringify({}));//DBの新規構築
        toumsg("新規DB構築を行いました");
    }else{
        回答 = JSON.parse(localStorage.getItem("授業回答情報"));//DBを接続
        toumsg("既存DB接続を行いました");
    }
    回答受信();
}

function 再生終了(){
    const 次講 = touq(".active-lecture").closest(".lecture-container").nextElementSibling;
    const 次回 = touq(".active-section").closest(".section-container").nextElementSibling;
    document.querySelector(".active-section").closest(".section-container").nextElementSibling
    if(次講 != null){
        toumsg("次の授業を再生します");
        次講.querySelector("a").click();
    }else if(次回.querySelector("div.lock-overlay") == null){
        toumsg("次の単元を再生します");
        次回.querySelector("p").click();
        setTimeout(()=>{touq(".lecture").click();},1000);
    }else{
        toumsg("次回の単元は選択できません");
        alert("現時点で再生できる最終単元に到達しました。\nトップページに戻ります。");
        location.href = "https://room.internet.ac.jp/#/";
    }
}
function 記述貼り付け(){
    var 入力枠 = touq("#tou-exam-report-textarea");//レポート入力エリア
    if (入力枠 != null){//存在するならば
        入力枠.oncontextmenu = (e)=>{e.stopPropagation();}//入力エリアの右クリックイベントを伝搬させない
        入力枠.onkeydown = (e)=>{e.stopPropagation();}//キーダウンイベントを伝搬させない
        入力枠.onkeyup = (e)=>{e.stopPropagation();}//キーアップイベントを伝搬させない
        入力枠.removeAttribute("onpaste");//貼り付け禁止を解除
        入力枠.setAttribute("placeholder","貼り付け禁止解除！");
    }
}
function 動画開始(){
    const video_tag = touq("video");//映像要素を取得
    if(video_tag != null){//要素が存在するならば
        if(video_tag.id != "faceMonitor"){//要素が顔確認画面でない場合
            toumsg("再生開始")
            video_tag.play();//動画を再生開始
            video_tag.onended = ()=>{setTimeout(再生終了,3000)};//再生終了時に発火する再生終了イベントを設置
            video_tag.ontimeupdate = ()=>{//動画が再生しつづけると
                let 現在時間 = video_tag.currentTime;
                let 動画時間 = video_tag.duration;
                let 進捗率 = Math.trunc((現在時間 / 動画時間) * 100);
                let 残り時間 = Math.trunc(動画時間 - 現在時間);
                let ETA = 0;
                if (残り時間 < 60){//動画の残り長さが100秒未満ならば
                    ETA = "0:"+ ("00" + (Math.trunc(残り時間))).slice(-2);
                }else{
                    ETA = Math.trunc(残り時間 / 60) + ":" + ("00" + (Math.trunc(残り時間 % 60))).slice(-2);
                }
                document.title = "完了率:"+ 進捗率 + "%/ETA:" + ETA;
            }//再生中は再生完了率を更新して表示する
        }
    }else if(touq("#root > div > div > div.spacer > div > div > div > p") != null){
        if(touq("#root > div > div > div.spacer > div > div > div > p").innerText == "カメラを許可してください"){
            setTimeout(()=>{location.reload(true);},3000);
        }
    }
    else{console.log("定義外の動画再生ファンクションエラー")}
}

function 授業処理(){
    const video_tag = touq("video");
    const current_lecture_src = touq("a.active-lecture").querySelector("img").src;
    const current_lecture_id = current_lecture_src.slice(current_lecture_src.lastIndexOf("/")+1);
    switch(current_lecture_id){
        case "digitalText.png"://参考資料等
            toumsg("種類:参考資料等");
            setTimeout(再生終了,5000);
            break;
        case "video.png"://映像授業
            toumsg("種類:映像授業");
            動画開始();
            break;
        case "quiz.png"://レポート
            toumsg("種類:レポート");
            break;
        default:
            toumsg("種類:未定義");
            break;
    }
}

function ページ移動判定(){
    if(touq(".loading-outer").style.display != "none"){//画面が読み込み待ちの場合
        loadcounter = 0;
        setTimeout(()=>{ページ移動判定()},500);
    }else if(loadcounter < 5){//読み込み完了したがロードカウンターが既定値以下の場合
        loadcounter ++;
        setTimeout(()=>{ページ移動判定()},100);
    }
    else{//読み込み完了が確定した場合
        loadcounter = 0;
        if (new RegExp("^#/courses/[0-9]{4}/sections/[0-9]{5}/lectures/[0-9]{6}/materials/[0-9]{6}$").test(location.hash)){//記述式ページ
            記述貼り付け();
        }else if (new RegExp("^#/courses/[0-9]{4}/sections/[0-9]{5}/lectures/[0-9]{6}/materials/[0-9]{4,5}$").test(location.hash)){//小テストページ
            touq("div.indent.mt25").querySelectorAll("input").forEach((x)=>{x.onchange = ()=>{//全てのinput要素に対し、変更された時
                let 処理アレイ = Array();
                switch(touq("input").type){//要素のタイプで変更
                    case "checkbox":
                        touq("div.indent.mt25").querySelectorAll("input").forEach((y)=>{if(y.checked == true){処理アレイ.push(y.value)}});
                        break;
                    case "radio":
                        touq("div.indent.mt25").querySelectorAll("input").forEach((y)=>{if(y.checked == true){処理アレイ.push(y.value)}});
                        break;
                    case "text":
                        touq("div.indent.mt25").querySelectorAll("input").forEach((y)=>{処理アレイ.push(y.value)});
                        break;
                    default:
                        toumsg("ケースが未定義の問題が検出されました。該当の問題はDBに記録されません");
                }
                var 対象ID = location.href.slice(location.href.indexOf("/materials/")+11);
                回答[対象ID]=JSON.stringify(処理アレイ);
                localStorage.setItem("授業回答情報",JSON.stringify(回答));//
                toumsg("ID:"+対象ID+"の次の回答が記録されました。\n"+回答[対象ID]+"");
            }});
            if(localStorage.getItem("授業回答情報") == null){
                回答 = {}
                localStorage.setItem("授業回答情報",JSON.stringify(回答));
            }else{
                回答 = JSON.parse(localStorage.getItem("授業回答情報"));
                var 対象ID = location.href.slice(location.href.indexOf("/materials/")+11)
                if(回答[対象ID] != null){
                    if (JSON.parse(回答[対象ID]).length > 0) {
                        JSON.parse(回答[対象ID]).forEach((keys)=>{
                            touq("div.indent.mt25").querySelectorAll("input").forEach((x)=>{
                                switch(x.type){
                                    case "checkbox":
                                        if(x.value == keys && x.checked == false){
                                            x.click();
                                        };
                                        break;
                                    case "radio":
                                        if(x.value == keys && x.checked == false){
                                            x.click();
                                        };
                                        break;
                                    case "text":
                                        if(x.value.length == 0){
                                            x.value = keys;
                                        }
                                        break;
                                    default:
                                        toumsg("ケースが未定義の問題が検出されました。該当の問題は自動入力ができません。");
                                }
                            })
                        })
                    }
                }
            }
        }else if (new RegExp("^#/courses/[0-9]{4}/sections/[0-9]{5}/lectures/[0-9]{6}(/materials/[0-9]{4-5})|()/quiz/result$").test(location.hash)){//小テスト答え合わせ
            toumsg("小テスト正誤確認...");
            回答 = JSON.parse(localStorage.getItem("授業回答情報"));
            touqa(".quiz-result__marks").forEach((child)=>{
                let 回答フラグ = child.querySelector("i.iconAnswer").className;
                let 回答ID = child.nextElementSibling.querySelector("a").href.slice(child.nextElementSibling.querySelector("a").href.indexOf("materials/")+10).replace("/review","");
                if(回答フラグ.indexOf("goodAnswer") != -1){
                }else if(回答フラグ.indexOf("badAnswer") != -1 && 回答[回答ID] != null){
                    toumsg("該当する回答IDは誤答としてローカルDBから削除されました。\n回答ID:" + 回答ID+"\n回答内容:"+回答[回答ID]);
                    delete 回答[回答ID];
                }
            })
            localStorage.setItem("授業回答情報",JSON.stringify(回答));
            toumsg("正誤確認が完了しました。正答のみを公開DBに送信しています...");
            回答送信();
        }
        else if (new RegExp("^#/courses/[0-9]{4}/sections/[0-9]{5}/lectures/[0-9]{6}$").test(location.hash)){//授業ページ
            ロゴ書き換え(false);
            授業処理();
            進捗率取得();
        }else if (new RegExp("^#/courses/[0-9]{4}$").test(location.hash)){//授業選択ページ
            ロゴ書き換え(false);
            進捗率取得();
            localStorage.setItem("最終授業ID",location.hash.replace("#/courses/","").slice(0,4));
        }else if (new RegExp("^#/$").test(location.hash)){//トップページ
            ロゴ書き換え(true);
            touqa(".course-progress.card").forEach((e)=>{
                try{
                    var 授業名 = e.querySelector("div.course-name").innerText;
                    var 対象ID = e.querySelector("a").href.replace("https://room.internet.ac.jp/#/courses/","");
                    if(対象ID == localStorage.getItem("最終授業ID")){
                        授業名 = "★" + 授業名 + "★";
                    }
                    var 進捗率 = JSON.parse(localStorage.getItem("進捗度"))[対象ID];
                    if (進捗率 != null){
                        e.querySelector("div.course-name").innerText = 授業名 + "\n進捗率:" + 進捗率;
                    }else{
                        e.querySelector("div.course-name").innerText = 授業名 + "\n進捗率:データ無";
                    }
                }catch{e.querySelector("div.course-name").innerText = 授業名 + "\n@ROOMロゴをクリックして進捗率データを作成して下さい。";}
            })
        }
    }
}

function 回答送信(){
    const method = "PUT";
    const body = localStorage.getItem("授業回答情報");
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    fetch("https://tou-skipper-default-rtdb.firebaseio.com/kaitou.json", {method, headers, body})
        .then((res)=> res.json())
        .then(()=>{
        toumsg("回答を公開DBに送信しました");
        localStorage.setItem("前回送信時間",new Date().getTime());
    }).catch((e)=>{
        toumsg("何らかの不具合により、回答の送信処理が失敗しました。内容:"+e);
    });
}
function 回答受信(){
    if(localStorage.getItem("前回取得時間") == null){
        localStorage.setItem("前回取得時間",new Date().getTime()-300001);
        回答受信();
    }else if(Number(localStorage.getItem("前回取得時間")) < new Date().getTime() - 300000){
        const url = "https://tou-skipper-default-rtdb.firebaseio.com/kaitou.json";
        fetch(url)
            .then((response) => {
            return response.json()
        })
            .then((result) => {
            回答処理(result);
        })
            .catch((e) => {
            toumsg("何らかの不具合により、回答の受信処理が失敗しました。内容:"+e);
        })
        function 回答処理(jsonObj){
            let 外部回答 = jsonObj;
            let 内部回答 = JSON.parse(localStorage.getItem("授業回答情報"));
            Object.assign(内部回答,外部回答);
            回答 = 内部回答;
            localStorage.setItem("授業回答情報",JSON.stringify(回答));
            toumsg("回答を公開DBから受信して統合しました");
            localStorage.setItem("前回取得時間",new Date().getTime());
        }
    }else{
        toumsg("受信頻度が高すぎるため、リクエストを中止しました。(5分毎)");
    }
}

function ロゴ書き換え(トップフラグ){
    let ロゴ = touq(".top-logo")
    if (トップフラグ == true){
        ロゴ.href = "javascript:void(0);"
        ロゴ.onclick = 全進捗率更新;
        ロゴ.setAttribute("title","ここを押すと、現在の授業進捗を全て取得・更新します");
    }else{
    }
    ロゴ.querySelector("img").src = hacklogo;
}
function 進捗率取得(){
    touq("li.course-summary").children.item(1).href = "/#/";//ばつ印で授業から抜けてトップに移動するリンクを設置
    touqa("p.professor__sub").forEach((e)=>{
        if(e.innerText.indexOf("受講率：") != -1){
            var 進捗率 = e.innerText.split("：")[1];
            var 対象ID = location.hash.replace("#/courses/","").slice(0,4);
            var 進捗度データ = JSON.parse(localStorage.getItem("進捗度"));
            進捗度データ[対象ID] = 進捗率;
            localStorage.setItem("進捗度",JSON.stringify(進捗度データ));
        }else{
        }
    })
    if(localStorage.getItem("progress_updater") == 1){
        let アップデート進捗 = localStorage.getItem("progress_update_count");
        localStorage.setItem("progress_update_count",Number(アップデート進捗) +1);
        window.close();
    }
}
function 全進捗率更新(){
    if(confirm("全授業の進捗を受信・更新します。よろしいですか？\nこの機能を使用する前に、ポップアップを許可して下さい。\nChromeの場合:URL左🔒アイコンをクリックしてサイトの設定からポップアップとリダイレクトを「許可」に変更して下さい。")){
        localStorage.removeItem("progress_update_count");
        localStorage.removeItem("progress_updater");
        localStorage.removeItem("進捗度");
        localStorage.setItem("進捗度",JSON.stringify({}));
        updatecounter = 0
        touqa(".course-progress.card").forEach((e)=>{
            updatecounter ++
            window.open(e.querySelector("a").href,"_blank","width=100,height=100");
            localStorage.setItem("progress_updater","1");
        })
        進捗率更新待機();
    }
}
function 進捗率更新待機(){
    if(updatecounter != localStorage.getItem("progress_update_count")){
        setTimeout(()=>{進捗率更新待機()},1000);
    }else{
        localStorage.removeItem("progress_update_count");
        localStorage.removeItem("progress_updater");
        location.reload(true);
    }
}
function toumsg(msg){
    console.log("TOU-Skipper:"+ msg);
}
function touq(q){
    return document.querySelector(q);
}
function touqa(q){
    return document.querySelectorAll(q);
}
