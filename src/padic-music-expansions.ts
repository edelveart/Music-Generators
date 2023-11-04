export const pAdicValuation = (baseTenNumber: number, baseNumber: number): number => {
    let index = 0;
    if (baseTenNumber < 1) return index;
    while (baseTenNumber % (baseNumber ** index) === 0) index++;
    return index - 1;
}

export const pAdicNorm = (baseTenNumber: number, baseNumber: number): number => {
    if (baseTenNumber === 0) return 0;
    const power = pAdicValuation(baseTenNumber, baseNumber);
    const absoluteValue = 1 / (baseNumber ** power);
    return absoluteValue;
}

export const pAdicExpansionMusic = (baseTenNumber: number, baseNumber: number, precision: number = 11): number[] => {
    const inverseLimitArr: number[] = [];
    for (let index = 1; index < precision; index++) {
        const power = baseNumber ** index;
        const inverseLimits: number = (((baseTenNumber % (power))) + (power)) % (power)
        inverseLimitArr.push(inverseLimits);
    }

    const pAdicExpansionArray = [inverseLimitArr[0]];
    for (let index = 0; index < precision - 2; index++) {
        const a1 = inverseLimitArr[index + 1];
        const a0 = inverseLimitArr[index];
        const power = (baseNumber ** (index + 1));
        const DIGITS = ((a1 - a0) / power);
        pAdicExpansionArray.push(DIGITS);
    }
    return pAdicExpansionArray;
}

export const pAdicExpansionMusicArithmetic = (baseTenNumber: number, baseNumber: number, precision: number = 11): number[] => {
    const inverseLimitArr: number[] = [];
    for (let index = 1; index < precision; index++) {
        const power = baseNumber ** index;
        const inverseLimits: number = (((baseTenNumber % (power))) + (power)) % (power)
        inverseLimitArr.push(inverseLimits);
    }

    const pAdicExpansionArray = [inverseLimitArr[0]];
    for (let index = 0; index < precision - 2; index++) {
        const a1 = inverseLimitArr[index + 1];
        const a0 = inverseLimitArr[index];
        const power = (baseNumber ** (index + 1));
        const DIGITS = ((a1 - a0) / power);
        pAdicExpansionArray.push(DIGITS);
    }
    const reversepAdicExpansionArray = pAdicExpansionArray.reverse();
    return reversepAdicExpansionArray
        .slice(reversepAdicExpansionArray.findIndex(digit => digit !== 0));
}


