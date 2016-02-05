def basicfizzbuzz(n):

    if n % 3 == 0 and n % 5 == 0:
        return 'FizzBuzz'
    elif n % 3 == 0:
        return 'Fizz'
    elif n % 5 == 0:
        return 'Buzz'
    else:
        return str(n)

print "\n".join(basicfizzbuzz(n) for n in xrange(1, 100))

print "\n"
print "****************************************************************************"
print "****************************************************************************"
print "****************************************************************************"
print "****************************************************************************"
print "****************************************************************************"
print "****************************************************************************"
print "\n"

def fizzbuzz(n):
	one = False
	tempStr = ""
	dict = {'Buzz': 5, 'Fizz': 3};

	for key, value in dict.items():
		if n % value == 0:
			tempStr = tempStr + key

	if not tempStr:
		tempStr = str(n)
	return tempStr

print "\n".join(fizzbuzz(n) for n in xrange(1, 100))
