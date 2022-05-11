#include <stdio.h>
int PrimeCheck(int number, int start);
void Table(char str[], int index, int range);
int main()
{
    char str[100] = "Ishaan is gonna be the most top notch competitive programmer";
    Table(str, 0, 0);
    return 0;
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
void Table(char str[], int index, int range)
{
    if (str[index] != '\0')
    {
        if (PrimeCheck(str[index], 2) && range <= 10)
        {
            printf("%d X %d = %d\n", str[index], range, str[index] * range);
            return Table(str, index, range + 1);
        }
        range = 0;
        return Table(str, index + 1, range);
    }
}