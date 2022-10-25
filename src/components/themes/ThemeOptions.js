import React from 'react'

import { ThemePicker } from './ThemePicker'

export default function ThemeOptions() {
  return (
    <>
      <div id='theme-button-container'>
        <button className='theme-button' id='wizywig-home' onClick={ThemePicker}>WIZyWIG Default</button>
        <button className='theme-button' id='ocean-spray' onClick={ThemePicker}>Ocean Spray</button>
        <button className='theme-button' id='pumpkin-patch' onClick={ThemePicker}>Pumpkin Patch</button>
        <button className='theme-button' id='rock-quarry' onClick={ThemePicker}>Rock Quarry</button>
        <button className='theme-button' id='fruit-salad' onClick={ThemePicker}>Fruit Salad</button>
        <button className='theme-button' id='wild-flowers' onClick={ThemePicker}>Wild Flowers</button>
      </div>
    </>
  )
}
