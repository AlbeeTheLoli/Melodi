import sys

some_value = str(sys.argv[1])

def testFunc():
    print('jopa jopa jopa', some_value)
    sys.stdout.flush()

testFunc()