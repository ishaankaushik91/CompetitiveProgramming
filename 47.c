#include <stdio.h>
int nextNdigit(int number, int digits);
int length(int string[100], int index, int len);
int main()
{
    return 0;
}
int nextNdigit(int number, int digits)
{
    
}

int length(int string[100], int index, int len)
{
    if (string[index] != '\0')
    {
        len++;
        return length(string, index + 1, len);
    }
    return len;
}