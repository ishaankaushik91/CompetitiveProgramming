#include <stdio.h>
int Insertion(int index, int arr[], int position, int number, int point);
int main()
{
    int arr[10] = {1, 10, 21, 33, 90};
    Insertion(0, arr, 2, 1000000001, 6);
    printf("%d\n", arr[2]);
    return 0;
}
int Insertion(int index, int arr[], int position, int number, int point)
{
    if (index < 10)
    {
        if (index == position)
        {
            if (point >= position)
            {
                arr[point + 1] = arr[point];
                return Insertion(index, arr, position, number, point - 1);
            }
            arr[position] = number;
            return 1;
        }
        return Insertion(index + 1, arr, position, number, point);
    }
    return 0;
}