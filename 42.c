#include <stdio.h>
int DupliSum(int array[]);
int main()
{
    int array[15] = {1, 2, 3, 4, 5, 6, 1, 1, 5, 888, 9};
    printf("%d\n", DupliSum(array));
    return 0;
}
int DupliSum(int array[])
{
    int sum = 0;
    for (int i = 0; i < 11; i++)
    {
        for (int j = i + 1; j < 11; j++)
        {
            if (array[i] == array[j])
            {
                sum += array[j];
            }
        }
    }
    return sum;
}