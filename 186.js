let a = [], sum = 0;

Fill(1);
console.log(UniqueSummation(sum));

function Fill(start)
{
    if (start <= 10)
    {
        a.push(start);
        return Fill(start + 1);
    }
}

function UniqueSummation(sum)
{
    if (a.length)
    {
        sum += a[a.length - 1];
        a.length -= 1;
        return UniqueSummation(sum);
    }
    return sum;
}