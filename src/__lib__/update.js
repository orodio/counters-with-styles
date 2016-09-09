export default (path, func) => (datum) => {
  datum = Object.assign({}, datum)
  var target = datum

  for (var i = 0; i < path.length - 1; i++) {
    if (undefined===target[path[i]]) target[path[i]] = {}
    target = target[path[i]]
  }

  target[path[i]] = func(target[path[i]])
  return datum
}
