Command line interface
======================
就是暱稱黑畫面的命令列。

別忘了先裝 Git 跟 Vim

`sudo dnf install git vim`

SSH 連線
-----------------
Fedora 安裝後預設沒有啟用 SSH 連線服務。

* 起動 `sudo systemctl start sshd.service`
* 啟用 `sudo systemctl enable sshd.service`

防火牆
-----------------
Fedora 安裝後預設開啟的防火牆服務常擋到一些應用。

* 關閉 `sudo systemctl stop firewalld.service`
* 停用 `sudo systemctl disable firewalld.service`
