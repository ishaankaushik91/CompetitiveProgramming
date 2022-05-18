#include <stdio.h>
void Summation(int index, int array[]);
int main()
{
    int array[10] = {10, 28, 22, 11, 34, 12, 89};
    Summation(0, array);
    return 0;
}
void Summation(int index, int array[])
{
    if (index < 10)
    {
        int sum = 0;
        for (int i = 0; i <= index; i++)
        {
            sum += array[i];
        }
        printf("%d ", sum);
        return Summation(index + 1, array);
    }
}