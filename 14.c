#include <stdio.h>
int PrimeCheck(int number);
void PrimeArray(int arr[]);
int main()
{
    int arr[15] = {10, 11, 12, 21, 22, 90, 88, 99, 21, 95, 96};
    PrimeArray(arr);
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
void PrimeArray(int arr[])
{
    for (int i = 0; i < 15 && arr[i] != 0; i++)
    {
        while (PrimeCheck(arr[i]) == 0)
        {
            arr[i] += 1;
        }
        printf("%d ", arr[i]);
    }
}