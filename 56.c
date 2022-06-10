#include <stdio.h>
int nos(int arr[10], int index, int count);
int main()
{
    int arr[10] = {12, 22, 11, 11, 2, 1, 89, 80, 78};
    printf("%d\n", nos(arr, 0, 0));
    return 0;
}
int nos(int arr[10], int index, int count)
{
    if (index < 10)
    {
        if (arr[index] == 0)
        {
            return count;
        }
        return nos(arr, index + 1, count + 1);
    }
    return 0;
}