#include <stdio.h>
void charFreq(char str[], int index, int frequency, int j);
int main()
{
    char str[100] = "Ishaan is gonna be the most top notch competitive programmer";
    charFreq(str, 0, 0, 0);
    return 0;
}
void charFreq(char str[], int index, int frequency, int j)
{
    if (str[index] != '\0')
    {
        if (str[j] != '\0')
        {
            if (str[index] == str[j])
            {
                frequency++;
                return charFreq(str, index, frequency, j + 1);
            }
            return charFreq(str, index, frequency, j + 1);
        }
        printf("Frequency of %c is %d\n", str[index], frequency);
        frequency = 0;
        j = 0;
        return charFreq(str, index + 1, frequency, j);
    }
}