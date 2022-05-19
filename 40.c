#include <stdio.h>
int Factorial(int number);
int PrimeCheck(int number, int start);
void Generate(int start);
int main()
{
    Generate(5);
    return 0;
}
int Factorial(int number)
{
    if (number >= 1)
    {
        return number * Factorial(number - 1);
    }
    return 1;
}
int PrimeCheck(int number, int start)
{
    if (start < number)
    {
        if (number % start == 0)
        {
            return 0;
        }
        return PrimeCheck(number, start - 1);
    }
    return 1;
}
void Generate(int start)
{
    if (PrimeCheck(Factorial(start), 2) == 0)
    {
        printf("%d ", Factorial(start));
        return Generate(start + 1);
    }
}