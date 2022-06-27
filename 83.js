let arr = [1, 20, 122, 110, 23, 11, 33, 98];

arr.sort((a, b) => {
    return a - b;
});

PreviouslySmall(0, arr);

function PreviouslySmall(index, arr)
{
    if (index < arr.length)
    {
        console.log(arr[index - 1]);
        return PreviouslySmall(index + 1, arr);
    }
}