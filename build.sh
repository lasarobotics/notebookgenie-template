#!/bin/bash

npm install
bower install
rm -rf dist #The dist/ folder is currently hardcoded! Do not move the destination files!
gulp
