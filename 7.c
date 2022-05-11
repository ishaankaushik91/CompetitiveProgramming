#include <stdio.h>
void Separate(int arr[], int prr[], int index, int j);
int PrimeCheck(int start, int number);
int main()
{
    int arr[10] = {21, 22, 23, 53, 79, 80}, prr[5];
    Separate(arr, prr, 0, 0);
    return 0;
}
void Separate(int arr[], int prr[], int index, int j)
{
    if (index < 6)
    {
        if (PrimeCheck(2, arr[index]))
        {
            prr[j] = arr[index];
            return Separate(arr, prr, index + 1, j + 1);
        }
        return Separate(arr, prr, index + 1, j);
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