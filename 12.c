#include <stdio.h>
int Duplicate(int index, int arr[]);
int main()
{
    int arr[15] = {10, 11, 12, 21, 22, 90, 88, 99, 21, 95, 96};
    Duplicate(0, arr);
    return 0;
}
int Duplicate(int index, int arr[])
{
    if (index < 15)
    {
        for (int j = index + 1; j < 15; j++)
        {
            if (arr[index] == arr[j] && arr[index] != 0)
            {
                printf("%d at %d\n", arr[index], j);
                break;
            }
        }
        return Duplicate(index + 1, arr);
    }
    return 1;
}