function p(e, n) {
  var o = {}
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (o[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var t = 0, r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      n.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (o[r[t]] = e[r[t]])
  return o
}
export { p as _ }
//# sourceMappingURL=tslib.es6-6635c9de.js.map
