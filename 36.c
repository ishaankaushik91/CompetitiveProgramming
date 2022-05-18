#include <stdio.h>
void Summation(int array[]);
int main()
{
    int array[10] = {10, 28, 22, 11, 34, 12, 89};
    Summation(array);
    return 0;
}
void Summation(int array[])
{
    for (int i = 0; i < 10; i++)
    {
        int sum = 0;
        for (int j = 0; j <= i; j++)
        {
            sum += array[j];
        }
        printf("%d ", sum);
    }
}