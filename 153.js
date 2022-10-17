console.log(RecursiveDecompose(0, String(511115), ""));

function RecursiveDecompose(index, num, temp)
{
    if (index < num.length)
    {
        temp += num[index];

        for (let j = index + 1; j < num.length; j++)
        {
            temp += "0";
        }
        temp += " + ";
        return RecursiveDecompose(index + 1, num, temp);
    }
    temp += "0"
    temp += " = " + `${num}`;
    return temp;
}