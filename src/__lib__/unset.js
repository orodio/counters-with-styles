export default (path) => (datum) => {
  datum = Object.assign({}, datum)
  var target = datum

  for (var i = 0; i < path.length - 1; i++) {
    if (undefined===target[path[i]]) target[path[i]] = {}
    target = target[path[i]]
  }

  delete target[path[i]]

  return datum
}
