$(document).ready(function(){
  $("button[type='button']").click(function(){
    var button = $(this);
    var data = $(this).data();
    var value = $("input[name='value_sum']").val();
    var value_input = $("input[name='value']").val();
    var total_value = $("input[name='total_sum']").val();
    var type_action = $("input[name='action']").val();
    var first_action = $("input[name='first_action']").val();
    if(data.num){
      number = addNum(data.num, value, total_value, first_action);
      $("input[name='value_sum']").val(number);
      $("input[name='value']").val(number);
    }else if(data.action){
      action(data.action, value);
    }else if(data.equal){
      calculate(type_action,total_value, value_input);
    }else if(data.clear){
      clear();
    }else{
      number = addNum(data.num, value, total_value, first_action);
      $("input[name='value_sum']").val(number);
      $("input[name='value']").val(number);
    }

  });
});

function addNum(num, value, total_value, first_action)
{
  if(value != 'null'){
    number = value+num;
    if(first_action == 'true'){
      addTotal(number);
    }
  }else{
    number = num;
    if(total_value == 'null')
      addTotal(number);
  }
  return number;
}

function action(action, value)
{
  if(value != 'null'){
    switch(action){
      case 'sum':
        $("input[name='action']").val('+');
        $("input[name='value']").val('');
        $("input[name='value_sum']").val('null');
        $("input[name='first_action']").val('false');
        break;
      case 'subtract':
        $("input[name='action']").val('-');
        $("input[name='value']").val('');
        $("input[name='value_sum']").val('null');
        $("input[name='first_action']").val('false');
        break;
      case 'multiply':
        $("input[name='action']").val('*');
        $("input[name='value']").val('');
        $("input[name='value_sum']").val('null');
        $("input[name='first_action']").val('false');
        break;
      case 'division':
        $("input[name='action']").val('/');
        $("input[name='value']").val('');
        $("input[name='value_sum']").val('null');
        $("input[name='first_action']").val('false');
        break;
    }
  }else{
    $('#result').html('A expressão deve começar com um numero!');
  }
}

function sum(first, last)
{
  resetAction();
  var value = parseFloat(first) + parseFloat(last);
  return value;
}

function multiply(first, last)
{
  resetAction();
  var value = parseFloat(first) * parseFloat(last);
  return value;
}

function subtract(first, last)
{
  resetAction();
  var value = parseFloat(first) - parseFloat(last);
  return value;
}

function division(first, last)
{
  resetAction();
  var value = parseFloat(first) / parseFloat(last);
  return value;
}

function resetAction()
{
  $("input[name='action']").val('null');
}

function addTotal(total)
{
  $("input[name='total_sum']").val(total);
}

function showTotal(total)
{
  $('#result').html('Total = '+ total);
}

function calculate(type_action, value, num)
{
  switch(type_action){
    case '+':
      total = sum(value, num);
      addTotal(total);
      showTotal(total);
      break;
    case '*':
      total = multiply(value, num);
      addTotal(total);
      showTotal(total);
      break;
    case '-':
      total = subtract(value, num);
      addTotal(total);
      showTotal(total);
      break;
    case '/':
      total = division(value, num);
      addTotal(total);
      showTotal(total);
      break;
  }
}
function clear()
{
  $("input[name='action']").val('null');
  $("input[name='value']").val('');
  $("input[name='value_sum']").val('null');
  $("input[name='total_sum']").val('null');
  $("input[name='first_action']").val('true'); 
  $('#result').html('');
}
