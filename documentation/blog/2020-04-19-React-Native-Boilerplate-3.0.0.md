---
title: React Native Boilerplate v0.0.1
author: JericoK
author_title: React Native Boilerplate contributor
author_url: https://github.com/JericoK
author_image_url: https://avatars.githubusercontent.com/u/93170504?v=4
description: What's in the box? 📦
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
tags:
  [
    boilerplate,
    starter-kit,
    starter,
    kit,
    react,
    native,
    react-native,
    javascript,
    typescript,
  ]
---

Welcome aboard! 🛥️

As we have active users that uses this boilerplate, we will try to improve communication about updates
we're releasing. It's important for us to give you new reasons to try this boilerplate out!
We would love to have new ideas to make it even more convenient!

To do so, we will post a changelog every major updates. Unlike the changelog in the releases tab, we
will here provide more details and maybe some examples.

In this first post, we will present the current state of this boilerplate.

<!--truncate-->

## Light 🪶 Simple 👌 and Scalable 📏

This boilerplate is the core of every react-native applications we develop at [Xtendly](https://xtendly.com/) and [Prosperna](https://prosperna.com/).
This means that we are the first users! If an issue appear we are the first affected 🥺, that's why this project is actively maintained!

The main idea behind this boilerplate is to have just the necessary and well-known stuff to have a very
"_easy to use_" boilerplate for little and big real world apps.

We don't include components libraries, we don't depend on third-party libraries (like Firebase for example).
It's just a good template project that is build on top of all the accumulated experience of our mobile teams.
It also provides a solid architecture that facilitates separation of concerns between the UI, the state management
and the business logic.
Like that, everyone can add its own touch! 🖌️

🚨 Every decision about the technical stack are made regarding our preferences (every library has his
pros and cons).

## Easy to install 😎

Installation has been facilitated since the v2.0.0, thanks to the use of the react-native-cli and
[custom template](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template).
To run this boilerplate, the only commands you need are

```
npx react-native init AppName --template https://github.com/JericoK/xtendly-prosperna-react-native-boilerplate
yarn start
yarn ios
yarn android
```

That's this simple! 🚀

## Why this boilerplate? 🐙

Before starting this project, we looked for already existing boilerplates.
We've found some, but while many were (and are always) awesome, we did not find what we were
looking for: a **light, scalable, and flexible boilerplate with a great separation of concerns**.

One of the most popular was
[Matt Mcnamee's React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit),
which unfortunately missed Redux middleware and React Navigation.

Digging deeper in the react-native boilerplates (ignoring unmaintained projects),
many popular boilerplates were too opinionated: they
included 3rd party services or very strong architecture choices
that we were not comfortable with.
To name a few:

- [Snowflake](https://github.com/bartonhammond/snowflake) ran with a Hapi Server running on Redhat OpenShift,
- [Apollo's StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is based on GraphQL using Apollo,
- [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) is based on Meteor.

Finally, some did not contain the architecture we were looking for (the separation of concerns),
for example [re-start](https://github.com/react-everywhere/re-start).

One interesting exception was
[Ignite IR Boilerplate "Andross"](https://github.com/infinitered/ignite-andross), but after
consideration we decided not to use it because of the large amount of
unnecessary code/components it provided out of the box.

In 2021, some react-native boilerplates have changed. Let's see what are
the differences:

<table>
    <thead>
    <tr>
        <th align="left">Boilerplate</th>
        <th align="left">Difference from our</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="left">mcnamee/react-native-starter-kit</td>
        <td align="left">
            <ul>
                <li>No React Navigation (react-native-router-flux instead),</li>
                <li>No Typescript support,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">bartonhammond/snowflake</td>
        <td align="left">Seems not maintained anymore (last release was in 2017) 💤</td>
    </tr>
    <tr>
        <td align="left">sysgears/apollo-universal-starter-kit</td>
        <td align="left">
            <ul>
                <li>Is based on GraphQL using Apollo,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">spencercarli/react-native-meteor-boilerplate</td>
        <td align="left">Seems not maintained (no release, last commit was in 2018) 💤</td>
    </tr>
    <tr>
        <td align="left">react-everywhere/re-start</td>
        <td align="left">Seems not maintained (last release was in 2017) 💤</td>
    </tr>
    <tr>
        <td align="left">infinitered/ignite</td>
        <td align="left">
            <ul>
                <li>Specific folders for ignite-cli and boilerplate items,</li>
                <li>MobX instead of Redux,</li>
                <li>Expo ready,</li>
                <li>Reactotron (ignite product) ready,</li>
                <li>Typescript only</li>
            </ul>
        </td>
    </tr>
    </tbody>
</table>

So there is no reason to hesitate : come 🧲, test 🧪 and leave a star ⭐

Thanks for reading, See you for the next release. 🏷️
