# move-on-coords

始点と終点を結ぶ平面座標線上を指定距離移動したときの座標と残り終点までの距離を求めるライブラリ

[![Build Status](https://travis-ci.org/hbsnow/move-on-coords.svg?branch=master)](https://travis-ci.org/hbsnow/move-on-coords)

## Install

```bash
yarn add @hbsnow/move-on-coords
```

## Usage

```js
import { moveOnCoords } from 'move-on-coords'

moveOnCoords([3, 4], [0, 0], 1) // -> { diff: -4, coords: [2.4, 3.2] }
```

## Options

| name  | type   | default | description    |
| ----- | ------ | ------- | -------------- |
| digit | number | 7       | 戻す座標の桁数 |
