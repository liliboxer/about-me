function scoreAnswer(maxAnswer, countriesAnswer, coastAnswer, funAnswer, desertAnswer) {
    let score = 0;

    if (maxAnswer === 'a cat') {
        score += 1;
    }

    if (countriesAnswer === '9') {
        score += 1;
    }

    if (coastAnswer === 'no') {
        score += 1;
    }

    if (funAnswer === 'yes') {
        score += 1;
    }

    if (desertAnswer === 'yes') {
        score += 1;
    }

    return score;
};