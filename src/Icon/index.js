import React from "react"

var icons = {
  plus:  "M15 22h2v-5h5v-2h-5v-5h-2v5h-5v2h5z",
  minus: "M10 15h12v2H10z",
  close: "M21.7 11.8l-1.5-1.5-4.2 4.3-4.2-4.3-1.5 1.5 4.3 4.2-4.3 4.2 1.5 1.5 4.2-4.3 4.2 4.3 1.5-1.5-4.3-4.2z",
}

var icon = key => {
  return <path d={ icons[key] }/>
}

export default ({ type, ...props }) =>
  type == null
    ? null
    : <svg viewBox="0 0 32 32" width="32px" height="32px" {...props}>
        { icon(type) }
      </svg>
