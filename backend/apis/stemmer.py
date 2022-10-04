from nltk.stem.porter import PorterStemmer
ps=PorterStemmer()
 #stemming i.e making similar words same
def stem(text):
 L=[]
 for p in text.split():
     L.append(ps.stem(p))
     
 return " ".join(L)
    