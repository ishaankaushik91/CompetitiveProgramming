#include <stdio.h>
int Delete(int index, int arr[], int position);
int main()
{
    int arr[10] = {2, 4, 6, 3, 8, 9, 10};
    Delete(0, arr, 3);
    return 0;
}
int Delete(int index, int arr[], int position)
{
    if (index < 7)
    {
        if (index == position)
        {
            arr[index] = arr[index + 1];
            return Delete(index + 1, arr, position + 1);
        }
        return Delete(index + 1, arr, position);
    }
    return -1;
}