var dice = ['4', '6', '8', '12', '20', '100']

dice.forEach(function (die) {
  var btn = document.getElementById(die)
  btn.addEventListener('click', roll)
  btn.click()
})

function roll (e) {
  var die = Number(e.srcElement.id)
  var num = Number(document.getElementById(die + '-num').value)
  var total = 0
  for (var i = 0; i < num; i++) {
    total += Math.floor(Math.random() * die) + 1
  }
  document.getElementById(die + '-out').value = total
}
