#include <stdio.h>
int Summation(int matrix[5][3]);
int main()
{
    int matrix[5][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    printf("%d\n", Summation(matrix));
    return 0;
}
int Summation(int matrix[5][3])
{
    int sum = 0;
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            sum += matrix[i][j];
        }
    }
    return sum;
}