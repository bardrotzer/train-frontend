#!/bin/sh
# remove old stuff first
rm -r ./dist/*
webpack --config webpack/main.config.js