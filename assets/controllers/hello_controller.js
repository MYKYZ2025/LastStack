import { Controller } from '@hotwired/stimulus';
import JSConfetti from 'js-confetti';

export default class extends Controller {
    connect(){
        this.element.textContent = 'Hello Stimulus!';
    }
}