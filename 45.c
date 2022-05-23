#include <stdio.h>
double power(int num, int raise);
int main()
{
    printf("%f\n", power(2, -2));
    return 0;
}
double power(int num, int raise)
{
    if (raise >= 1)
    {
        return num * power(num, raise - 1);
    }
    return 1;
}