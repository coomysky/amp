


---

## About AMP
AMP is a way to build web pages for static content that render fast. AMP in action consists of three different parts:

AMP HTML is HTML with some restrictions for reliable performance and some extensions for building rich content beyond basic HTML. The AMP JS library ensures the fast rendering of AMP HTML pages. The Google AMP Cache can be used to serve cached AMP HTML pages.
https://www.ampproject.org/

---

## About This project

Generate AMP HTML easier.

include tools:
- gulp-amphtml-validator  // for validate AMP
- gulp-replace // auto build css files into AMP html
- gulp-sass //auto convert scss file to css


## Getting started

need install gulp and sass.
```
npm install -g gulp
gem install sass

```

install repo

```
1. git clone  https://github.com/coomysky/amp
2. cd amp
3. npm install
4. You can view the website in [your-site-path]

```

## Commends

### gulp styles
build scss styles
file path : "./scss/*.scss"
you can change path setting in gulpfile.js

### gulp watch
watch scss file changes
watch amp validate

### gulp amp:test

replace style link by source file
and validate amp format
and build amp html into build folder

Before
```
<head>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

```
After

```
<head>
  <style amp-custom>
     p { color: pink; }
  </style>
</head>

```
