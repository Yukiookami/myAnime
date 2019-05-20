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

export function postProcessing(markedHTML) {
  return markedHTML
    .replaceAll('<p>', '')
    .replaceAll('</p>', '')
    .replaceAll('-lightgreen-<br>', '<div class="article lightgreen">')
    .replaceAll('-lightblue-<br>', '<div class="article lightblue">')
    .replaceAll('<br>-end-', '</div>')
    .replaceAll('<a href', '<a target="blank" href')
    .replace(/(<img src="(.+?)".*?>)/g, `<a href="$2" class="highslide" onclick="return hs.expand(this, hs.galleryOptions)">$1</a>`)
}
