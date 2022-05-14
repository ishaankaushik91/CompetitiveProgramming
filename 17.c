#include <stdio.h>
void frequency(int index, int arr[]);
int main()
{
    int arr[20] = {1, 90, 22, 11, 111, 2, 11, 2334, 11, 80, 90, 88};
    frequency(0, arr);    
    return 0;
}
void frequency(int index, int arr[])
{
    if (index < 12)
    {
        int freq = 0;
        for (int i = 0; i < 12; i++)
        {
            if (arr[index] == arr[i])
            {
                freq++;
            }
        }
        printf("%d %d\n", arr[index], freq);
        return frequency(index + 1, arr);
    }
}