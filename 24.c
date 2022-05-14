#include <stdio.h>
int PrimeCheck(int number);
int DeletePrimes(int arr[]);
int main()
{
    int arr[10] = {2, 4, 6, 3, 8, 9, 10};
    DeletePrimes(arr);
    return 0;
}
int PrimeCheck(int number)
{
    for (int k = 2; k < number; k++)
    {
        if (number % k == 0)
        {
            return 0;
        }
    }
    return 1;
}
int DeletePrimes(int arr[])
{
    for (int i = 0; i < 7; i++)
    {
        if (PrimeCheck(arr[i]))
        {
            for (int j = i; j < 7; j++)
            {
                arr[j] = arr[j + 1];
            }
        }
    }
    return -1;
}