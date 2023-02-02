Function.prototype._call = function (context, ...args) {
  if (!context) {
    context = globalThis;
  }

  context._func = this;
  const result = context._func(...args);
  context._func = undefined;
  return result;
};
