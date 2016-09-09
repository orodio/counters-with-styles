import update from "./update"

export default (path, value) =>
  update(path, () => value)
