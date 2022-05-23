#include <stdio.h>
int DupliSum(int index, int array[], int sum);
int main()
{
    int array[15] = {1, 2, 3, 4, 5, 6, 1, 1, 5, 888, 9};
    printf("%d\n", DupliSum(0, array, 0));
    return 0;
}
int DupliSum(int index, int array[], int sum)
{
    if (index < 11)
    {
        for (int k = index + 1; k < 11; k++)
        {
            if (array[index] == array[k])
            {
                sum += array[k];
                break;
            }
        }
        return DupliSum(index + 1, array, sum);
    }
    return sum;
}