#include <stdio.h>
int PrimeCheck(int start, int number);
int MakePrime(int number);
int main()
{
    printf("%d\n", MakePrime(4));
    return 0;
}
int PrimeCheck(int start, int number)
{
    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return PrimeCheck(start + 1, number);
    }
    return 1;
}
int MakePrime(int number)
{
    if (PrimeCheck(2, number) == 0)
    {
        number += 1;
        return MakePrime(number);
    }
    return number;
}