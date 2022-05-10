#include <stdio.h>
void bump(int arr[], int index, int j);
int main()
{
    int nums[10] = {10, 12, 21, 11, 11, 90, 800, 67};
    bump(nums, 0, 0);
    return 0;
}
void bump(int arr[], int index, int j)
{
    if (index < 10)
    {
        if (j < 10)
        {
            printf("%d ", arr[j]);
            return bump(arr, index, j + 1);
        }
        j = index;
        return bump(arr, index + 1, j);
    }
}