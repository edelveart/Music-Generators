function* rosslerAttractor (x = 0.1, y = 0.1, z = 0.1, a = 0.2, b = 0.2, c = 5.7) {
    while (true) {
        const dx = - y - z;
        const dy = x + (a * y);
        const dz = b + (x * z) - (c * z);

        x += dx * 0.01;
        y += dy * 0.01;
        z += dz * 0.01;

        const value = 250 * (Math.cosh(x * z) + Math.sinh(y * z))
        yield value % 120 + 100;
    }
}

function* henonMap (x = 0, y = 0, a = 1.4, b = 0.3) {
    while (true) {
        const newX = 1 - a * x ** 2 + y;
        const newY = b * x;
        const fusionPoint = newX + newY
        yield fusionPoint * 300;
        [x, y] = [newX, newY]
    }
}
