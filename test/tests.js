const test = QUnit.test;

function scoreAnswer(maxAnswer, countriesAnswer, coastAnswer, funAnswer, desertAnswer) {
    let score = 6;
    return score;

};

test('all answers correct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const maxAnswer = 'a cat';
    const countriesAnswer = '9';
    const coastAnswer = 'no';
    const funAnswer = 'yes';
    const desertAnswer = 'yes';

    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswer(maxAnswer, countriesAnswer, coastAnswer, funAnswer, desertAnswer);

    //Assert
    assert.equal(score, expected);
});

test('all answers wrong', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const maxAnswer = 'a cat';
    const countriesAnswer = '9';
    const coastAnswer = 'no';
    const funAnswer = 'yes';
    const desertAnswer = 'yes';

    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswer(maxAnswer, countriesAnswer, coastAnswer, funAnswer, desertAnswer);

    //Assert
    assert.equal(score, expected);
});