let array = [];

InHer(1);
ConsecutiveSequence(0, array, ``, ``);

function InHer(start)
{
    if (start <= 100)
    {
        if (start % 5 == 0 && start >= 5)
        {
            array.push(5);
            return InHer(start + 1);
        }
        array.push(start);
        return InHer(start + 1);
    }
}

function ConsecutiveSequence(index, array, str, temp)
{
    if (index < array.length - 1)
    {
        if (array[index + 1] - array[index] == 1)
        {
            temp += `${array[index]}, ${array[index + 1]}, `;
            return ConsecutiveSequence(index + 2, array, str, temp);
        }
        console.log(`Sequence ${temp}`);
        temp = ``;
        return ConsecutiveSequence(index + 1, array, str, temp);
    }
}