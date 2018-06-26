# weapp-mpvue-flexbox-grid
> Flexbox grid component for weapp

## install:
```shell
npm install afeiship/weapp-mpvue-flexbox-grid -S --registry=https://registry.npm.taobao.org
```

## imports:
+ scss
```scss
@import 'node_modules/weapp-sass-flexbox-grid/dist/weapp-sass-flexbox-grid.scss';
```

+ js
```js
import MpRow from 'weapp-mpvue-flexbox-grid/dist/mp-row.vue';
import MpCol from 'weapp-mpvue-flexbox-grid/dist/mp-col.vue';
```


## usage:
+ eq-width:
```html
<mp-row>
  <mp-col>mp-col1</mp-col>
  <mp-col>mp-col2</mp-col>
  <mp-col>mp-col3</mp-col>
</mp-row>
```

+ mp-col with span
```html
<mp-row>
  <mp-col span="2">mp-col1</mp-col>
  <mp-col span="20">mp-col2</mp-col>
  <mp-col span="2">mp-col3</mp-col>
</mp-row>
```


## Row properties:
| Name      | type    | Default | Value                                   | Description         |
|-----------|---------|---------|-----------------------------------------|---------------------|
| wrap      | Boolean | false   | true/false                              | wrap/nowrap         |
| direction | Boolean | false   | true/false                              | horizontal/vertical |
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
