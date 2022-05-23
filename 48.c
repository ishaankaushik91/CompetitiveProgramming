#include <stdio.h>
void breaking(int number, int hundered, int fifty, int ten);
int main()
{
    breaking(1720, 0, 0, 0);
    return 0;
}
void breaking(int number, int hundered, int fifty, int ten)
{
    if (number >= 1)
    {
        if (number >= 100)
        {
            return breaking(number - 100, hundered + 1, fifty, ten);
        }
        if (number >= 50 && number < 100)
        {
            return breaking(number - 50, hundered, fifty + 1, ten);
        }
        return breaking(number - 1, hundered, fifty, ten);
    }
    printf("%d %d\n", hundered, fifty);
}