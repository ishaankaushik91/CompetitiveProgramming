#include <stdio.h>
int DeletePrimes(int arr[], int index);
int PrimeCheck(int start, int number);
int main()
{
    int arr[10] = {2, 4, 6, 3, 8, 9, 10};
    DeletePrimes(arr, 0);
    for (int i = 0; i < 7; i++)
    {
        printf("%d\n", arr[i]);
    }
    return 0;
}
int DeletePrimes(int arr[], int index)
{
    if (index < 7)
    {
        if (PrimeCheck(2, arr[index]))
        {
            for (int k = index; k < 7; k++)
            {
                arr[k] = arr[k + 1];
            }
        }
        return DeletePrimes(arr, index + 1);
    }
    return -1;
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