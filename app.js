const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const adding = (todo) =>{
    const html=`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>
        `;
        list.innerHTML+=html;
};

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    //console.log(todo);
    if(todo.length>0)
    {
     adding(todo);
     addForm.reset();
    }
});

//Delete todo
list.addEventListener('click',e =>{
    if(e.target.classList.contains('delete'))
     e.target.parentElement.remove();
});

//search
const search=document.querySelector('.search input');
search.addEventListener('keyup',e =>{
    console.log(e.target.value);
    const todos=document.querySelectorAll('li');
    todos.forEach(el =>{
        if(!el.textContent.toLowerCase().includes(e.target.value.trim().toLowerCase()))
         el.classList.add('filtered');
    });
    todos.forEach(el =>{
        if(el.textContent.toLowerCase().includes(e.target.value.trim().toLowerCase()))
         el.classList.remove('filtered');
    });
});