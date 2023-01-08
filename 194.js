let matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrix2 = [
    [1, 2, 3],
    [4, 5, 6]
];

let sum = [];
Solve(0, 0, matrix1, matrix2, []);
console.log(sum);

function Solve(i, j, matrix1, matrix2, temp)
{
    if (i < matrix1.length)
    {
        if (j < matrix1[i].length)
        {
            temp.push(matrix1[i][j] + matrix2[i][j]);
            return Solve(i, j + 1, matrix1, matrix2, temp);
        }
        sum.push(temp);
        j = 0;
        temp = [];
        return Solve(i + 1, j, matrix1, matrix2, temp);
    }
}