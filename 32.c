#include <stdio.h>
int Delete(int index, int j, int matrix[5][5], int row, int column);
int main()
{
    int matrix[5][5] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    Delete(0, 0, matrix, 4, 1);
    return 0;
}
int Delete(int index, int j, int matrix[5][5], int row, int column)
{
    if (index < 5)
    {
        if (index == row)
        {
            if (j < 5)
            {
                if (j == column)
                {
                    for (int k = j; k < 5; k++)
                    {
                        matrix[index][k] = matrix[index][k + 1];
                    }
                    return 1;
                }
                return Delete(index, j + 1, matrix, row, column);
            }
            j = 0;
            return Delete(index + 1, j, matrix, row, column);
        }
        j = 0;
        return Delete(index + 1, j, matrix, row, column);
    }
    return 0;
}