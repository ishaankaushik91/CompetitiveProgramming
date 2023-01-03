let matrix = [];

Fill([], 0);
console.log(matrix);

function Fill(temp, index)
{
    if (matrix.length <= 5)
    {   
        if (index < 5)
        {
            temp.push(index);
            return Fill(temp, index + 1);
        }
        matrix.push(temp);
        temp = [];
        index = 0;
        return Fill(temp, index);
    }
}