let performanceData = [];
// Assuming 2 servers have already sent the data
performanceData.push({macA : 0, data : {cpu : "blah blah (Already)", memory : "blah blah (Already)"}});
performanceData.push({macA : 8, data : {cpu : "blah blah (Already)", memory : "blah blah (Already)"}});
performanceData.push({macA : 6, data : {cpu : "blah blah (Already)", memory : "blah blah (Already)"}});
IncomingFromDogServer(performanceData);
console.log(performanceData);

// Many DogServers
function IncomingFromDogServer(array)
{
    for (let i = 0; i < 10; i++)
    {
        Populate(i, array, {macA : i, data : {cpu : "Foo", memory : "Top G", otherThings : "blah blah"}});
    }
}

// Checks if macAddress already there then only change the data for that mac or else put a new object
function Populate(start, array, socketData)
{
    if (start < array.length)
    {
        let alreadyThere = SearchMacA(socketData.macA, array);
        if (alreadyThere != -1)
        {
            array[alreadyThere].data = socketData.data;
            return Populate(start + 1, array, socketData);
        }
        array.push(socketData);
        return Populate(start + 1, array, socketData);
    }
}

function SearchMacA(macA, array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].macA == macA)
        {
            return i;
        }
    }

    return -1;
}