
  function calculateGap () {
    var salary = document.getElementByID('currentSalary').value;
    var payrate = .75 //value
    var math = (salary * 100) / payrate;
    var gap = math.toFixed(2);
    gap = gap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('gap').innerHTML = "Black Women's Salary = $"+payment;
  }

