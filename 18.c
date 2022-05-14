#include <stdio.h>
void highFrequency(int index, int arr[], int j, int prev, int freq);
int main()
{
    int arr[20] = {1, 90, 22, 11, 111, 2, 11, 2334, 11, 80, 90, 88};
    highFrequency(0, arr, 0, 0, 0);
    return 0;
}
void highFrequency(int index, int arr[], int j, int prev, int freq)
{
    if (index < 12)
    {
        if (j < 12)
        {
            if (arr[index] == arr[j])
            {
                freq++;
                return highFrequency(index, arr, j + 1, prev, freq);
            }
            return highFrequency(index, arr, j + 1, prev, freq);
        }
        if (prev < freq)
        {
            prev = freq;
            j = 0;
            freq = 0;
            return highFrequency(index + 1, arr, j, prev, freq);
        }
        j = 0;
        freq = 0;
        return highFrequency(index + 1, arr, j, prev, freq);
    }
    printf("%d\n", prev);
}