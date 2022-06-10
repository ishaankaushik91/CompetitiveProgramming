#include <stdio.h>
int main()
{
    int arr[10] = {12, 22, 11, 11, 2, 1, 89, 80, 78};
    int count = 0;
    for (int i = 0; i < 10; i++)
    {
        count++;
    }
    printf("%d\n", count);
    return 0;
}