#include <stdio.h>
int highFrequency(int arr[]);
int main()
{
    int arr[20] = {1, 90, 22, 11, 111, 2, 11, 2334, 11, 80, 90, 88};
    printf("%d\n", highFrequency(arr));
    return 0;
}
int highFrequency(int arr[])
{
    int prev = 0;

    for (int i = 0; i < 12; i++)
    {
        int freq = 0;
        for (int j = 0; j < 12; j++)
        {
            if (arr[i] == arr[j])
            {
                freq++;
            }
        }
        if (prev < freq)
        {
            prev = freq;
        }
    }
    return prev;
}