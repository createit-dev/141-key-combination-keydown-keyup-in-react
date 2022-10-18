# Key combination holding event in ReactJS: Demo
### How to trigger Javascript event using keyboard 2 keys combination (holded)

To detect that keyboard keys are holded - we are using document.addEventListener, which listen to keydown event. keyup event will detect moment when keys are released. 

When ctrlKey and 'm' key are down and pressed – we are adding 'not-animated' CSS class that will stop animation. 

src/Pumpkins.js returns HTML code needed for displaying the page. Animations are CSS only. Article was inspired by codePen demo: https://codepen.io/mariecharpentier/pen/ExLegBy . Thanks author for inspiration!

### Run demo
NodeJS is required to run application. Just type in your terminal:

`npm install`

`npm start`

Demo will open automatically in the browser using http://localhost:3000/ url.

Press (and hold) **CTRL+m** keyboard keys combination to freeze animation!

![](https://github.com/createit-dev/141-key-combination-keydown-keyup-in-react/blob/main/public/images/react-key-combinations-hold.gif)

