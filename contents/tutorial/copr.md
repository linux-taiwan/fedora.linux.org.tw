Copr
=============
Cool Other Package Repo

[Project List](https://copr.fedoraproject.org/)

DNF Plugin
-------------
`sudo yum install -y dnf-plugins-core`

*   `dnf copr list`
*   `dnf copr enable`
*   `dnf copr disable`

[GNOME 3.12 on Fedora 20](http://copr.fedoraproject.org/coprs/rhughes/f20-gnome-3-12/)
----------
使用 x86_64 系統：

`dnf copr enable rhughes/f20-gnome-3-12 fedora-20-x86_64`

使用 x86 系統或是如果因為某些原因 x86_64 系統上有裝了 32位元架構 的 lib 套件，要再加上：

`dnf copr enable rhughes/f20-gnome-3-12 fedora-20-i386`