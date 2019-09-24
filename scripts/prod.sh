#!/bin/sh
# remove old stuff first
rm -rf ./dist/*
webpack --config webpack/main.config.js