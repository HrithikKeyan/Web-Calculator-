function insert(num) {
  document.form.textview.value = documet.form.textview.value + num;
}

function equal() {
  var exp = document.form.textview.value;
  if (exp) {
      document.form.textview.value = eval(exp);
  }
}

function clear() {
  document.form.textview.value = "";
}

function del() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}