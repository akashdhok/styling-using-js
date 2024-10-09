function output()
{
    let str = document.querySelector('#str').value
    let count = 0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===" ")
        {
            count = count + 1
        }
    }
    document.querySelector('#answer').innerHTML = count;
   return false
}