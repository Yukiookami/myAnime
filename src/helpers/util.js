String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.split(search).join(replacement)
}

export function onElementHeightChange (elm, callback) {
  var lastHeight = elm.clientHeight
  var newHeight;

  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight !== newHeight) callback();
    lastHeight = newHeight;

    if (elm.onElementHeightChangeTimer) {
      clearTimeout(elm.onElementHeightChangeTimer);
    }

    elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}

export function scrollToComment() {
  let hasAC = window.location.href.match(/\/[0-9a-f]{24}#([0-9a-f]{24})/)
  if(hasAC) {
    let hash = hasAC[1]
    let el = document.getElementById(hash)

    if(el) {
      el.scrollIntoView({behavior: "smooth"})
    } else {
      requestAnimationFrame(scrollToComment)
    }
  }
}
