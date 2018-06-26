# weapp-mpvue-flexbox-grid
> Flexbox grid component for weapp


## imports:
+ scss
```scss
@import 'node_modules/weapp-sass-flexbox-grid/dist/weapp-sass-flexbox-grid.scss';
```

+ js
```js
import Row from 'weapp-mpvue-flexbox-grid/dist/row.vue';
import Col from 'weapp-mpvue-flexbox-grid/dist/col.vue';
```


## usage:
+ eq-width:
```html
<row>
  <col>Col1</col>
  <col>Col2</col>
  <col>Col3</col>
</row>
```

+ col with span
<row>
  <col span="2">Col1</col>
  <col span="20">Col2</col>
  <col span="2">Col3</col>
</row>


## Row properties:
| Name      | type    | Default | Value                                   | Description         |
|-----------|---------|---------|-----------------------------------------|---------------------|
| wrap      | Boolean | false   | true/false                              | wrap/nowrap         |
| direction | Boolean | -       | true/false                              | horizontal/vertical |
| align     | String  | ''      | top/bottom/cener/stretch/baseline       | row align           |
| justify   | String  | ''      | start/end/center/stretch/between/around | row jusitfy         |
| className | String  | ''      | -                                       | css class name      |


## Col properties:
| Name      | type   | Default | Value                    | Description    |
|-----------|--------|---------|--------------------------|----------------|
| align     | String | ''      | top/bottom/cener/stretch | col self align |
| span      | String | 1-24    | -                        | col span size  |
| offset    | String | 1-24    | -                        | row ofset      |
| className | String | ''      | -                        | css class name |
