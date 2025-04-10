<h1 align="center">
  <p>
    React Native
  </p>
</h1>
<p align="center">
  <a href="https://rendu-git.etna-alternance.net/module-9980/activity-53344/group-1053825/-/blob/death/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="This project is released under the MIT license." />
  </a>
</p>

Mini diablo game with html5 canvas and javascript

## Contents

- [**Demo**](#-demo)
- [**How to Contribute**](#-how-to-contribute)
- [**Documentation**](#-documentation)
- [**Road map**](#-road-map)
- [**Test your features**](#-test-your-features)
- [**Useful tools**](#️-useful-tools)
- [**License**](#-license)

## 🎮 Demo

Test the demo:  
**http://mitallast.github.io/diablo-js/**

## 👏 How to Contribute

The main purpose of this repository is to continue evolving this project. We want to make contributing to this project as easy and transparent as possible, and we are grateful for contributing bug fixes and improvements. Read below to learn how you can take part in improving this project.

## 📖 Documentation

The map can be found in the `var level`. You can add new value to the array to change the map layout.  

The game work with few `setInterval`.
There is one for the hp regeneration of the player, one for the rendering of the map, one for the movement of the entities.  

Different class can be found to create object like Mob, Object, Wall, Player, etc...

Right now, everything can be found in the [**diablo.js**][d] file.

[d]: https://rendu-git.etna-alternance.net/module-9980/activity-53344/group-1053825/-/blob/main/diablo.js

## 📍 Road map

- **Segment the code**: Export function in different file to make it easier to read.

## 🧪 Test your features

You can use jekyll with ruby to run a local server and test your feature on your computer.  
[**Check the documentation**](https://docs.github.com/fr/enterprise-cloud@latest/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

## ⚒️ Useful tools

Tool for extracting original diablo resources:
https://github.com/mitallast/diablo-js/tree/master/dttool

Tool for calculating and transforming primitive shadow for extracted monster & hero tiles:
https://github.com/mitallast/diablo-js/tree/master/shadowmaker
Builded shadowmaker
https://github.com/mitallast/diablo-js/blob/master/shadowmaker.jar

Some shell scripts for batch update images:
https://github.com/mitallast/diablo-js/blob/master/monsters/make.sh
https://github.com/mitallast/diablo-js/blob/master/monsters/rename.sh

More information you can find at original research from blizzhackers:
http://www.blizzhackers.cc/viewtopic.php?f=182&t=370174&start=0

## 📄 License

This project is MIT licensed, as found in the [**LICENSE**][l] file.

[l]: https://rendu-git.etna-alternance.net/module-9980/activity-53344/group-1053825/-/blob/main/LICENSE