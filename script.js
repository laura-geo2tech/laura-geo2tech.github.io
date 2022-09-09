function clr()
{
    document.getElementById('result').value = "";
}
function dis(value)
{
    document.getElementById('result').value += value;
    //if(document.getElementById('result').value = "0")
    //    document.getElementById('result').value = "";
    //else    
     //   document.getElementById('result').value += value;
    
}
function solve()
{
    let textareaElement = document.getElementById('history');
    let x = document.getElementById('result').value;
    let y = eval(x);
    clr();
    textareaElement.value = textareaElement.value + x + '=' + y + '\n';
}