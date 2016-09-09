import css     from "./styles.css"
import React   from "react"
import Counter from "../Counter"
import Form    from "../Form"
import update  from "../__lib__/update"
import unset   from "../__lib__/unset"
import set     from "../__lib__/set"
import guid    from "../__lib__/guid"



export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counters:{
        "bob": { id:"bob", count:5, name:"bob the builder"},
        "pat": { id:"pat", count:4, name:"postman pat" },
      }
    }
  }

  componentDidMount    () { this.mount = true }
  componentWillUnmount () { this.mount = false }

  add_counter (name, callback) {
    if (name === "") return
    var id = guid()
    return this.mount && this.setState(set(["counters", id], { id, name, count:0, ts:+new Date() }), callback)
  }

  del_counter (id) { return this.mount && this.setState(unset(["counters", id])) }
  inc_counter (id) { return this.mount && this.setState(update(["counters", id, "count"], v => v + 1)) }
  dec_counter (id) { return this.mount && this.setState(update(["counters", id, "count"], v => v - 1)) }

  render() {
    var { counters } = this.state

    counters = Object.keys(counters).map(id => ({
      ...counters[id],
      onInc: this.inc_counter.bind(this, id),
      onDec: this.dec_counter.bind(this, id),
      onDel: this.del_counter.bind(this, id),
    })).sort((a, b) => b.ts - a.ts)

    return <div className={ css.App }>
      <div className={ css.Wrapper }>
        <div className={ css.Title }>
          Counters{ counters.length > 0 && `: ${ counters.length }` }
        </div>
        <Form onSubmit={ this.add_counter.bind(this) }/>
        { counters.length > 0 && <div className={ css.Counters }>
          { counters.map(Counter) }
        </div> }
        { counters.length > 0 && <div className={ css.Total }>
          <span className={ css.Total_label }>Total:</span>
          <span className={ css.Total_count }>{ counters.map(d => d.count).reduce((a, b) => a + b, 0) }</span>
        </div> }
      </div>
    </div>
  }
}
