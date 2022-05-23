#include <stdio.h>
double power(int num, int raise);
int main()
{
    printf("%f\n", power(2, 10));
    return 0;
}
double power(int num, int raise)
{
    int pi = 1;
    for (raise = raise; raise >= 1; raise--)
    {
        pi *= num;
    }
    return pi;
}