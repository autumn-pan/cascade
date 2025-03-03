class polynomial {
    constructor(coefficients, variables, powers)
    {
        if (variables.length != powers.length || powers.length != coefficients.length)
            throw(new error("Invalid constructor: All parameters must be of equal length."))
        this.coefficients = coefficients;
        this.powers = powers;
    }
}
