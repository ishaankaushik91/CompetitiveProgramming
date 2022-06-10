#include <stdio.h>
void print(int row, int column, int matrix[10][10]);
int main()
{
    int matrix[10][10] = {{1, 2, 10, 111, 21, 1}, {90, 99, 11, 11, 21, 88}};
    print(0, 0, matrix);
    return 0;
}
void print(int row, int column, int matrix[10][10])
{
    for (column = 0; column < 3; column++)
    {
        for (row = 0; row < 2; row++)
        {
            printf("%d ", matrix[row][column]);
        }
        printf("\n");
    }
}