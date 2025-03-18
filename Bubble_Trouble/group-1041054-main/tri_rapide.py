import sys 

def tri_rapide(string : list[int]) :
    if len(string) % 2 == 0 :
        pivot = int(len(string) / 2) 
        for i in range(len(string)) :
            
            if string[pivot] < string[i] :
                string.append(string[i])
                string.pop(i)

            # if string[pivot] > string[i] :
            #     string.insert(0, string[i])
            #     string.pop(i)
    else : 
        pivot = int(len(string) / 2)

string = sys.argv[1]
string = string.split (",")
string = [int(x) for x in string]
tri_rapide(string)
print (string)

