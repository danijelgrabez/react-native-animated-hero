# React Native Animated Hero

React Native screen template which animates hero transition on scroll.
Demo 👉[Expo Snack](https://snack.expo.io/@danijelgrabez/animated-hero).

- Wrapping component which is consisted of navigation, hero and content sections.
- Component has detection for safe area if the application is reviewed from "notch", or "frameless" screens (e.g. iPhoneX)
- Hero component animation happens on scroll:
  - image opacity goes from opaque to transparent (vice versa for gradient opacity)
  - hero section transforms to navigation bar.
  - navigation is position fixed so that user can always reach contextual actions
  - if navigation title is too long, it will be shown in one line, truncated

### Usage
#### Props:
1. `navigationTitle` - Screen navigation title which will appear after user scroll pass hero section
2. `navigation` - Screen navigation component
3. `heroImageUrl` - Path to hero image which will be displayed initially.
4. `heroContent` - Content which will be passed to the hero section (e.g. title, subtitle, tour date)

```js
  <Screen
    navigationTitle="Hello World"
    navigation={<ScreenNavigation />}
    heroContent={<HeroContent />}
    heroImageUrl={require('./cat.jpg')}
  >
    ...
    Screen content goes here
    ...
  </Screen>
```
