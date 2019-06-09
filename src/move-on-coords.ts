export interface Options {
  digit: number
}

export interface CoordsMoved {
  diff: number
  coords: number[]
}

/**
 * 指定桁数に四捨五入して変換する
 * @param location 変換対象
 * @param digit 桁数
 */
export const parseLocation = (location: number, digit: number): number =>
  parseFloat(location.toFixed(digit))

/**
 * 二点間の距離を求める
 * @param a 始点
 * @param b 終点
 */
export const lerp = (a: number[], b: number[]): number =>
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

/**
 * 始点から終点まで指定距離を移動したときの座標と、終点までの残り距離を求める
 * @param a 始点
 * @param b 終点
 * @param distance 移動距離
 * @param options オプション
 */
export const moveOnCoords = (
  a: number[],
  b: number[],
  distance: number,
  options?: Options
): CoordsMoved => {
  const opts = {
    digit: 7,
    ...options
  }

  const length = lerp(a, b)
  const diff = distance - length
  const coords =
    distance >= length
      ? b
      : [
          parseLocation(
            (a[0] * (length - distance) + b[0] * distance) / length,
            opts.digit
          ),
          parseLocation(
            (a[1] * (length - distance) + b[1] * distance) / length,
            opts.digit
          )
        ]

  return { diff, coords }
}
