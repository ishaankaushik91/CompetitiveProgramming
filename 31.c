#include <stdio.h>
int Delete(int index, int matrix[5][5], int row, int column);
int main()
{
    int matrix[5][5] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    Delete(0, matrix, 1, 1);
    printf("%d\n", matrix[1][1]);
    return 0;
}
int Delete(int index, int matrix[5][5], int row, int column)
{
    if (index < 5)
    {
        if (index == row)
        {
            for (int j = 0; j < 5; j++)
            {
                if (j == column)
                {
                    for (int i = j; i < 5; i++)
                    {
                        matrix[index][i] = matrix[index][i + 1];
                    }
                    return 1;
                }
            }
        }
        return Delete(index + 1, matrix, row, column);
    }
    return 0;
}