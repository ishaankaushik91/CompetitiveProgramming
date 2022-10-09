console.log(recursiveSeries(1));

function recursiveSeries(start)
{
    if (start <= 10)
    {
        return start + recursiveSeries(start + 1);
    }
    return 0;
}