import numpy as np
import pandas as pd

def recommend(df,mat,movie):
	# Returning an api for showing in reactjs
 L=[]
#  movie="Batman Begins"
 movie_index=df[df['title']==movie].index[0]
 similarity=mat[movie_index]
 movies_list=sorted(list(enumerate(similarity)),reverse=True,key=lambda x:x[1])[0:15]
 for i in movies_list:
     L.append(str(df.iloc[i[0]].movie_id))
  
 return L
     
#  return " ".join(L)
	