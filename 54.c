#include <stdio.h>
void bump(int matrix[5][5]);
int main()
{
    int matrix[5][5] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}};
    bump(matrix);
    return 0;
}
void bump(int matrix[5][5])
{
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            for (int k = j; k < 5; k++)
            {
                printf("%d ", matrix[i][k]);
            }
            printf("\n");
        }
    }
}