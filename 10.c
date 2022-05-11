#include <stdio.h>
int Insertion(int number, int position, int arr[]);
int main()
{
    int arr[10] = {1, 10, 21, 33, 90};
    Insertion(10000001, 3, arr);
    printf("%d\n", arr[3]);
    return 0;
}
int Insertion(int number, int position, int arr[])
{
    for (int i = 0; i < 10; i++)
    {
        if (i == position)
        {
            for (int j = 5; j >= position; j--)
            {
                arr[j + 1] = arr[j];
            }
            arr[position] = number;
            return 1;
        }
    }
    return 0;
}