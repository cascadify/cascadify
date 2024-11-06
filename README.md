# cascadify

Cascadify is a css framework for simple styling.


## Installation

download the cascadify folder from 'versions/{your_version}'.

you can include it in html like this:

`<script src="./cascadify/include.js"></script>`

this will include all files automaticly.

## Themes
you can add the attribute "theme" to any element.

example

´<div theme="green-code"></div>´

There are the following themes:
'green-code', 'dark', 'nature' and 'ocean'
## Examples



```
<!DOCTYPE html>
<html>
  <head>
    <script src="./cascadify/include.js"></script>
  </head>
  <body theme="green-code">
    <div class="layout">
      <div header>my-test-site.org</div>
      <div nav>
        <a href="#"></a>
      </div>
      <div body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a. 
      </div>
      <div footer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a. 
      </div>
    </div>
  </body>
</html>

```


