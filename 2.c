#include <stdio.h>
void bump(int arr[]);
int main()
{
    int nums[10] = {10, 12, 21, 11, 11, 90, 800, 67};
    bump(nums);
    return 0;
}
void bump(int arr[])
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = i; j < 10; j++)
        {
            printf("%d ", arr[j]);
        }
    }
}