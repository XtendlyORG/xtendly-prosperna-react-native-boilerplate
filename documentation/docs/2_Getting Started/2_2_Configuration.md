---
slug: /Configuration
title: Configuration
---

## Change the appicon

To help generate appicons, you can use an online tool like [appicon](https://appicon.co/) to generate for both iOS and Android all icons and image sets.

### iOS 🍎

To change the appicon of the iOS application, you need to replace all the content of

```
src > ios > *name_of_your_app* > Images.xcassets > AppIcon.appiconset
```

with your appicons generated with [appicon](https://appicon.co/) for example.

### Android 🤖

To change the appicon of the Android application, you need to replace all the content of

```
src > android > app > src > main > res
```

with your appicons generated with [appicon](https://appicon.co/) for example.

---

## Change default name

To change the name of the root file in src folder

```
src > AppName.tsx
```

Change AppName.tsx into the name of your app. Don't forget to change the name in the App.tsx file.
