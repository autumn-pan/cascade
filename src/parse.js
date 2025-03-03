const TOKENS = ["+", "-", "^"]
const CROSSTERM = ["+", "-"]
const WHITESPACE = " ";
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
function parse(polynomial)
{
    let variables = [];
    let powers = [];
    let coefficients = [];
    
    for(let i = 0; i < polynomial.length(); i++)
    {
        if(!TOKENS.includes(polynomial.split("")[i]) && polynomial.split("")[i] !== WHITESPACE)
        {
            variables.push(polynomial.split("")[i]);
        }
    }

    polynomial.replace(" ", "");

    let terms = polynomial.split(CROSSTERM[0]).concat(polynomial.split(CROSSTERM[1]));
    for(let i = 0; i < terms.length; i++)
    {
        let coefficient = 0;
        let j = 0;
        while(DIGITS.includes(terms.split("")[j]))
        {
            coefficient *= 10;
            coefficient += terms.split("")[j]*1;
        }
        coefficients.push(coefficient);
    }
}