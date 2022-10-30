let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(Reverse(arr.length, arr, []));

function Reverse(index, arr, temp)
{
    if (index - 1 >= 0)
    {
        temp.push(arr[index - 1]);
        return Reverse(index - 1, arr, temp);
    }

    return temp;
}

console.log(Rev(0, arr, arr.length - 1));

function Rev(index, arr, end)
{
    if (index < arr.length/2)
    {
        let temp = arr[index];
        arr[index] = arr[end];
        arr[end] = temp;
        return Rev(index + 1, arr, end - 1);
    }

    return arr;
}