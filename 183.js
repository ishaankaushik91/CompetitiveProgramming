let matrix = [];

Fill(1, 1, []);
console.log(matrix);

function Fill(start, middle, temp)
{
    if (start <= 5)
    {
        if (middle <= 5)
        {
            temp.push(Math.floor(Math.random() * 127));
            return Fill(start, middle + 1, temp);
        }
        matrix.push(temp);
        temp = [];
        middle = 1;
        return Fill(start + 1, middle, temp);
    }
}