import { pAdicValuation, pAdicNorm, pAdicExpansionMusic } from "./padic-music-expansions";

export function* fibonacci(): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

export function* tribonacci(): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield b;
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* tetranacci(): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield c;
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* pentanacci(): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield d;
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* hexanacci(): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield e;
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* heptanacci(): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield f;
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* octanacci(): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield g;
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* enneanacci(): Generator<number> {
    let [a, b, c, d, e, f, g, h, i] = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield h;
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* modularFibonacci(modulo: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, (a + b) % modulo];
    }
}

export function* modularTribonacci(modulo: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield b;
        [a, b, c] = [c, a, (a + b + c) % modulo];
    }
}

export function* modularTetranacci(modulo: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield c;
        [a, b, c, d] = [d, a, b, (a + b + c + d) % modulo];
    }
}

export function* modularPentanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield d;
        [a, b, c, d, e] = [e, a, b, c, (a + b + c + d + e) % modulo];
    }
}

export function* modularHexanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield e;
        [a, b, c, d, e, f] = [f, a, b, c, d, (a + b + c + d + e + f) % modulo];
    }
}

export function* modularHeptanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield f;
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, (a + b + c + d + e + f + g) % modulo];
    }
}

export function* modularOctanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield g;
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, (a + b + c + d + e + f + g + h) % modulo];
    }
}

export function* modularEnneanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g, h, i] = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield h;
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, (a + b + c + d + e + f + g + h + i) % modulo];
    }
}

export function* padicFibonacci(primeNumber: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicValuation(a, primeNumber);
        [a, b] = [b, a + b];
    }
}

export function* padicTribonacci(primeNumber: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicValuation(b, primeNumber);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* padicTetranacci(primeNumber: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(c, primeNumber);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* padicPentanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(d, primeNumber);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* padicHexanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(e, primeNumber);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* padicHeptanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(f, primeNumber);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* padicOctanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(g, primeNumber);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* padicEnneanacci(primeNumber: number): Generator<number> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicValuation(h, primeNumber);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* normPadicFibonacci(primeNumber: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicNorm(a, primeNumber);
        [a, b] = [b, a + b];
    }
}

export function* normPadicTribonacci(primeNumber: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicNorm(b, primeNumber);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* normPadicTetranacci(primeNumber: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(c, primeNumber);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* normPadicPentanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(d, primeNumber);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* normPadicHexanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(e, primeNumber);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* normPadicHeptanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(f, primeNumber);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* normPadicOctanacci(primeNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(g, primeNumber);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* normPadicEnneanacci(primeNumber: number): Generator<number> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicNorm(h, primeNumber);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* pAdicExpansionFibonacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicExpansionMusic(a, primeNumber, precision);
        [a, b] = [b, a + b];
    }
}

export function* pAdicExpansionTribonacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(b, primeNumber, precision);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* pAdicExpansionTetranacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(c, primeNumber, precision);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* pAdicExpansionPentanacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(d, primeNumber, precision);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* pAdicExpansionHexanacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(e, primeNumber, precision);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* pAdicExpansionHeptanacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(f, primeNumber, precision);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* pAdicExpansionOctanacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(g, primeNumber, precision);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* pAdicExpansionEnneanacci(primeNumber: number, precision: number = 11): Generator<number[]> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicExpansionMusic(h, primeNumber, precision);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}
