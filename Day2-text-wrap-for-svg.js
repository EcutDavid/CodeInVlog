function createTspan() {
  var tspan = document.createElementNS("http://www.w3.org/2000/svg", 'tspan')
  tspan.setAttribute('font-size', 20)
  tspan.setAttribute('x', 0)
  tspan.setAttribute('dy', 0)
                     
  return tspan                
}

function wrap(dom, width) {
  var words = dom.innerHTML.split(/\s/g)
      .filter(function(d) { return d !== ''})
      .reverse(),
      tspan = createTspan(),
      dy = 20,
      word = '',
      line = []
  
  dom.innerHTML = ''
  dom.appendChild(tspan)
  while(word = words.pop()) {
    line.push(word)
    tspan.innerHTML = line.join(' ')
    if(tspan.getComputedTextLength() > width) {
      line.pop()
      tspan.innerHTML = line.join(' ')
      line = [word]
      tspan = createTspan()
      tspan.setAttribute('dy', dy)
      dom.appendChild(tspan)
    }
  }
  
}

//dom looks like:
// <svg  height=400>
//   <text y=20 width=200 height=400>
//     That's how I wrap text in svg, I'm David, thanks for your time, I'll upload the code to github.
//   </text>
// </svg>
wrap(document.querySelector('text'), 80)
