import css    from "./styles.css"
import React  from "react"
import Button from "../Button"
import Icon   from "../Icon"


export default (props) => {
  var {
    name  = "",
    count = 0,
    id,
    onDel,
    onInc,
    onDec,
  } = props

  return <div key={ id } className={ css.Counter }>
    <Button onClick={ onDel } icon="close"/>
    <strong className={ css.Name }>{ name }</strong>
    <Button onClick={ onDec } icon="minus"/>
    <strong className={ css.Count }>{ count }</strong>
    <Button onClick={ onInc } icon="plus"/>
  </div>
}
