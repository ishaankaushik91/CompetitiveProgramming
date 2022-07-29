for (let i = 0; i < 5; i++)
{
    let str = "*";
    for (let j = 0; j < i; j++)
    {
        str += "*";
    }
    console.log(str);
}

function p(start, j, s)
{
    if (start < 5)
    {
        if (j < start)
        {
            s += "*";
            return p(start, j + 1, s);
        }
        console.log(s);
        s = "*";
        j = 0;
        return p(start + 1, j, s);
    }
}
p(0, 0, "*");