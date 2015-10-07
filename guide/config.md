---
layout: page
title: 入門 - 安裝後設定
permalink: /guide/config/
---

安裝完 Fedora 之後 需要做的動作可能很多。所以打算寫這個文件跟大家分享，並且希望大家可以一起共筆補上自己需要的安裝配置基本的就是先做系統更新。

軟體更新
--------
    sudo yum clean all
    sudo yum update

或者自行點擊應用程式裡的「軟體更新」( Software Update )
 
在 Fedora 跟 Red Hat 系 ( RHEL CentOS ) 裡頭用的安裝檔是 rpm 。至於是幾位元的通常 32 位元都會有 i386 i586 i686 的字樣。而 64 位元 會有 x64 x86_64 amd64 等字樣。目前 Fedora 17 預設下載的 Live CD 已經是 64 位元了。
 
-------
基本yum
-------
在 Fedora 下建議利用 yum 安裝新軟體，或者到各軟體的官方網站下載 rpm 檔來進行安裝  目前 Fedora 的應用程式「新增/移除軟體」( Add/Remove Software ) 其實不太好用yum 是個好用的東西，所以簡介一下 yum 的用法，讓新手上路也比較快一點
 
以下部份只要是有關新增移除的功能，都需要有 root 的權限 要嘛在最前面加上 sudo 就會跟你要求密碼取得權限要嘛 su root 切換使用者到 root
 
    yum search XXX //查詢來源中是否有 XXX 軟體
    yum install XXX // 安裝 XXX 軟體，如果要安裝多個軟體的話，直接再空白打上去就好了
    yum remove XXX // 移除 XXX 軟體
    yum update // 把所有軟體更新
    yum clean all // 清掉安裝過程中的垃圾，並且把所有的依賴關係重新喬好

--------------
Flash & Chrome
-------------
 
