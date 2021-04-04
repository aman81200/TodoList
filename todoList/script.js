let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')

function addItem(){
    
    let listItem = $('<li>',{
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done')
    })
        ulTasks.prepend(listItem)
        inpNewTask.val("")
        togglInpBtn()
}

function clearDone(){
    $('#ulTasks .done').remove()
    togglInpBtn()
}

function sortTask(){
    $("#ulTasks .done").appendTo("#ulTasks")
}

function togglInpBtn(){
        btnClear.prop('disabled', inpNewTask.val() == "")
        btnAdd.prop('disabled', inpNewTask.val() == "")
        btnSort.prop('disabled', ulTasks.children().length < 1)
        btnCleanup.prop('disabled', ulTasks.children().length < 1)
}



inpNewTask.on('input', togglInpBtn)

inpNewTask.keypress((e)=>{
    if(e.which == 13) {addItem()}
})

btnClear.click(()=>{
    inpNewTask.val("")
    togglInpBtn()
})

btnCleanup.click(clearDone)

btnSort.click(sortTask)

btnAdd.click(()=>{
    addItem()
})

