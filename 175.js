let myArr = [];

FillUp(1);
Reverse(myArr.length - 1, myArr);

function FillUp(start)
{
    if (start <= 10)
    {
        myArr.push(start);
        return FillUp(start + 1);
    }
}

function Reverse(index, array)
{
    if (index >= 0)
    {
        console.log(array[index]);
        return Reverse(index - 1, array);
    }
}