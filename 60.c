#include <stdio.h>
void freq(int index, int j, int matrix[10][10]);
int main()
{
    int matrix[10][10] = {{1, 2, 10, 111, 21, 1}, {90, 99, 11, 11, 21, 88}};
    freq(0, 0, matrix);
    return 0;
}
void freq(int index, int j, int matrix[10][10])
{
    if (index < 2)
    {
        if (j < 6)
        {
            int frequency = 0;
            for (int i = 0; i < 6; i++)
            {
                if (matrix[index][j] == matrix[index][i])
                {
                    frequency++;
                }
            }
            printf("%d is frequency of %d\n", frequency, matrix[index][j]);
            return freq(index, j + 1, matrix);
        }
        j = 0;
        return freq(index + 1, j, matrix);
    }
}