function ExtractIP(ip, octets, octet, index)
{
    if (index < ip.length)
    {
        if (ip[index] == "-")
        {
            octets.push(octet);
            octet = "";
            return ExtractIP(ip, octets, octet, index + 1);
        }
        if (ip[index].charCodeAt(0) >= 48 && ip[index].charCodeAt(0) <= 57)
        {
            octet += ip[index];
            return ExtractIP(ip, octets, octet, index + 1);
        }
        return ExtractIP(ip, octets, octet, index + 1);
    }
    octets.push(octet);
    return octets.join(".");
}
console.log(ExtractIP("10A3-90F-8A1-1EE00", [], "", 0));