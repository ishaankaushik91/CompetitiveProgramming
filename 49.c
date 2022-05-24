#include <stdio.h>
void prePrimes(int index, int array[]);
int PrimeCheck(int number, int start);
int main()
{
    int primes[10] = {21, 99, 1, 1, 12, 21, 11};
    prePrimes(0, primes);
    return 0;
}
void prePrimes(int index, int array[])
{
    if (index < 10)
    {
        if (PrimeCheck(array[index], 2) == 0)
        {
            array[index] -= 1;
            return prePrimes(index, array);
        }
        printf("%d\n", array[index]);
        return prePrimes(index + 1, array);
    }
}
int PrimeCheck(int number, int start)
{
    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return PrimeCheck(number, start + 1);
    }
    return 1;
}