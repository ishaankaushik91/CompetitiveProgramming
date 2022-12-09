function RandomRec1(num)
{
    if (num <= 100)
    {
        return num + RandomRec1(num + 1);
    }
    return 0;
}

function RandomRec2(num)
{
    if (num <= 20)
    {
        return num * RandomRec2(num + 1);
    }
    return 1;
}

function RandomRec3(num, power)
{
    if (power >= 1)
    {
        return num * RandomRec3(num, power - 1);
    }
    return 1;
}

function RandomRec4(number, temp)
{
    if (number <= 10)
    {
        if (temp <= number)
        {
            return temp + RandomRec4(number, temp + 1);
        }
        temp = 0;
        return RandomRec4(number + 1, temp);
    }
    return 0;
}

function RandomRec5(number)
{
    if (number >= 1)
    {
        return number * RandomRec5(number - 1);
    }
    return 1 + 1;
}