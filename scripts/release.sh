#!/bin/bash

npm run distAll && \
  cp "./dist/Mundial TV 1.0.0.exe" "./releases/Mundial TV.exe" && \
  cp "./dist/Mundial TV-1.0.0.dmg" "./releases/Mundial TV.dmg" && \
  git add . && \
  git commit -m "Release new version" && \
  git tag -f latest && \
  git push origin master --tags -f








