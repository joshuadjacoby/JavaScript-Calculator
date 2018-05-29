$('document').ready(function(){
  let value = '0';
  let stored = '';
  let newValue = false;
  $('button').on('click', function(e){
    switch (e.currentTarget.value) {
      case 'ac':
        value = '0';
        stored = '';
        break;
      case 'c':
        value = '0';
        $('#clear').html('AC');
        $('#clear').val('ac');
        break;
      case '.':
        if (!value.includes('.')) {
          value += '.';
        }
        break;
      case '%':
        value /= 100;
        break;
      case 'pm':
        value /= -1;
        break;
      case '/':
      case '*':
      case '+':
      case '-':
        if (!stored) {
          stored = value + e.currentTarget.value;
        } else {
          stored += value + e.currentTarget.value;
        }
        newValue = true;
        break;
      case '=':
        value = eval(stored + value);
        value = Math.round(value * 100) / 100;
        stored = '';
        newValue = true;
        break;
      default:
        if (newValue || value === '0' || value == 'Too Long') {
          value = e.currentTarget.value;
          newValue = false;
        } else {
          value += e.currentTarget.value;
        }
        break;
    } 
    value = value.toString();
    if (value.length > 10) {
      value = 'Too Long';
    }
    $('#screen').html(value);
    if (value !== '0') {
      $('#clear').html('C');
      $('#clear').val('c');
    }
  });
});