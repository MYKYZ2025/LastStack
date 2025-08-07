assets/controllers/index.js
import { Application } from '@hotwired/stimulus'
import CelebrateController from './celebrate_controller'

window.Stimulus = Application.start()
Stimulus.register('celebrate', CelebrateController)
