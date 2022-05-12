#include <stdio.h>
void PrimeArray(int index, int arr[]);
int PrimeCheck(int start, int number);
int main()
{
    int arr[15] = {10, 11, 12, 21, 22, 90, 88, 99, 21, 95, 96};
    PrimeArray(0, arr);
    return 0;
}
void PrimeArray(int index, int arr[])
{
    if (index < 15 && arr[index] != 0)
    {
        if (PrimeCheck(2, arr[index]) == 0)
        {
            arr[index] += 1;
            return PrimeArray(index, arr);
        }
        printf("%d ", arr[index]);
        return PrimeArray(index + 1, arr);
    }
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