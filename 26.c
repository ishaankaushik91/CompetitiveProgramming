#include <stdio.h>
int Summation(int index, int matrix[5][3], int j);
int main()
{
    int matrix[5][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    printf("%d\n", Summation(0, matrix, 0));
    return 0;
}
int Summation(int index, int matrix[5][3], int j)
{
    if (index < 5)
    {
        if (j < 3)
        {
            return matrix[index][j] + Summation(index, matrix, j + 1);
        }
        j = 0;
        return Summation(index + 1, matrix, j);
    }
    return 0;
}