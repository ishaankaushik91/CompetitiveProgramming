#include <stdio.h>
void charFreq(char str[]);
int main()
{
    char str[100] = "Ishaan is gonna be the most top notch competitive programmer";
    charFreq(str);
    return 0;
}
void charFreq(char str[])
{
    for (int i = 0; str[i] != '\0'; i++)
    {
        int frequency = 0;
        for (int j = 0; str[j] != '\0'; j++)
        {
            if (str[i] == str[j])
            {
                frequency++;
            }
        }
        printf("Frequency of %c = %d\n", str[i], frequency);
    }
}