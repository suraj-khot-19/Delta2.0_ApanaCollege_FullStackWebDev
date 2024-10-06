let todos = [];

let choice = prompt('enter choice :')
while (true) {
    // quite
    if (choice === 'quite') {
        console.log("quiting app")
        break;
    }

    // other
    if (choice === 'add') {
        const newElement = prompt('enter new task:')
        todos.push(newElement);
        console.log("task added");
    }
    else if (choice === 'delete') {
        const deleteIdx = prompt('enter index to delete:')
        todos.splice(deleteIdx, 1);
        console.log("removed element")
    }
    else if (choice === 'list') {
        console.log('----------------------------')
        for (let i = 0; i < todos.length; i++) {
            console.log(i, ' : ', todos[i])
        }
        console.log('----------------------------')
    }
    else {
        alert('please choose correct choice');
    }
    choice = prompt('enter choice :')
}