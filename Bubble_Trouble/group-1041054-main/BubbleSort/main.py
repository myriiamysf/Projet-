
from bubble_sort import bubble_sort

import sys
string = sys.argv[1]

if string == "nombres.txt":
    f = open("nombres.txt")
    listN= f.read()
    listN = listN.split(",")
    listN = [int(x) for x in listN]
    bubble_sort(listN)
else:
    tab_int = string.split(",")

    tab_int = [int(x) for x in tab_int]

    bubble_sort(tab_int)