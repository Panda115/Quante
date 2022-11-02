import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default function RangeSlider() {

  const [value, setValue] = useState(10)
  return (
    <div className="slider">
      <Slider
        min={0}
        max={100}
        tooltip={false}
        value={value}
        onChange={(v) => setValue(v)}
      />
      <div className="slider-value text-center">{value}%</div>
    </div>
  )
}
