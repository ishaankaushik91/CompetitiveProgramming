let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

print(0, matrix);

function print(index, matrix)
{
    if (index < matrix.length)
    {
        for (let j = 0; j < matrix[index].length; j++)
        {
            console.log(matrix[index][j]);
        }
        return print(index + 1, matrix);
    }
}