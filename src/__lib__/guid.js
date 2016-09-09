export default () =>
  (+ new Date() + Math.random() * 999999 |0).toString(36)
