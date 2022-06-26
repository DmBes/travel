console.log('hello')


var rem =  document.querySelector('.layout-3-column').childNodes;

for (const iterator of rem) {
    console.log(iterator);
    if (iterator.nodeName == '#text')
    {
        iterator.textContent ='';
        }  
    }


