toggle = document.getElementById("units-toggle");
unit = document.getElementById('unit-system');
temperatures = document.getElementsByName("temperature");
windSpeeds = document.getElementsByName("wind-speed");
precipitations = document.getElementsByName("precipitation");

toggle.addEventListener('change', () => {
  // console.log(toggle.checked);
  if(toggle.checked) {
    unit.innerText = "Metric"
    temperatures[1].checked = true;
    windSpeeds[1].checked = true;
    precipitations[1].checked = true;
  } else {
    unit.innerText = "Imperial"
    temperatures[0].checked = true;
    windSpeeds[0].checked = true;
    precipitations[0].checked = true;
  }
})

details = document.getElementById('units');

document.addEventListener('click', event => {
  if(units.hasAttribute('open')){
    if(!units.contains(event.target)) {
      units.removeAttribute('open');
    }
  }
})