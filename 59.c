#include <stdio.h>
void sine(int index, int j, int matrix[10][10]);
int main()
{
    int matrix[10][10] = {{1, 2, 10, 111, 21, 1}, {90, 99, 11, 11, 21, 88}};
    sine(0, 0, matrix);
    return 0;
}
void sine(int index, int j, int matrix[10][10])
{
    if (j < 6)
    {
        if (index < 2)
        {
            printf("%d ", matrix[index][j]);
            return sine(index + 1, j, matrix);
        }
        index = 0;
        return sine(index, j + 1, matrix);
    }
}