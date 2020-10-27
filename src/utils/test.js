import {createApp} from 'vue'

import GlobalTemplate from '../components/globalTemp'

createApp({}).component('g-temp',{
  template: `
  <button>
    You clicked me times.
  </button>
  `
})