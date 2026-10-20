#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then echo 'Install Node.js 22+ first.' >&2; exit 1; fi
if [ ! -d node_modules ]; then npm install; fi
npm run check:js
if [ ! -f android/gradlew ] && [ ! -f android/gradlew.bat ]; then npm run android:add; fi
npm run android:sync
cd android
if [ -x ./gradlew ]; then ./gradlew assembleDebug; else gradlew.bat assembleDebug; fi
