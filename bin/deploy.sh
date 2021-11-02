#!/bin/bash

echo "Build Angular Project"
ng build

echo "Copying server.js"
cp server.js dist/server.js

echo "Change Directory to ./dist"
cd dist

echo "Git Initialize"
git init

echo "NPM Initialize"
npm init -y

echo "Installing Express"
npm install express

echo "Setting Heroku Git Remote"
heroku git:remote -a artofbloom

echo "Git Push"
git add . && git commit -m 'initial commit' && git push heroku master --force

