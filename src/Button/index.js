import css   from "./styles.css"
import React from "react"
import Icon  from "../Icon"

export default class Button extends React.Component {
  render () {
    var { icon, ...props } = this.props
    return <button className={ css.Button } { ...props }>
      { icon && <Icon type={ icon } className={ css.Icon }/> }
      <span className={ css.Text }>{ this.props.children }</span>
    </button>
  }
}
