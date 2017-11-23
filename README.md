# unnecessary-react-render

Log unnecessary component rendering

### Usage

There's no point in using this transform. It doesn't do anything! That being said, you can use it by updating your `.babelrc` file to look like the following. Your much fancier transform will also require something like this.

```js
{
  "presets": [
    "react"
  ],
  "plugins": [
    ["react-transform", {
      "transforms": [{
        "transform": "unnecessary-react-render"
      }]
    }]
  ]
}
```
