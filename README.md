# deep-closest-jquery-plugin
allow you to get the nearest item (any relative)

Example:

HTML
```html

<div class="example-parent">
  <div class="example-child">
    <a href="#" class="change-example-brother-child"></a>
  </div>
  <div class="example-brother">
    <div class="example-brother-child">
      
    </div>
  </div>
</div>

```
javascript
```js
$('.change-example-brother-child').click(function(e){
  
  e.preventDefault();
  
  $(this).deepClosest('.example-brother-child').addClass('changed');

});
```