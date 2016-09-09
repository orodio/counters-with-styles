import css    from "./styles.css"
import React  from "react"
import Button from "../Button"
import Icon   from "../Icon"

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.refs.name.value, () => {
      this.refs.name.value = ""
    })
  }

  render () {
    return <form onSubmit={ this.onSubmit } className={ css.Form }>
      <input ref="name" className={ css.Input } placeholder="What would you like to count?"/>
      <Button type="submit" icon="plus"/>
    </form>
  }
}
