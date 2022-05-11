#include <stdio.h>
int Primecheck(int number);
void Table(char str[]);
int main()
{
    char str[100] = "Ishaan is gonna be the most top notch competitive programmer";
    Table(str);
    return 0;
}
int Primecheck(int number)
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
void Table(char str[])
{
    for (int j = 0; str[j] != '\0'; j++)
    {
        if (Primecheck(str[j]))
        {
            for (int k = 1; k <= 10; k++)
            {
                printf("%d X %d = %d\n", str[j], k, str[j] * k);
            }
        }
    } 
}