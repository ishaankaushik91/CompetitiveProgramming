#include <stdio.h>
void SineWave(int index, int j, int matrix[5][3]);
int main()
{
    int matrix[5][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}, {13, 14, 15}};
    SineWave(0, 0, matrix);
    return 0;
}
void SineWave(int index, int j, int matrix[5][3])
{
    if (j < 3)
    {
        if (index < 5)
        {
            printf("%d\n", matrix[index][j]);
            return SineWave(index + 1, j, matrix);
        }
        index = 0;
        return SineWave(index, j + 1, matrix);
    }
}