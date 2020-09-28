myArray=[0,1]
number=int(input("Enter Fibonacci index:"))
for (i in range(number)):
    myArray.append(myArray[i-2]+myArray[i-1])

print("Fibonacci Series of {n}",format(number),myArray)