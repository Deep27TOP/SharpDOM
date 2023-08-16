//console.dir(document)
// console.log(document.title)
// console.log(document.domain)
// console.log(document.URL)
//console.log(document.all)

// add> commit> push> (check using log id)

var form= document.getElementById("addForm");
var itemList= document.getElementById("items");
var filter= document.getElementById("filter");

form.addEventListener("submit", addItem)
itemList.addEventListener("click", removeItem)
filter.addEventListener('keyup', filtering)

function addItem(e){
    e.preventDefault();
    
    var newItem=document.getElementById("item").value;

    let listed =document.createElement("li");
    listed.className= "list-group-item";
   // console.log(listed);

    let value=document.createTextNode(newItem);

    listed.appendChild(value);
    itemList.appendChild(listed);

    var delbut= document.createElement('button')

    delbut.className=" btn btn-danger btn-sm float-right delete";

    delbut.appendChild(document.createTextNode("X") )
    listed.appendChild(delbut)

    itemList.appendChild(listed)
}

function removeItem(e){

    if (e.target.classList.contains('delete') )
    {
        if(confirm("Are You Sure?") )
        {
        var lists= e.target.parentElement;
        itemList.removeChild(lists);
        }
    } 
}
function filtering(e){

    var text= e.target.value.toLowerCase();
    console.log(text)

    var searched= itemList.getElementsByTagName('li')
    Array.from(searched).forEach(function(item){
        var itemName= item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) !== -1)
        {
            item.style.display= "block";
        }
        else
        {
            item.style.display= 'none';    
        }    
    })

}    
 //   console.log(1);
