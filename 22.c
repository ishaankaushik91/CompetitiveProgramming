#include <stdio.h>
int Delete(int arr[], int position);
int main()
{
    int arr[10] = {2, 4, 6, 3, 8, 9, 10};
    Delete(arr, 3);
    return 0;
}
int Delete(int arr[], int position)
{
    for (int i = 0; i < 7; i++)
    {
        if (i == position)
        {
            for (int j = i; j < 7; j++)
            {
                arr[i] = arr[i + 1];
            }
            break;
            return 1;
        }
    }
    return -1;
}