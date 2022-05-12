#include <stdio.h>
int PrimeCheck(int number);
void MakeCousin(int number1, int number2);
int main()
{
    MakeCousin(102, 1000);
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
void MakeCousin(int number1, int number2)
{
    while (PrimeCheck(number1) + PrimeCheck(number2) != 2)
    {
        if (PrimeCheck(number1))
        {
            number2 += 1;
        }
        else if (PrimeCheck(number2))
        {
            number1 += 1;
        }
        else
        {
            number1 += 1;
            number2 += 1;
        }
    }
    printf("%d , %d\n", number1, number2);  
}