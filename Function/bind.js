Function.prototype._bind = function (context, ...args1) {
  if (!context) {
    context = globalThis;
  }

  return (...args2) => {
    context._func = this;
    const result = context._func(...args1, ...args2);
    context._func = undefined;
    return result;
  };
};
