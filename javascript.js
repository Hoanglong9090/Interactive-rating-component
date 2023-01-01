var sta = document.querySelectorAll("#icon-star > li");
var num;
if (sta.length > 0) {
  sta.forEach(item => item.addEventListener('click', function() {
    item.style.backgroundColor = 'hsl(25, 97%, 53%)';
    item.style.color = 'white';
    num = item.innerText;
  }));
}
var sub = document.getElementById('btn-submit');
sub.addEventListener("click", function() {
  document.getElementById('container-rating').style.display = 'none';
  document.getElementById('container-thank').style.display = 'table';
  document.getElementById('selected').innerHTML = num;
});
