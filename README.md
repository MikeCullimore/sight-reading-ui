# Sight-reading UI

Goal: build an app to help improve piano sight-reading skills, starting with scales, arpeggios and broken chords.

## Setup

```
npm i
```

Priority: generate exercises.

```
npx ts-node src/grades.ts
```

## todo

* Deploy to GitHub pages: add to package.json "homepage": "http://mikecullimore.github.io/piano-sight-reading"
* Delegate exercise and SVG generation to separate backend (lilypond-ts)?
* Add screenshot to readme.
* Position scale description top left like performance directions (e.g. allegro).
* Refine next button: position it bottom right.
* Host latest prototype online
    * E.g. [mikecullimore.github.io](https://mikecullimore.github.io/)
* Add image to this readme showing the design/flow: sheet music + MIDI + keyboard input...
* Detect MIDI keyboard events (print to console: copy from existing project).
    * Web MIDI API is not universally supported. Use Node module instead?
* Class (MidiDiffer?) with EventEmitter: initialise with MIDI file for exercise, listen to keyboard input stream, emit feedback messages as events e.g. "Not quite: you missed a G in the left hand."
    * Start with input from QWERTY keyboard?
* Proxy to API in separate project/repo.
* Track progress: store session data.
* Quantify tempo, tempo consistency, shaping/articulation.
* Sequence:
    * Choose random scale.
    * Show image of scale.
    * Listen for MIDI key press events.
    * At first, just look for right notes (MIDI note numbers) in the right order.
* Fix SVG import (see [React docs](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs)).
    * Workaround hack: compress the SVG using [this site](https://jakearchibald.github.io/svgomg/) (default settings) as suggested in [this post](https://github.com/facebook/create-react-app/issues/11770)
    * Next step: try exporting from Inkscape with different settings.
* Configure tooling: Prettier? ES lint?
* Exercise generator given grade.
    * Use Lilypond MIDI output! Can use Lilypond syntax as common input after all!
* Capture relationships between scales e.g. relative minors.

## Useful links

* Use [html-midi-player](https://cifkao.github.io/html-midi-player/) to play (and visualise) MIDI files.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
