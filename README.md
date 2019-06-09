# move-on-line

始点と終点を結ぶ平面座標線上を指定距離移動したときの座標と残り終点までの距離を求めるライブラリ

[![Build Status](https://travis-ci.org/hbsnow/move-on-line.svg?branch=master)](https://travis-ci.org/hbsnow/move-on-line)

## Install

```bash
yarn add move-on-line
```

## Usage

```js
import { move } from 'move-on-line'

console.log(move([3, 4], [0, 0], 1)) // -> { diff: -4, coords: [2.4, 3.2] }
```

## Options

| name  | description    |
| ----- | -------------- |
| digit | 戻す座標の桁数 |
