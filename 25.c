#include <stdio.h>
void Traversal(int index, int arr[3][3]);
int main()
{
    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}};
    Traversal(0, matrix);
    return 0;
}
void Traversal(int index, int arr[3][3])
{
    if (index < 2)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ", arr[index][j]);
        }
        return Traversal(index + 1, arr);
    }
}