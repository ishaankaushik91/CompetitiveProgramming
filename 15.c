#include <stdio.h>
void MakeCousin(int number1, int number2);
int PrimeCheck(int start, int number);
int main()
{
    MakeCousin(102, 1000);
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
void MakeCousin(int number1, int number2)
{
    if (PrimeCheck(2, number1) + PrimeCheck(2, number2) != 2)
    {
        if (PrimeCheck(2, number1))
        {
            number2 += 1;
            return MakeCousin(number1, number2);
        }
        else if (PrimeCheck(2, number2))
        {
            number1 += 1;
            return MakeCousin(number1, number2);
        }
        else
        {
            number1 += 1;
            number2 += 1;
            return MakeCousin(number1, number2);
        }
    }
    printf("%d , %d\n", number1, number2);
}