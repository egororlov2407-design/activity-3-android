# Android platform folder

Capacitor's generated native Android project is intentionally not checked in yet: `npm install` could not reach registry.npmjs.org in the preparation environment (DNS error EAI_AGAIN), and no Android SDK is installed here. This folder is a placeholder, not a buildable Gradle project.

On a computer with internet access, Node.js 22+, Android Studio and Android SDK, run from the project root:

```bash
npm install
npm run android:add
npm run android:sync
npm run android:open
```

The Capacitor CLI creates the real `android/` Gradle project. After Android Studio syncs, `npm run android:apk:debug` builds the debug APK.
