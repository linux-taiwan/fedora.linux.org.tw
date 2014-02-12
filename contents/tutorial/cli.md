Command line interface
======================
就是暱稱黑畫面的命令列。

別忘了先裝 Git 跟 Vim

`sudo yum install git vim`

SSH 連線
-----------------
Fedora 安裝後預設沒有啟用 SSH 連線服務。

* 起動 `sudo systemctl start sshd.service`
* 啟用 `sudo systemctl enable sshd.service`