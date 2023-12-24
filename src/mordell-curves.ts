export function* mordellCurve
    (x: number, k: number, stepSize: number = 1):
    Generator<[number, number]> {
    while (true) {
        let y = Math.sqrt(Math.pow((x), 3) + (k))
        if (!isNaN(y)) {
            yield [x, y]
        }
        x += stepSize;
    }
}

export function* mordellMusicPoints
    (x: number, k: number, modulo: number = 12, stepSize: number = 1)
    : Generator<number> {
    while (true) {
        let y = Math.sqrt(Math.pow(x, 3)) + Math.abs(k)
        if (!isNaN(y)) {
            yield Math.round(x ** 3 + k / y) % modulo
        }
        x += stepSize;
    }
}
