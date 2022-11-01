let matrix = [
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
];

console.log(max1(0, 0, matrix, 0, -100));

function max1(index, j, matrix, count, main)
{
    if (index < matrix.length)
    {
        if (j < matrix[index].length)
        {
            if (matrix[index][j] == 1)
            {
                return max1(index, j + 1, matrix, count + 1, main);
            }
            return max1(index, j + 1, matrix, count, main);
        }
        if (main < count)
        {
            main = count;
            j = 0;
            count = 0;
            return max1(index + 1, j, matrix, count, main);
        }
        j = 0;
        count = 0;
        return max1(index + 1, j, matrix, count, main);
    }

    return main;
}