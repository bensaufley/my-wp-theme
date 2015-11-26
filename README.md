# Setup

```
$ npm install --global babel-cli
$ npm install babel-preset-es2015
$ babel assets/javascript/es6 --watch --out-dir assets/javascript --presets es2015 &
$ sass --watch assets/css/scss:assets/css &
```

Handy listener function:

```
startlisten()
{
  nohup sass --watch assets/css/scss:assets/css > logs/$(/bin/date +%Y%m%d.%H%M).sass_watch.log 2>&1 &
  nohup babel assets/javascript/es6 --watch --out-dir assets/javascript --source-maps --presets es2015 > logs/$(/bin/date +%Y%m%d.%H%M).babel_watch.log 2>&1 &
}
```
