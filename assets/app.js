/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/alien-greeting.css';
import JSConfetti from 'js-confetti';
import alienGreeting from './lib/alien-greeting.js';

const jsConfetti = new JSConfetti()
jsConfetti.addConfetti()

alienGreeting('Give us all your candy!', false);
console.log('This log comes from assets/app.js - welcome to AssetMapper!');