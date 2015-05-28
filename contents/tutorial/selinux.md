SELinux
=============
誰來補一下介紹這煩人的機制 XD

Policy 模式
-------------

*   permissive
*   enforcing
*   disabled

查看目前狀態
----------
`sestatus`

查看目前模式
----------
`getenforce`

暫時停用(重開前有效)
----------------
`sudo setenforce 0`

更改設定停用
----------
`sudo vim /etc/selinux/config`

改成

`SELINUX=permissive`

或是

`SELINUX=disabled`
