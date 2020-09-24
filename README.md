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
- [Considerate Pre-requisites](#considerate-pre-requisites)
- [Endless Scope](#endless-scope)

### Awesome Tech Stack
React Native(Javascript), Python (NLTK, Flask, Tensorflow, etc), NLP(entity extraction, voice recognition), REST API, firebase

### Clear, Quantifiable and Testable Hypothesis
 Hypothesis: As a result of the voice recognition feature, SplitUp is faster at expense recording than
 any other apps currently in the market.
 
 Evaluation: To evaluate this hypothesis, we will conduct a time analysis on users and calculate the average time it takes for a user to add the same information in both of these apps. Computing this average over a sample of users would be an accurate way to test our hypothesis.
 
 Qualtitative evaluation: We will also conduct a feedback survey to record their experiences with our app vs. other similar apps.


### Considerate Pre-requisites
This project only requires basic knowledge of various fields described below. One can easily catch up in no time.
The database is implemented in firebase which has super easy integration APIs for application creation. We have already created some query functions which can be modified to retrieve different pieces of data from firebase database. Apart from this, having a basic knowledge of NLP concepts like entity extraction, POS tagging is enough to continue this project.

### Endless Scope
Currently, we are using google keyboard microphone to retrieve text from voice. One major scope for improvement is converting this project from Expo to pure React Native. This will allow you to use several Speech to Text APIs like react native voice, IBM Watson Speech-to-Text and so on.

Information extraction from text is a very popular field in NLP, with new advancements happening everyday. Our software currently handles processing of simple transactions involving a single participant and keyword based expense matching, and has a lot of room for innovation and improvement.

 ## Current Progress
 
 [![demo video](https://img.youtube.com/vi/wTju8pgBZNo/0.jpg)](https://youtu.be/wTju8pgBZNo)


## Setup Instructions

1) Install [npm](https://www.npmjs.com/get-npm)
2) Install [expo](https://docs.expo.io/get-started/installation/)
3) Download this repository
4) Run 'pip install -r requirements.txt' from SplitUp directory.
5) Go to SplitUp/app directory and run 'npm install' (This will install all react native dependencies required for the app)
6) Create a web app on firebase console and add your app's API credentials in SplitUp/app/firebase/config.js
7) On firebase console, go to Project settings -> Service Accounts -> Python SDK and generate a new private key. Rename the downloaded json file to 'config.json' and place it in SplitUp/SplitUpServer directory.
8) Start server by going to SplitUp/SplitUpServer and running 'python Server.py'
9) Start app by going to SplitUp/app and running 'npm start' or 'expo start'


## Self-Rubric
|What | Notes|score 0..4<br>(0=no, 2=ok, 4=wow!)|
|-----|------|------|
|Misc | Group members attended tutorial sessions|4|
|Distrbuted dev model: | decisions made by unanimous vote|4|
|| group meetings had a round robin speaking order|4|
|| group meetings had a moderator that managed the round robin|4|
|| group meeting moderator rotated among  the group|4|
|| code conforms to some packaging standard|4|
|| code has can be downloaded from some standard package manager|4|
| |workload is spread over the whole team (one team member is often Xtimes more productive than the others... but nevertheless, here is a track record that everyone is contributing a lot)|4|
|| Number of commits|4|
|| Number of commits: by different people|2|
|| Issues reports: there are many|4|
||  issues are being  closed|4|
|| License: exists|4|
|| DOI badge: exists |4|
||Docs: doco generated , format not ugly |4|
||Docs: what: point descriptions of each class/function (in isolation) |2|
||Docs: how: for common use cases X,Y,Z mini-tutorials showing worked examples on how to do X,Y,Z|2|
||Docs: why: docs tell a story, motivate the whole thing, deliver a punchline that makes you want to rush out and use the thing|4|
||Docs: 3 minute video, posted to YouTube. That convinces people why they want to work on your code.|4|
|| (hard) code conforms to some known patterns |4|
|Tools Matter| Use of version control tools|4|
|| Extensive use of version control tools |4|
|| Repo has an up-to-date requirements.txt file|4|
|| Repo does not have "ignore" files.|4|
||Use of  style checkers |4|
||Extensive Use of  style checkers |2|
|| Use of code  formatters. |4|
|| Extensive Use of code  formatters. |4|
|| Use of syntax checkers. |4|
|| Extensive use of syntax checkers. |4|
|| Use of code coverage |4|
|| Extensive use of code coverage |4|
|| other automated analysis tools|4|
|| Extensive use of  other automated analysis tools|4|
|| test cases exist|4|
|| test cases are routinely executed|4|
| consensus-oriented model| the files CONTRIBUTING.md and CODEOFCONDUCT.md has have multiple edits by multiple people|2|
| | the files CONTRIBUTING.md lists coding standards and lots of tips on how to extend the system without screwing things up|4|
| | multiple people contribute to discussions|4|
|| issues are discussed before they are closed|4|
|| Chat channel: exists|4|
|| Chat channel: is active |4|
|| test cases: a large proportion of the issues related to handling failing cases.|2|
| zero internal boundaries | evidence that the whole team is using the same tools: everyone can get to all tools and files|4|
| | evidence that the whole team is using the same tools (e.g. config files in the repo, updated by lots of different people)|4|
| | evidence that the whole team is using the same tools (e.g. tutor can ask anyone to share screen, they demonstrate the system running on their computer)|4|
| | evidence that the members of the team are working across multiple places in the code base|4|
| low-regressions rule | (hard to judge) features released are not subsequently removed|4|
|short release cycles | (hard to see in short projects) project members are committing often enough so that everyone can get your work|4|
