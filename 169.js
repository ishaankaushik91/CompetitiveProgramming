function ArrayOp1(start, array)
{
    if (start < array.length)
    {
        console.log(array[start]);
        return ArrayOp1(start + 1, array);
    }
}

function ArrayOp2(start, array)
{
    if (start < array.length)
    {
        return ArrayOp2[start] + ArrayOp2(start + 1, array);
    }
    return 0;
}

function ArrayOp3(start, array)
{
    if (start < array.length)
    {
        if (array[start] % 2 == 0)
        {
            console.log(array[start]);
            return ArrayOp3(start + 1, array);
        }
        return ArrayOp3(start + 1, array);
    }
}

function ArrayOp4(start, array)
{
    if (start < array.length)
    {
        if (array[start] % 2 != 0)
        {
            return array[start] + ArrayOp4(start + 1, array);
        }
        return ArrayOp4(start + 1, array);
    }
    return 0;
}

function ArrayOp5(start, array, tempIndex)
{
    if (start < array.length)
    {
        if (tempIndex <= start)
        {
            return array[tempIndex] + ArrayOp5(start, array, tempIndex + 1);
        }
        tempIndex = start;
        return ArrayOp5(start + 1, array, tempIndex);
    }
    return 0;
}

let array = [];
//console.log(ArrayOp6(0, 0, 3, 3));
function ArrayOp6(i, j, rows, columns)
{
    if (i <= rows)
    {
        if (i == 0 && j == 0)
        {
            array.push([]);
            array[i].push(`${i}, ${j}`);
            return ArrayOp6(i, j + 1, rows, columns);
        }
        if (j <= columns)
        {
            array[i].push(`${i}, ${j}`);
            return ArrayOp6(i, j + 1, rows, columns);
        }
        j = 0;
        array.push([]);
        return  ArrayOp6(i + 1, j, rows, columns);
    }
    return array;
}

//ArrayOp7(0, 0, ArrayOp6(0, 0, 3, 3));
function ArrayOp7(i, j, matrix)
{
    if (i < matrix.length)
    {
        if (j < matrix[i].length)
        {
            console.log(matrix[i][j]);
            return ArrayOp7(i, j + 1, matrix);
        }
        j = 0;
        return ArrayOp7(i + 1, j, matrix);
    }
}

function ArrayOp8(i, j, matrix)
{
    if (i < matrix.length)
    {
        if (j < matrix[i].length)
        {
            return matrix[i][j] + ArrayOp8(i, j + 1, matrix);
        }
        j = 0;
        return ArrayOp8(i + 1, j, matrix);
    }
    return 0;
}

//ArrayOp9(0, 0, ``);
function ArrayOp9(start, between, str)
{
    if (start <= 5)
    {
        if (between <= start)
        {
            str += `* `;
            return ArrayOp9(start, between + 1, str);
        }
        console.log(str);
        str = ``;
        between = 0;
        return ArrayOp9(start + 1, between, str);
    }
}

//console.log(ArrayOp10(0, 0, [[0, 1, 2], [0, 1, 2]]));
function ArrayOp10(i, j, matrix)
{
    if (i <  matrix.length)
    {
        if (j < matrix[i].length)
        {
            if (i == j)
            {
                return matrix[i][j] + ArrayOp10(i, j + 1, matrix);
            }
            return ArrayOp10(i, j + 1, matrix);
        }
        j = 0;
        return ArrayOp10(i + 1, j, matrix);
    }
    return 0;
}

function ArrayOp11(i, j, matrix1, matrix2)
{
    if (i < matrix1.length)
    {
        if (j < matrix1[i].length)
        {
            return matrix1[i][j] + matrix2[i][j] + ArrayOp11(i, j + 1, matrix1, matrix2);
        }
        j = 0;
        return ArrayOp11(i + 1, j, matrix1, matrix2);
    }
    return 0;
}