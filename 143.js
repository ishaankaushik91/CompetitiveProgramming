console.log(addEmup(1));

function addEmup(start)
{
    let count = 0;
    while (start <= 10)
    {
        count += start;
        start++;
    }
    return count;
}