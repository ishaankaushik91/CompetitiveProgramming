#include <stdio.h>
void join(char string[100], char newOne[100]);
int main()
{
    char string[100] = "Apple was so tasty that I rated it 100 out of 10.....it was a kashmiri apple";
    char newOne[100];
    join(string, newOne);
    return 0;
}
void join(char string[100], char newOne[100])
{
    int d = 0;
    for (int i = 0; string[i] != '\0'; i++)
    {
        if (string[i] != 32)
        {
            newOne[d] = string[i];
            d++;
        }
    }
    printf("%s\n", newOne);
}