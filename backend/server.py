# Import flask and datetime module for showing date and time
from flask import Flask,jsonify
import numpy as np
import pandas as pd
from apis.helper import *
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from apis.recommend import recommend
from apis.stemmer import *
from flask_cors import CORS, cross_origin
# x = datetime.datetime.now()

# # Initializing flask app
# app = Flask(__name__)


app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/login")
@cross_origin(supports_credentials=True)
def login():
  return jsonify({'success': 'ok'})

@app.route("/",methods=['GET'])
def hello_world():
    return "<p>Hello, World!( add additional parameters)</p>"
  
@app.route('/all')
def get_list():
  movies=pd.read_csv("data/tmdb_5000_credits.csv")
  list=movies["title"].to_list()
  return jsonify(list)
   
@app.route('/data/<string:movie>',methods=['GET'])
def get_recommendation(movie):
# Returning an api for showing in reactjs
 movies=pd.read_csv("data/tmdb_5000_movies.csv")
 credits=pd.read_csv("data/tmdb_5000_credits.csv")
 
# merging 2 datasets 
 movies=movies.merge(credits,on='title')

# pre-processing 

 movies= movies[['movie_id','title','overview','genres','keywords','cast','crew']]
# remove empty rows
#  movies.isnull().sum().to_string()
#  movies.duplicated().sum()
 movies.dropna(inplace=True)
 
 movies['genres']=movies['genres'].apply(convert)
 movies['cast']=movies['cast'].apply(convert3)
 movies['crew']=movies['crew'].apply(fetch_director)
 movies['overview']=movies['overview'].apply(lambda x:x.split())
 movies['keywords']=movies['keywords'].apply(convert)
#  movies['title']=movies['title'].apply(lambda x:[x])
 movies['cast']=movies['cast'].apply(lambda x:[i.replace(" ","") for i in x] )
 movies['genres']=movies['genres'].apply(lambda x:[i.replace(" ","") for i in x] )
 movies['crew']=movies['crew'].apply(lambda x:[i.replace(" ","") for i in x] )
 movies['keywords']=movies['keywords'].apply(lambda x:[i.replace(" ","") for i in x] )
 
	
  
# creating column : tags
 movies['tags']=movies['genres']+movies['cast']+movies['crew']+movies['overview']+movies['keywords']
 
 df=movies[['movie_id','title','tags']]
 df['tags']=df['tags'].apply(lambda x:" ".join(x).lower())

 
 #stem
 df['tags']=df['tags'].apply(stem)
 #

 df.to_csv("data/processed_data/processed.csv")
 
 # vectorization using sklearn
 cv=CountVectorizer(max_features=5000,stop_words='english')
 vectors=cv.fit_transform(df['tags']).toarray()
 
 similarity=cosine_similarity(vectors)
 
 list=recommend(df,similarity,movie)
 return jsonify(list) 
	
 
@app.route('/processed_data/<string:movie>',methods=['GET'])
def get_recommendation_processed(movie):
 df=pd.read_csv("data/processed_data/processed.csv")
 cv=CountVectorizer(max_features=5000,stop_words='english')
 vectors=cv.fit_transform(df['tags']).toarray()
 
 similarity=cosine_similarity(vectors)
 
 list=recommend(df,similarity,movie)
 return jsonify(list) 

   
# Running app
# if __name__ == '__main__':
#   # 
# 	app.run(port=8000)
