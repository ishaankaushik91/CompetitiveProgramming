#include <stdio.h>
void showStopper(int index, int j, int matrix[2][5]);
int main()
{
    int matrix[2][5] = {{1, 3, 4, 5, 8}, {90, 91, 22, 2, 12}};
    showStopper(0, 0, matrix);
    return 0;
}
void showStopper(int index, int j, int matrix[2][5])
{
    if (index < 1)
    {
        if (j < 5)
        {
            int temp = matrix[index][j];
            matrix[index][j] = matrix[index + 1][j + 1];
            matrix[index + 1][j + 1] = temp;
            return showStopper(index, j + 1, matrix);
        }
        return showStopper(index + 1, j, matrix);
    }
    for (int i = 0; i < 2; i++)
    {
        for (int k = 0; k < 5; k++)
        {
            printf("%d\n", matrix[i][k]);
        }
    }
}