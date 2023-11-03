export const pAdicValuation = (baseNumber: number, prime: number): number => {
    let index = 0;
    if (baseNumber < 1) return index;
    while (baseNumber % (prime ** index) === 0) index++;
    return index - 1;
}

export const pAdicNorm = (baseNumber: number, primeNumber: number): number => {
    if (baseNumber === 0) return 0;
    const power = pAdicValuation(baseNumber, primeNumber);
    const absoluteValue = 1 / (primeNumber ** power);
    return absoluteValue;
}

export const pAdicExpansionMusic = (baseNumber: number, primeNumber: number, precision: number = 11): number[] => {
    const inverseLimitArr: number[] = [];
    for (let index = 1; index < precision; index++) {
        const power = primeNumber ** index;
        const inverseLimits: number = (((baseNumber % (power))) + (power)) % (power)
        inverseLimitArr.push(inverseLimits);
    }

    const pAdicExpansionArray = [inverseLimitArr[0]];
    for (let index = 0; index < precision - 2; index++) {
        const a1 = inverseLimitArr[index + 1];
        const a0 = inverseLimitArr[index];
        const power = (primeNumber ** (index + 1));
        const DIGITS = ((a1 - a0) / power);
        pAdicExpansionArray.push(DIGITS);
    }
    return pAdicExpansionArray;
}


