#include <stdio.h>
void prePrimes(int array[]);
int PrimeCheck(int number);
int main()
{
    int primes[10] = {21, 99, 1, 1, 12, 21, 11};
    prePrimes(primes);
    return 0;
}
int PrimeCheck(int number)
{
    for (int i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
void prePrimes(int array[])
{
    for (int i = 0; i < 10; i++)
    {
        while (PrimeCheck(array[i]) == 0)
        {
            array[i] -= 1;
        }
        printf("%d\n", array[i]);       
    }
}