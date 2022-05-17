#include <stdio.h>
int Insertion(int index, int matrix[5][5], int row, int column, int number);
int main()
{
    int matrix[5][5] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    Insertion(0, matrix, 1, 2, 500);
    printf("%d\n", matrix[1][2]);
    return 0;
}
int Insertion(int index, int matrix[5][5], int row, int column, int number)
{
    if (index < 5)
    {
        if (index == row)
        {
            for (int i = 0; i < 3; i++)
            {
                if (i == column)
                {
                    for (int k = 2; k >= i; k--)
                    {
                        matrix[index][k + 1] = matrix[index][k];
                    }
                    matrix[row][column] = number;
                    return 1;
                }
            }
        }
        return Insertion(index + 1, matrix, row, column, number);
    }
    return 0;
}