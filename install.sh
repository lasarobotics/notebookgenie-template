#!/bin/bash

npm install
bower install
rm -rf dist
gulp
