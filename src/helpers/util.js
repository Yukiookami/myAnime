String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.split(search).join(replacement)
}

function onElementHeightChange (elm, callback) {
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

function scrollToComment() {
  let hasArticle = ['detail', 'guide', 'unzip', 'message'].some(path => window.location.pathname.indexOf(path) > -1)
  let hasComment = window.location.hash
  if(hasArticle && hasComment) {
    let hash = window.location.hash.substr(1)
    let el = document.getElementById(hash)

    if(el) {
      el.scrollIntoView({behavior: "smooth"})
    } else {
      requestAnimationFrame(scrollToComment)
    }
  }
}

export {onElementHeightChange}
export {scrollToComment}
