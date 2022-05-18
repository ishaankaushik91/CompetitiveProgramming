#include <stdio.h>
void Summation(int index, int j, int array[], int sum);
int main()
{
    int array[10] = {10, 28, 22, 11, 34, 12, 89};
    Summation(0, 0, array, 0);
    return 0;
}
void Summation(int index, int j, int array[], int sum)
{
    if (index < 10)
    {
        if (j <= index)
        {
            sum += array[j];
            return Summation(index, j + 1, array, sum);
        }
        printf("%d ", sum);
        sum = 0;
        j = 0;
        return Summation(index + 1, j, array,  sum);
    }
}