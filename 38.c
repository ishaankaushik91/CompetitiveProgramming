#include <stdio.h>
void Summation(int index, int j, int sum, int array[]);
int main()
{
    int array[10] = {10, 28, 22, 11, 34, 12, 89};
    Summation(0, 0, 0, array);
    return 0;
}
void Summation(int index, int j, int sum, int array[])
{
    if (index < 10)
    {
        if (j < 10)
        {
            sum += array[j];
            return Summation(index, j + 1, sum, array);
        }
        printf("%d ", sum);
        sum = 0;
        j = index;
        return Summation(index + 1, j, sum, array);
    }
}