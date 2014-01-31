fedora.linux.org.tw
===================

Web pages of Fedora Taiwan group.

```
npm install
grunt
```

Dependency
----------
* [marked](https://github.com/chjj/marked) as Markdown converter
* [page.js](https://github.com/visionmedia/page.js) as path router
* 

nginx configuration
--------------------
```
ssi on;

location / {
    index  index.shtml;
    rewrite ^/(.*)/$ /$1 permanent;
    try_files $uri $uri/ $uri.shtml =404;
    error_page 404 /default;
    log_not_found  off;
}
```
