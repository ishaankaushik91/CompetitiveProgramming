myData = list(range(3, 101));

def PrimeCheck(start, number):
    if (start < number) :
        if (number % start == 0):
            return 0;
        return PrimeCheck(start + 1, number);
    
    return 1;

def MakePrime(index, myData):
    if index < len(myData):
        if PrimeCheck(2,  myData[index]) == 0:
            myData[index] += 1;
            return  MakePrime(index, myData);
        return MakePrime(index + 1, myData);

MakePrime(0, myData);
print(myData);