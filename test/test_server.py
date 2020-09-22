#!/usr/bin/python3
import os
import sys
from nltk.stem.snowball import SnowballStemmer
from test import dummy_processText


def test_processText():
    userName, amount = dummy_processText("I paid $30 on dinner for Moulik")
    assert userName == "Moulik"
    assert amount == 30