* **Chrome:** 大家最常用的 google 瀏覽器也可以直接去官方網站下載也有 rpm 的版本可供安裝了。在做系統更新的時候，也會順便更新 Chrome 瀏覽器。  
[Chrome 連結](https://www.google.com/intl/zh-TW/chrome/browser/)  
（但是自己去點擊 Chrome 裡面的「關於 Google Chrome」是不會有更新反應的）

* **Flash :**而 Adobe 在 Linux 上也直接跟 google 合作更新 flash 。 也可以直接到 Adobe 官網下載 Flash Player 11.2但已經不再做更新了 只有在 google Chrome 上才會繼續更新。Adobe 只承諾會做安全性的更新。  
[Flash 連結](http://get.adobe.com/tw/flashplayer/)

------
輸入法
------
輸入法設定：
先假定各位並沒有設定輸入法 (例如直接安裝英文版)，可以去 應用程式(Application) -> 輸入法 (Input Method) 設成 ibus
然後系統可能會要求你登出，登出之後螢幕右上方應該會出現個小鍵盤圖示
可以去對他點 右鍵 -> 設定 (preferences) -> 輸入法 (Input Method) -> 找到 中文(Chinese) -> 新酷音(Chewing) -> 新增 (Add)
這樣每次 ctrl + 空白就可以切換輸入法囉
 
---------------
筆電蓋上螢幕設定
---------------
筆電螢幕蓋上不希望休眠的話
**Fedora 18:**

    vim /etc/systemd/logind.conf
    HandleLidSwitch=lock ( 如果不想改成 lock 可以改成 ignore 他會什麼事都不做）

然後重新開機或者 sudo systemctl restart systemd-logind.service
詳情可以 man logind.conf

-----------------
安裝第三方 source
-----------------
再來安裝最大的第三方來源 rpm fusion ( 聽說有被 red hat 整合過，這點需要其他大大來輔助說明，可能有誤 ) 這是 rpm fusion 的下載頁
 
[rpmfusion 組態網頁](http://rpmfusion.org/Configuration)
 
有分成 free 跟 non free 的來源，點擊 rpm 檔就會自動幫你添加來源。或者可以在 terminal 下輸入指令：
 
* **free 的來源：**

        rpm -Uvh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
 
* **non free 的來源：**

        rpm -Uvh http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm
 
其他的第三方軟體庫還有
 
[ATrpms](http://atrpms.net/)
 
以及
 
[remi](http://rpms.famillecollet.com/)
 
不過我(黃翊峰)認為 rpm fusion 比較好用，「似乎」也比較沒有衝突的問題。還可以跟著 yum 一起更新，其他的源要加參數。這樣就可以安裝一些編解碼格式的函式庫了。一些基本的可以靠 gstreamer 系列來看多媒體，這些都靠 free 的 rpm fusion(以下我猜我分類的方式可能有誤 請大大們幫忙加一些解釋可以嗎?)
 

顯示卡驅動
----------
在 18 之後好像不會抓到 ati 顯示卡的驅動，不過可以靠 rpm fusion - nonfree 安裝驅動，而且好維護
*  **ATI:**

        sudo yum install xorg-x11-drv-catalyst
* **nVidia:** 

        sudo yum install xorg-x11-drv-nvidia
        
* **nVidia (173系列）:**
 
        sudo yum install xorg-x11-drv-nvidia-173xx
 
安裝編解碼 library
-------------------
* **以及其他掛件 :**

        sudo yum install gstreamer-plugins-good gstreamer-plugins-bad gstreamer-ffmpeg gstreamer-plugins-ugly
 
 
* **mpeg :**

        sudo yum install ffmpeg ffmpeg-libs
 
* **avi:**

        sudo yum install xvidcore

 
* **DVD 函式庫 :**

        sudo yum install libdvdread libdvdnav lsdvd
 
( 不過前兩個可能在 gstreamer 系列的時候就已經裝好了 )
 
安裝這些就可以靠基本內建的播放器看多媒體了 如果要安裝強大的撥放器可以裝 vlc 播放器 ( 這應該 Qt Based 的 )
 
* **vlc :**

        sudo yum install vlc

------------
推薦安裝軟體
------------
 
####辦公室軟體 :####
Fedora 的官方庫有 Libre Office ，非常強大( Live CD 上預設是沒有安裝的 )
 
* **Libre Office :**

        sudo yum install libreoffice

--------------------------- 
####文字編輯器:####
vim 跟 emacs 是在 Linux 上最常用的兩個文字界面的編輯器當然如果是新手的話建議使用 vim ，在某知名鳥哥的書上也常用這款在其他的發行版也常常預設安裝好了

 
* **vim :**

        sudo yum install vim
 

 
* **emacs :**

        sudo yum install emacs
 
----------------------------
####BBS 軟體：####
在 Linux 上面也有 PCMan 唷～Fedora 下也可以繼續當鄉民，一開始找不到可能只是因為名字不是只有單純的 PCMan 而已
 
* **PCManX :**

        sudo yum install pcmanx-gtk2

----------------------------- 
####幾個常用的繪圖軟體 ：####
GIMP 就是傳言中GNU 的 Photo Shop
 
* **GIMP :**

        sudo yum install gimp
 
 
* **Blender**
用來畫 3D 圖形的軟體

        sudo yum install blender
 

 
* **Inkscape**
用來畫向量圖形的( 向量圖形就是指把圖案放大縮小都不會有馬賽克的圖形啦！ )
 
        sudo yum install inkscape
 

 
* **My Paint**
從頭畫起的好用繪圖軟體，渲染效果呀什麼的都很棒( 感覺可以取代 Painter )

        sudo yum install mypaint
 
--------------------
####壓縮軟體 :####
壓縮軟體 7zip 是在 Linux 下常見的解壓軟體可解大部分的格式但是 rar 是個專利軟體，所以必須要用到 rpm fusion nonfree 的來源去下載 unrar 跟 libunrar
 
* **p7zip 和 unrar :**

        sudo yum install p7zip p7zip-plugins unrar libunrar
 
---------------------
####即時通訊軟體 ####
即時通軟體 pidgin 可與 MSN 互通，甚至可把 MSN 取代的玩意。
 
* **pidgin :**

        yum install pidgin
 
* **QQ:**
    若有需要與在內地的朋友連絡，直接使用網頁版。連安裝都不用，只是大部分時候，視頻會帶不起來。
 
[QQ連結](http://web.qq.com/)
 
-------------
####MP3相關 ：####
 
* **EasyTag :** 
    MP3 標籤編輯器。

         yum install easytag
 
[網站](http://easytag.sourceforge.net/)
 
-----------
#### 續傳軟體：####
* **uGet :**

        yum install uget
 
--------------------- 
####各種協定的文字瀏覽器：####
 
* **links:**
這是一個文字界面來看網頁的瀏覽器，所以無法開啟圖片跟影片的效果，不過他支援簡單的 js。

        sudo yum install links
 
 
* **telnet:**
這是基本用瀏覽 telnet 的文字介面程式，不過去 ptt 之類的 bbs 站可能還會有些中文編碼的問題

        sudo yum install links
 
* **ftp:**
這是用來連接 ftp 站的軟體

        sudo yum install ftp
 
------------
####資訊安全類：####

* **nmap:**
基本我是拿來掃看看某網域或 ip 下面有開哪些 port 不過這是基本的，他還有更多進階的用途請自行 google

        sudo yum install nmap
 
* **wireshark :**
這可以拿來分析封包，很好用的工具軟體，不過進階的還是要靠各位去 google （不過最後提一點，雖然可以下載，但 fedora 下載玩後不知道跑哪去了，請大大們教一下）。

        sudo yum install wireshark
 
------------------------
####網頁伺服器架設：####

* **LAMP:**
LAMP 指的就是 Linux + Apache + MySQL + PHP，下載是非常的快速只需要sudo yum install httpd mysql mysql-server php php-mysql就可以裝好了其中 httpd 就是 apache而 mysql 一個是 client 用來訪問 mysql-server 的，所以 mysql-server 自然就是 server 端了然後 php 需要一個 php-mysql 用來讓 php 去訪問 mysql-server
 
裝好之後可以用 fedora 中的 systemd 去開啟 apache 跟 mysql-server
 
    sudo systemctl start mysqld.servicesudo 
    systemctl start httpd.servicesudo
    systemctl enable mysqld.service
    sudo systemctl enable httpd.service

    sudo systemctl start 服務名稱 （單純只是開啟服務，反之 stop 是關閉）
    sudo systemctl enable 服務名稱 （開機的時候自動啟動但是當下並沒有開啟唷反之disable 是關掉開機啟動）
    sudo systemctl status 服務名稱 (可以查看服務狀態）而服務名稱通常是 .service 為副檔名，而服務的名字本身結尾也會以 d (daemon 精靈的意思 畢竟之後是要常住在背景服務的伺服器程式嘛）
 
最後開個網址列 找 127.0.0.1 會有一個 apache 的歡迎頁面，但是這不代表別人看得到唷
 
feodra 有開一個防火牆擋住 可以去找應用程式 -> 防火牆 (application -> Firewall)把 port 80 打勾，這樣別人輸入你的 ip 就能看到你的網頁了）
 
你的網頁只要放在 /etc/www/html 下面別人就能看到了 剩下的不細說了
 
 
* **no-ip:**
一個動態把你的 ip 跟 domain name 連結在一起的程式 fedora 的檔案庫下面本來就有了
 
        sudo yum install no-ip
 
第一次只要sudo noip -C就能配置了如果要預設開機啟動也能用 systemd，剩下不細說
 
---------- 
####開發者相關:####
 
* **Java 相關 :**
 
若不是開發者的話，在 Fedora 裡面就已經有 OpenJDK 的執行環境了 java-1.7.0-openjdk 這個應該已經內建在裡面了若是希望開發的話可以下載開發相關的 OpenJDK 開發安裝包
 
* **Openjde-devel:**

        sudo yum install java-1.7.0-openjdk-devel
 
下載完開發包的朋友，會在應用程式區 ( Applications ) 這區上看到兩個程式
 
OpenJDK Monitoring & Management Console 和 OpenJDK Policy Tool
 
這兩個軟體是用來看看 java 執行的狀況如何的軟體但是卻沒有顯示該有的 Icon 圖示其實只是這兩個 desktop 檔的 Icon 標錯請去修改兩個 desktop 檔
 
/usr/share/applications/java-1.7.0-openjdk-jconsole.desktop/usr/share/applications/java-1.7.0-openjdk-policytool.desktop
 
裡面都有個欄位
 
Icon=java
 
改成Icon=java-1.7.0
 
當然 OpenJDK 在使用上比較沒有授權問題 如果希望使用 Oracle 原廠的 JDK 的話可以到官網下載 rpm 的安裝包
 
[Java 官網](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
 
再來就是修改一點中文編碼的小 bug ，如果各位使用的是中文的語系可能會發現應用程式欄裡，有個 Fedora 發行備註有亂碼參雜，大家可以用文字編輯器去把那亂碼修掉。看大家常用 vim 還是 gedit
 
    sudo vim /usr/share/applications/fedora-release-notes.desktop
 
或是
 
    sudo gedit /usr/share/applications/fedora-release-notes.desktop
 
另一個也修一下
 
/usr/share/applications/fedora-release-notesX.desktop
 
裡面都有幾欄 把亂碼清一下吧。
 
    Name[zh_TW]=發&#x200B;行&#x200B;備&#x200B;註&#x200B;Comment[zh_TW]=Fedora 17 發&#x200B;行&#x200B;備&#x200B;註&#x200B;
 
當然啦 我也會清簡中的，就是 [zh_CN] 那些。
 
 
* **gnu toolchain**
應該不能說是個軟體，而是一堆軟體的集合，不只包含編譯器，他包含了make: 自動編譯工具gcc:以前是 c 編譯器而已，現在是一堆編譯器，如果只有從 yum install gcc 只會有 c 編譯器唷，如果要其他語言的編譯器需要用 - 分開 ex. gcc-c++binutils:這包含了組譯器，連結器(as, ld) 和其他工具gdb: debug 的軟體autotools: 這也是個軟體的集合包含 autoconf, autoheader(包在 autoconf 下）, automake, libtool 這就是用來作 tarball 三步驟的工具（./configure, make, make install)這些工具還有跨平台呢！當然不是指 x86 而已 還能跨硬體

        sudo yum install make gcc binutils gdb autoconf automake libtool

 
* **Verilog:**
在 linux 下可以用 Icarus Verilog 寫然後用 vvp 執行 （雖然編譯完的Verilog 開頭會有 #!/bin/vvpm 這樣可以直接執行 ./a.out 了）如果要看波形圖的話可以用 gtkwave 去看，其他的 eda 工具就需要其他大大介紹了，最近查一查，還找不到把 Verilog 轉電路圖的軟體
 
        sudo yum install iverilog gtkwave

* **Python**
在 Fedora 下本來就有 Python 2.7 的直譯器，如果想開發的話可以把 python-tools python-devel 也抓回來
 
  * Python (2.7):

            sudo yum install python-tools python-devel
可是 python 2.7 已經不會在繼續維護了，現在主線已經到了 python 3 了， fedora 也有囊括，不過都是以 python3 為程式名
 
   * Python3:

            sudo yum install python3 python3-tools python3-devel
 

* **Octave：**
如果要寫 matlab 用 octave 就對了，完全相容 matlab 而且還多出很多功能，在他們還沒定位 octave 之前做了很多功能，到了 2000 左右才宣佈定位成 matlab 的延伸
 
        sudo yum install octave
 

* **Maxima ：**
這是個符號運算軟體，符號運算該怎麼解釋呢？簡單來講一般來說，大部分的程式都會把 1/2 + 1/3 算一個小數給你，但是 Maxima 可以算一個 1/6 給你，大致上可以用來替換 Maple

        sudo yum install maxima
 
----------------
####排版軟體####
想必開發者也遇到過自己的程式碼老是排不好，或是自己排版的風格不統一，希望有軟體可以支援的話下面介紹幾個比較常見的 style 排版軟體吧!
 
* **gnu indent(這只能對 C):**

        sudo yum install indent
 
* **Artist Style (C, C++, C#, Java):**

        sudo yum install astyle
 
* **tidy (html, css):**

        sudo yum install tidy

--------
####小小救援:####
當你發現自己的 gnome-shell 凍住了怎麼辦
如果只是單純的 shell 卡死可以按 Alt + F2 輸入 r
gnome-shell 就會重新啟動
如果是整個畫面凍住的話
那還可以 Ctrl + Alt + F2~F6 利用 tty 界面來下指令

簡單一點重新啟動 gnome-shell

    sudo killall -HUP gnome-shell 
    （這樣是會對 gnome-shell 送出一個掛斷的訊號，然後他會自動重新啟動）
連 gdm 一起重新啟動

    sudo systemctl restart gdm

