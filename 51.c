#include <stdio.h>
void showStopper(int matrix[2][5]);
int main()
{
    int matrix[2][5] = {{1, 3, 4, 5, 8}, {90, 91, 22, 2, 12}};
    showStopper(matrix);
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            printf("%d\n", matrix[i][j]);
        }
    }
    return 0;
}
void showStopper(int matrix[2][5])
{
    for (int i = 0; i < 1; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i + 1][j + 1];
            matrix[i + 1][j + 1] = temp;
        }
    }
}