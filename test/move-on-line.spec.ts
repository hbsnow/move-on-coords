import test from 'ava'
import { parseLocation, lerp, moveOnCoords } from '../src/move-on-coords'

test('指定有効桁の小数に変換する', t => {
  t.is(parseLocation(1.41421356237, 7), 1.4142136)
  t.is(parseLocation(2.2360679775, 7), 2.236068)
  t.not(parseLocation(2.2360679775, 7), 2.2360679)
  t.is(parseLocation(5, 7), 5)
})

test('2点間の距離を求める', t => {
  t.is(lerp([0, 0], [1, 2]), Math.sqrt(5))
  t.is(lerp([3, 4], [0, 0]), 5)
})

test('指定距離まで移動したときの座標', t => {
  t.deepEqual(moveOnCoords([3, 4], [0, 0], 1), {
    diff: -4,
    coords: [2.4, 3.2]
  })

  t.deepEqual(moveOnCoords([0, 0], [3, 4], 1), {
    diff: -4,
    coords: [0.6, 0.8]
  })
})

test('指定距離まで移動して終点を超えた場合', t => {
  t.deepEqual(moveOnCoords([3, 4], [0, 0], 6), {
    diff: 1,
    coords: [0, 0]
  })

  t.deepEqual(moveOnCoords([0, 0], [3, 4], 7), {
    diff: 2,
    coords: [3, 4]
  })
})
