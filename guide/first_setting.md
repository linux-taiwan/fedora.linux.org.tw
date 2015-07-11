---
layout: page
title: 入門 - 初次登入設定
permalink: /guide/step-4/
---

## 初次登入設定

![firstlogin](http://1.bp.blogspot.com/-aqlhUOtxnK4/UsPnqImnSPI/AAAAAAAADBE/FXs6wXfT_98/s1600/fedora20-firstlogin.png)


重新開機後進入登入畫面就會看到剛剛設定好的帳號全名，就點按它。


![firstlogin-passwd](http://3.bp.blogspot.com/-iEBZNRdVAUQ/UsPnpxNAhMI/AAAAAAAADBA/qNIrw-SBB7E/s1600/fedora20-firstlogin-passwd.png)


輸入先前設定的密碼，再點按「登入」。


![gnomesetup1](http://1.bp.blogspot.com/-CQfUPSn9dQg/UsPntwEgOuI/AAAAAAAADCI/yshVyWDJrhs/s1600/fedora20-gnomesetup1.png)


初次登入時，Gnome 會帶你走過初始設定，首先選取界面語言。由於安裝時我們採用中文介面安裝，因此 fedora 會先幫我們選好漢語 (臺灣) 這個語言，只要往下拉動捲軸就能看到。


![gnomesetup2](http://3.bp.blogspot.com/-td_oJCizmt0/UsPnuasz5GI/AAAAAAAADCM/pFOvGc9QS30/s1600/fedora20-gnomesetup2.png)


確認勾選的是「漢語 (臺灣)」無誤後，點按「下一步」。


![gnomesetup3](http://2.bp.blogspot.com/-3Pyj4LOjhlU/UsPnusllNLI/AAAAAAAADCQ/9I8ossggkb4/s1600/fedora20-gnomesetup3.png)


Fedora 目前對漢語 (臺灣) 的預設輸入方式為「漢語」鍵盤，以及「漢語 (Chewing)」輸入法。前者的漢語鍵盤其實鍵盤配置與英語 (美式) 無異，但實際上臺灣沒有人在用漢語鍵盤，都是直接用英語 (美式) 鍵盤配置的，各大作業系統的輸入鍵盤也都是預設英語 (美式) 的鍵盤配置。為了讓使用更符合在地需求，建議移除漢語鍵盤，改加入英語 (美式) 鍵盤。



漢語 (Chewing) 輸入法是新酷音輸入法，一種利用注音作輸入來源的智慧選詞漢語輸入法。如果輸入整個句子時，新酷音輸入法的詞語斷錯位置而造成選詞錯誤的話，可以按下 Tab 鍵更改斷詞位置方便修改。此外，它還可以輕鬆輸入各種標點符號，例如用 Shift+< 就能輸入全形逗號，用 Shift+> 能輸入全形句號等，~ 鍵則可以叫出特殊符號選單，方便使用者選用。



Fedora 的作業環境中，輸入法間的切換快捷鍵為 Super+空白鍵；按住 Super 鍵不放，再連續按 空白鍵 可以持續往後切換輸入法，這在設定多輸入法後很有用。所謂的 Super 鍵又稱為 Meta 鍵，就是一般鍵盤上印有微軟視窗圖案的特殊按鍵。


![gnomesetup-4](http://2.bp.blogspot.com/-7mZQXXXVYh0/UsPnrYo7wEI/AAAAAAAADBY/hCbrdi6s9NM/s1600/fedora20-gnomesetup-4.png)


點按「漢語」後，按下「-」按鈕移除鍵盤配置。接著按下「+」鈕新增鍵盤輸入來源。


![gnomesetup-5](http://4.bp.blogspot.com/-4Y6Si0-BpJM/UsPnrgBoIqI/AAAAAAAADBc/b5hlUz0cLK0/s1600/fedora20-gnomesetup-5.png)


先點選「英語 (美國) 」。


![gnomesetup-6](http://2.bp.blogspot.com/-Fnjn3eJhFLQ/UsPnr6A6gAI/AAAAAAAADBg/kCFK1Il5VVk/s1600/fedora20-gnomesetup-6.png)


再選取「英語 (美式)」鍵盤配置將它「加入」。


![gnomesetup-7](http://1.bp.blogspot.com/-mBxdQ0Bgnjo/UsPnsQryw_I/AAAAAAAADBw/LBsd2crXClk/s1600/fedora20-gnomesetup-7.png)


接著點按「下一步」。



Fedora 對漢語 (臺灣) 的預設輸入法僅提供 Chewing 新酷音輸入法，至於倉頡、無蝦米等需要另行設定。



倉頡由於原作者拋棄著作權使其進入公眾領域供眾人自由利用，香港有一群熱心的朋友開發了 ibus-cangjie 倉頡輸入法任人使用。你可以透過 Gnome 桌面環境中所附帶的「軟體」程式安裝之，啟動「軟體」後，從 [附加元件] > [輸入來源] 裡找到 Canjie 輸入法並安裝，重新登入就能透過 [地區和語言] 設定倉頡輸入法的使用，目前支援倉頡第三代、第五代，以及速成輸入法。



無蝦米雖然拆字規則的專利已經過期，但行易有限公司提供的輸入字根與漢字對照表其著作權仍為該公司所有，仍需要向該公司購買才能使用。網路上雖有許多網友自行整理的輸入法表格，但著作權情況不明。因此若想使用無蝦米輸入法，請自行查詢相關資料設定。


![gnomsetup-network](http://3.bp.blogspot.com/-D9JVJKS1IY8/UsP600m9uzI/AAAAAAAADFg/S7YFraJTwf0/s1600/fedora20-gnomsetup-network.png)


如果系統偵測到無線網路等，會提醒你設定。


![gnomesetup-online-account](http://2.bp.blogspot.com/-GiUK5vUj4Hs/UsP69wz030I/AAAAAAAADFo/rL8RzMp5uEw/s1600/fedora20-gnomesetup-onlineaccount.png)


再來會詢問你是否要讓系統與你的線上帳號連結，請依個人偏好設定即可。


![gnomesetup-9](http://3.bp.blogspot.com/-zyqnKIudrk4/UsP7JvthbbI/AAAAAAAADFw/cuWxnpZCyNs/s1600/fedora20-gnomesetup-9.png)


初次設定完成，你可以開始使用 Fedora 了！


![gnomesetup-10](http://4.bp.blogspot.com/-tQpx7BOdLvo/UsP7UI-dVAI/AAAAAAAADF4/PLiPIb6ClfA/s1600/fedora20-gnomesetup-10.png)

接著會跳出 Gnome 的求助中心，裡面放有一些上手影片與文件說明，如果還不清楚 Gnome 桌面該如何操作，可以瀏覽看看。
