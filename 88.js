let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function randomStr(start, length, value)
{
    if (start < length)
    {
        value += chars[Math.floor(Math.random() * (chars.length - 1))];
        return randomStr(start + 1, length, value);
    }
    console.log(value);
}