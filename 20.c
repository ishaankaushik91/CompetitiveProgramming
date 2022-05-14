#include <stdio.h>
int Delete(int index, int arr[], int target);
int main()
{
    int arr[10] = {2, 4, 6, 3, 8, 9, 10};
    Delete(0, arr, 3);
    return 0;
}
int Delete(int index, int arr[], int target)
{
    if (index < 7)
    {
        if (arr[index] == target)
        {
            for (int k = index; k < 7; k++)
            {
                arr[k] = arr[k + 1];
            }
            return 1;
        }
        return Delete(index + 1, arr, target);
    }
    return -1;
}