import test from 'ava'
import { lerp } from '../lib/lerp'

test('特定整数座標から座標まで指定距離分移動する', t => {
  t.is(lerp([0, 0], [2, 2], 1), [1, 1])
})
