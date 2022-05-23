#include <stdio.h>
void join(int index, char string[100], char newOne[100], int newIndex);
int main()
{
    char string[100] = "Apple was so tasty that I rated it 100 out of 10.....it was a kashmiri apple";
    char newOne[100];
    join(0, string, newOne, 0);
    return 0;
}
void join(int index, char string[100], char newOne[100], int newIndex)
{
    if (string[index] != '\0')
    {
        if (string[index] == 32)
        {
            return join(index + 1, string, newOne, newIndex);
        }
        newOne[newIndex] = string[index];
        return join(index + 1, string, newOne, newIndex + 1);
    }
    printf("%s\n", newOne);
}