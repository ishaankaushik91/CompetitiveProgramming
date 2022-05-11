#include <stdio.h>
int Insertion(int number, int index, int arr[], int position);
int main()
{
    int arr[10] = {1, 10, 21, 33, 90};
    Insertion(100001, 0, arr, 1);
    printf("%d\n", arr[1]);
    return 0;
}
int Insertion(int number, int index, int arr[], int position)
{
    if (index < 10)
    {
        if (index == position)
        {
            for (int k = 5; k >= position; k--)
            {
                arr[k + 1] = arr[k];
            }
            arr[position] = number;
            return 1;
        }
        return Insertion(number, index + 1, arr, position);
    }
    return 0;
}