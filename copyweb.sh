#!/bin/tcsh

cd /huge/allstadt/MultDetect
python create_pages.py

git pull origin master

git add /huge/allstadt/MultDetect/RCM/figures
git add /huge/allstadt/MultDetect/RCM/index.md
git add /huge/allstadt/MultDetect/RCS/figures
git add /huge/allstadt/MultDetect/RCS/index.md
git add /huge/allstadt/MultDetect/STAR/figures
git add /huge/allstadt/MultDetect/STAR/index.md
git add /huge/allstadt/MultDetect/multtimeline10ALL.png

git commit -m 'daily website update'

git push origin master

