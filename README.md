# auto.css
auto.css is a classless css framework with several variables to edit.
```html
<link  rel="stylesheet"  href="auto.css"  type="text/css">
```
## Customization
Insert after the linked style sheet.
```html
<style>
  :root {
    --bg-color: #202B38;
    --nav-menu-bg-color: #29303a;
    --color: #ffffff;
    --link-color: #87ceeb;
    --link-color-active: #EA215A;
    --link-color-visited: skyblue;
    --link-underline-color: transparent;
    --link-underline-color-hover: #EA215A;
    --button-text-color: #ffffff;
    --input-color: #000000;
    --input-bg-color: #ffffff;
    --input-disabled-color: #d3d3d3;
    --primary-color: #005aff;
    --primary-hover-color: #0078ff;
    --mark-color: #000000;
    --mark-color-bg: #ffff00;
    --footer-color: #005aff;
    --border-radius: .2rem;
    
    --drawer-bg-color: #ffffff;
    --drawer-color: #000000;
    --drawer-button-hover-color: #d3d3d3;
  }
</style>
```

## Legacy support.
### Details Tag
The details and summary tags are not supported in Internet Explorer and Edge. This script adds onclick events to show and hide them.
```html
<script src="iedge.js"></script>
```
### Internet Explorer 11 support for CSS custom properties.
Custom CSS properties such as `--bg-color` are not supported in Internet Explorer this library adds support for IE11.
https://github.com/nuxodin/ie11CustomProperties
```html
<script>window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/npm/ie11-custom-properties@3.1.0/ie11CustomProperties.js"><\x2fscript>');</script>
```