# DnD Initiative Tracker

## Convert project from Expo to React Native CLI

*You won't have to do this again, it's already committed. For historical reference only.*

You can't initialize a new react native project in a folder that already exists. Create an empty project in a new folder, then copy its contents to your existing Expo project. 

    $ cd ~/projects && ls
    dnd-init-tracker

    $ npx react-native init dnd_init_tracker
    $ ls
    dnd-init-tracker  dnd_init_tracker

    # Save your old dependencies
    $ cp dnd-init-tracker/package.json package.json.bak

    # Remove your old installed packages 
    $ rm -r dnd-init-tracker/node_modules

    # Delete the default App.js
    $ rm dnd_init_tracker/App.js

    # Copy everything from the new project into the old project
    $ cp -r ./dnd_init_tracker/* ./dnd-init-tracker

Manually add back dependencies to new package.json, then:

    $ cd dnd-init-tracker
    $ npm install

Now you can run the app with:

    npx react-native start
    # Leave running, open a new terminal...
    npx react-native run-android

Remember to use java 11 when compiling!

    # in arch linux
    sudo archlinux-java set java-11-openjdk

