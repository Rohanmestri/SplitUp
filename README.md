# SplitUp
***An expense splitting hybrid app powered by Natural Language Processing and developed using React Native with Expo*** 

<img src="images/logo.jpeg" alt="logo" width="250" align="right"/>

When voice assistants began to emerge in 2011 with the introduction of Siri, no one could have predicted that this novelty would become a driver for tech innovation. The growth in the speech and voice recognition market can be attributed to the rising acceptance of advanced technology together with increasing consumer demand for smart devices. 
This motivated us to build our app, SplitUp. SplitUp enables you to keep track of your expenses and loans without actually having to save a heap of bills to put this information in the app. It does all this on the go just at the command of your voice. 



![MIT license](https://img.shields.io/github/license/Rohanmestri/SplitUp)
![Issues](https://img.shields.io/github/issues/Rohanmestri/SplitUp?logo=github)
[![Build Status](https://travis-ci.com/Rohanmestri/SplitUp.svg?branch=master)](https://travis-ci.com/Rohanmestri/SplitUp)

## App preview video

[![SplitUP](https://img.youtube.com/vi/BdBLGMfhgiI/0.jpg)](https://youtu.be/BdBLGMfhgiI)

![views](https://img.shields.io/youtube/views/BdBLGMfhgiI?style=social)

<img src="images/why_us.png" alt="logo" width="150" align="right"/>

## Why choose this project?
- [Awesome Tech Stack](#awesome-tech-stack)
- [Clear, Quantifiable and Testable Hypothesis](#clear-quantifiable-and-testable-hypothesis)
- [Endless Scope](#endless-scope)
- [Considerate Pre-requisites](#considerate-pre-requisites)

## Awesome Tech Stack
React Native(Javascript), python, NLP(entity extraction, voice recognition), REST API, firebase

## Clear, Quantifiable and Testable Hypothesis
 Hypothesis: As a result of the voice recognition feature, SplitUp is faster at expense recording than
 any other apps currently in the market.
 
 Evaluation: To evaluate this hypothesis, we will conduct a time analysis on users and calculate the average time it takes for a user to add the same information in both of these apps. Computing this average over a sample of users would be an accurate way to test our hypothesis.
 
 Qualtitative evaluation: We will also conduct a feedback survey to record their experiences with our app vs. other similar apps.


## Considerate Pre-requisites
This project only requires basic knowledge of various fields described below. One can easily catch up in no time.
The database is implemented in firebase which has super easy integration APIs for application creation. We have already created some query functions which can be modified to retrieve different pieces of data from firebase database. Apart from this, having a basic knowledge of NLP concepts like entity extraction, POS tagging is enough to continue this project.

## Endless Scope
Currently, we are using google keyboard microphone to retrieve text from voice. One major scope for improvement is converting this project from Expo to pure React Native. This will allow you to use several Speech to Text APIs like react native voice, IBM Watson Speech-to-Text and so on.

Information extraction from text is a very popular field in NLP, with new advancements happening everyday. Our software currently handles processing of simple transactions involving a single participant and keyword based expense matching, and has a lot of room for innovation and improvement.

 ## Current Progress
 
 [![demo video](https://img.youtube.com/vi/wTju8pgBZNo/0.jpg)](https://youtu.be/wTju8pgBZNo)


## Setup Instructions

1) Download repo
2) Go to SplitUp/app directory and run 'npm install' (This will install all react native dependencies required for the app)
3) Run expo using 'npm start' or 'expo start'
