let str = "";

Fill(1, 1, '');
newOne(0, 0, '', false);

function Fill(start, middle, temp)
{
    if (start <= 5)
    {
        if (middle <= 5)
        {
            temp += String.fromCharCode(Math.floor(Math.random() * 127));
            return Fill(start, middle + 1, temp);
        }
        str += temp;
        temp = '';
        middle = 1;
        return Fill(start + 1, middle, temp);
    }
}

function newOne(i, j, real, reality)
{
    if (i < str.length)
    {
        if (j < str.length)
        {
            if (str[i] == str[j])
            {
                reality = true;
                return newOne(i, j + 1, real), reality;
            }
            return newOne(i, j + 1, real, reality);
        }
        if (reality == false)
        {
            real += str[i];
            j = i + 1;
            return newOne(i + 1, j, real, reality);
        }
        j += 1;
        reality = false;
        return newOne(i + 1, j, real, reality);
    }
    console.log(real);
}