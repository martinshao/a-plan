/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  const arrayPath = path.split('/')
  for (const str of arrayPath) {
    if (str == '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if(str != '' && str != '.') {
      stack.push(str)
    }
  }
  if (stack.length <= 0) {
    return '/'
  }
  let ans = ''
  while (stack.length) {
    ans = ans + '/' + stack.shift()
  }
  return ans.toString()
};

const path = "/a//b////c/d//././/.."

simplifyPath(path)