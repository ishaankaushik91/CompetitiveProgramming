GenPrime(1, 10, 1);

function GenPrime(start, limit, initializer)
{
    if (start <= limit)
    {
        if (PrimeCheck(2, initializer) == 0)
        {
            return GenPrime(start, limit, initializer + 1);
        }
        initializer += 1;
        console.log(initializer);
        return GenPrime(start + 1, limit, initializer);
    }
}

function PrimeCheck(start, number)
{
    if (start == 0 || start == 1) return 0;
    if (number == 2) return 1;
    if (start < number)
    {
        if (start % number == 0)
        {
            return 1;
        }
        return PrimeCheck(start + 1, number);
    }
    return 0;
}