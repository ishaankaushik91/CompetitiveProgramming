#include <stdio.h>
void bump(int index, int j, int matrix[5][5]);
int main()
{
    int matrix[5][5] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}};
    bump(0, 0, matrix);
    return 0;
}
void bump(int index, int j, int matrix[5][5])
{
    if (index < 2)
    {
        if (j < 5)
        {
            for (int i = j; i < 5; i++)
            {
                printf("%d ", matrix[index][i]);
            }
            printf("\n");
            return bump(index, j + 1, matrix);
        }
        j = 0;
        return bump(index + 1, j, matrix);
    }
}