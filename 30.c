#include <stdio.h>
int Insertion(int index, int j, int row, int column, int matrix[5][5], int number);
int main()
{
    int matrix[5][5] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    Insertion(0, 0, 2, 1, matrix, 100001);
    printf("%d\n", matrix[2][1]);
    return 0;
}
int Insertion(int index, int j, int row, int column, int matrix[5][5], int number)
{
    if (index < 5)
    {
        if (index == row)
        {
            if (j < 3)
            {
                if (j == column)
                {
                    for (int k = 2; k >= j; k--)
                    {
                        matrix[index][k + 1] = matrix[index][k];
                    }
                    matrix[row][column] = number;
                    return 1;
                }
                return Insertion(index, j + 1, row, column, matrix, number);
            }
            j = 0;
            return Insertion(index + 1, j, row, column, matrix, number);
        }
        j = 0;
        return Insertion(index + 1, j, row, column, matrix, number);
    }
    return 0;
}