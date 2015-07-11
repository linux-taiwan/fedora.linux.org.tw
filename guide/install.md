---
layout: page
title: 入門 - 安裝到硬碟
permalink: /guide/step-3/
---

## 安裝到硬碟

![install-language](http://2.bp.blogspot.com/-VtRS34yNHko/UsPnw9fEckI/AAAAAAAADDM/Jw9PV-YxpRI/s1600/fedora20-install-language.png)


系統偵測到你現在使用的語言是漢語 (臺灣)，因此會自動幫你選擇「繁體中文 (台灣)」介面，就直接按下「繼續」到下個步驟。


![install-diskselect](http://3.bp.blogspot.com/-xcTEhM9cKRg/UsPnwarYzzI/AAAAAAAADC8/MhsLrUifjdw/s1600/fedora20-install-diskselect.png)


在安裝之前，我們要先設定「安裝目的地」才行，雖然系統已自動幫我們選取「自動磁碟分割」但也得經過確認才行，這樣才能滿足想要手動磁碟分割或是採用其他配置方式的需求。請按下「安裝目的地」進入相關設定的子畫面。



至於網路組態，本指引安裝時是採用虛擬機環境，有自動設好 eth0 的有線網路，所以無須再設定。對於一般人而言，網路設定其實無關緊要，它只是提供一些軟體更新的手段，例如更新這個安裝程式、某些內含軟體之類，但其實沒有特別需求的話，我們也不必在安裝階段開啟網路處理。值得注意的是，如果你這時設定的是「Wifi 無線網路」，安裝程式會自動將基地臺名稱與密碼記憶下來，安裝完後就能直接使用。因此網路組態是否要設定，端看個人需求處理即可。


![install-diskselect2](http://2.bp.blogspot.com/-BwH-RhWUg0U/UsPnwue2HfI/AAAAAAAADCw/hGgmH7UIz8k/s1600/fedora20-install-diskselect2.png)




請看到「本機標準磁碟」這個區塊，查看是否有列出你的磁碟，並確認它有打勾。磁碟確認無誤後，再按下「完成」。



如果你需要安裝到特殊磁碟或網路磁碟，請自行根據需求設定。


![install-diskselect-auto](http://1.bp.blogspot.com/-brpTQv-raLg/UsPnvdmzzaI/AAAAAAAADC4/tqDtXicb_kM/s1600/fedora20-install-diskselect-auto.png)


確認安裝用磁碟後，安裝程式會詢問你要怎麼處理現有的可用空間。



由於本指引安裝時採用虛擬機環境，因此磁碟空白尚未設定，安裝程式可自動處理磁碟分割，無須煩惱其他細節，我們這裡直接按下「繼續」回到安裝摘要的主畫面。



如果你的硬碟先前已經安裝好其他作業系統，例如 Windows，可能會面臨磁碟空間不足的問題，此時安裝程式會協助你取回空間。為了避免取回空間的動作不小心消除現有的資料，或誤刪重要分割區，因此建議在進入 fedora 安裝程式之前，最好已先備份過重要資料，並以其他磁碟分割程式挪出 20GB 以上的空白空間供 fedora 安裝時設定。註：Windows 下有免費的 EaseUS Parted Master 個人版可以調整磁碟分割大小。



如果你的硬碟先前已安裝過其他 Linux，而這次的 fedora 安裝你想要將它覆蓋在舊 Linux 分割區上，安裝程式也可以直接重複使用既有的分割區，你只要設定掛載點，並指明是否要重新格式化即可。


![install-ready](http://4.bp.blogspot.com/-9jF7a3gmBm8/UsPnxC5acDI/AAAAAAAADDY/ZmOvUo7p4O8/s1600/fedora20-install-ready.png)


點按「開始安裝」按鈕開始安裝 fedora。


![install-rootpasswd](http://2.bp.blogspot.com/-OJNxT-cfu5E/UsPnxprY-ZI/AAAAAAAADDc/x2WSpybUcnQ/s1600/fedora20-install-rootpasswd.png)


安裝程式要求設定 root 密碼，以及建立使用者。我們先來設定 root 密碼。



root 帳號是 Linux 系統中權力最大的帳號，又稱為超級使用者 (super user) 帳號，具有「特權」，用來管裡系統。一旦此帳號的密碼落入他人 (例如電腦怪客) 手中，你的系統安全性將蕩然無存，他人可以恣意處理你的電腦資料、行使各種功能等。因此請為 root 帳號選定難以破解的「強固」等級密碼，並不要輕易透露給他人知曉。此外，時時更換密碼可以更加確保重要電腦的安全性。



秘訣：

- 不要使用容易被人猜測得知的資訊，或是許多人都明確知道，或稍微注意就能知道的資訊作為密碼，例如生日、手機號碼、車號... 等。
- 不要使用鍵盤上相連的一連串按鍵，如 asdfg。
- 不要使用字典中可以查到的單字，以免怪客利用字典檔暴力破解；若要使用一些單字，需要經過處理，例如先簡化如省去母音並配合大小寫變化，接著從中間任意處斷開插入英數或特殊符號，而斷開處最好不會使前後字具有意義 (也就是字典查不到的字)。接著前後可以再加入英數與特殊符號，或是再次從其他位置斷開再插入數字或特殊符號。以 December 為例，可以先變化大小寫成 deCembEr，移去部份母音成 dCmbEr，再從中間任意處斷開加入英數或特殊符號，如 2!a3，變成 dC2!a3mbEr，然後前面再加入英數或特殊符號如 ?Z50 而成 ?Z50dC2!3mbEr。
- 只要重複使用非單字、大小寫變化、插入數字或特殊符號等技巧，把每次處理後得到的字串接續起來，或是再次從中間斷開加入另一個處理過的單字密碼，就能連成一道只有自己才可能知道的長密碼，創造出他人難以破解的密碼。
- 英文字被破解的難度比數字高，因此別讓密碼的組成元素幾乎都是數字，多用英文字可提高強度。
- 但請務必記得密碼，如果怕忘記，可以抄寫並存放在只有自己知曉的地方，但最好是自己記住以免存放的密碼被翻找出來而被破解。
- 越獨特的密碼越難記，因此如何在容易記憶與強度高之間取得平衡，是每個人設定密碼時所要面對的取捨議題。


![install-rootpasswd2](http://4.bp.blogspot.com/-OeQgLTTvaD4/UsPnxwX_MNI/AAAAAAAADDk/mWKrc1A0MRc/s1600/fedora20-install-rootpasswd2.png)


設定好後，點按「完成」。



再來設定往後使用 fedora 時要登入的一般使用者帳號，請點按「用戶建立」。


![install-usercreation2](http://3.bp.blogspot.com/-3AKoTkapASg/UsPnyQY3_TI/AAAAAAAADD0/uQdlT9C98Nk/s1600/fedora20-install-usercreation2.png)


全名部份可以隨意打，由於我們剛剛在地區和語言設定中沒有設定中文輸入法，因此這裡僅能輸入英文。但安裝完成後，使用者的全名可在右上角的整合式選單 > 工具圖示按鈕 > 系統 > 使用者 中更改，因此別太擔心只能使用英文的困境。

使用者名稱因系統安全性因素，不接受輸入中文與許多特殊字元，只支援英文數字，以及「.」、「-」、「\_」符號命名使用者名稱。


![install-usercreation3](http://3.bp.blogspot.com/-eNBbmrIIlrw/UsPnyjbqRdI/AAAAAAAADD4/sUClGtKSzug/s1600/fedora20-install-usercreation3.png)


如果希望以此帳號執行系統管理作業，請勾選「讓這位使用者成為管理員」，則該使用者可用「sudo」前綴指令執行需要 root 特權的指令。如果以這位使用者執行到需要管理員權限的動作，系統也會直接詢問這位具管理權的使用者的密碼，確認身份無誤後再執行相關動作。如果沒有設定此選項，一般情況下，系統管理相關動作則會詢問 root 密碼以使用 root 身份執行。



安全性提醒：一旦該位使用者具有管理員權限後，即具有系統至高無上的權力，因此密碼也請謹慎挑選與保管，別讓有心之士有機可稱。時時更換密碼則可以更加保障重要電腦的安全性。


![install-usercreation4](http://4.bp.blogspot.com/-lzvOEDMXhBU/UsPnzIKJQdI/AAAAAAAADEA/qenEpes2ojo/s1600/fedora20-install-usercreation4.png)


連密碼也設定好後，按下「完成」。



註：此範例中密碼強度只有一般，遭受破解的可能性相對較高，如果電腦中有重要隱私資料，需要自行承擔被入侵的風險。


![install-beforefinish](http://3.bp.blogspot.com/-cVcJzZfhqoM/UsPnvY91tvI/AAAAAAAADCk/wbfNbpAldD0/s1600/fedora20-install-beforefinish.png)


回到安裝畫面後可以看見安裝進度，這段等候期間可以去泡杯茶看閒書，待會再回來。


![install-finish](http://2.bp.blogspot.com/-G81VqvmHBzg/UsPnwiS7wjI/AAAAAAAADDU/nf0m5BWpRDc/s1600/fedora20-install-finish.png)


安裝完成，點按「退出」鈕離開安裝程式，接著重新開機就能進入 fedora 20 的世界中囉！


![live-restart](http://3.bp.blogspot.com/-YF3vhRYr8c8/UsPn0RFM6_I/AAAAAAAADEc/g-ZruupX4a4/s1600/fedora20-live-restart.png)


點按右上角的整合式選單，並點按電源圖示鈕。


![restart](http://2.bp.blogspot.com/-liB3For-kH0/UsPn2K6D1BI/AAAAAAAADE8/5Bs0khSEgq4/s1600/fedora20-restart.png)


選擇「重新啟動」。

下一步：[初次登入設定](/guide/step-4/)。
