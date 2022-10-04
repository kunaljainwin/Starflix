import ast

def convert(obj):

        list=[]
        for i in ast.literal_eval(obj):
            list.append(i['name'])
        
        return list
        
        
def convert3(obj):

        list=[]
        counter=0
        for i in ast.literal_eval(obj):
            if counter!=3:
             list.append(i['name'])
             list.append(i['character'])
             counter+=1
            else:
             break
        
        return list


def fetch_director(obj):

        list=[]
       
        for i in ast.literal_eval(obj):
            if i['job']=='Director':
             list.append(i['name'])
        return list