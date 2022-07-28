myData = list(range(2, 100));

def PrimeCheck(start, number) :
    if start < number :
        if number % start == 0 :
            return 0;
        return PrimeCheck(start + 1, number);
    
    return 1;

def Summation(index, myData) :
    if index < len(myData) :
        if PrimeCheck(2, myData[index]) :
            return myData[index] + Summation(index + 1, myData);
        return Summation(index + 1, myData);
    
    return 0;

print(Summation(0, myData));