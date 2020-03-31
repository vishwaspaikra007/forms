//initial setup for vishForms
vishInitForm();
function vishInitForm() {
    let forms = document.querySelectorAll('.vishForms')
    forms.forEach(form => {
        if(form.classList.contains('vishClassicForm'))
            implementVishClassicForm(form);
    });
}

function implementVishClassicForm(form) {
    for(let i=0;i<form.elements.length;i++) {
        if(form.elements[i].type == 'submit')
            continue;
        let ele = form.elements[i];
        let span = document.createElement('span');
        let label = document.createElement('label');
        span.innerText = ele.getAttribute('vishText1');
        if(!ele.id)
            ele.setAttribute('id', ele.name)
        ele.setAttribute('onfocus', 'vishClassicFormSpanMoveUp(this)');
        ele.setAttribute('onblur', 'vishClassicFormSpanMoveDown(this)');
        label.setAttribute('for', ele.name);
        label.append(ele);
        label.append(span);
        form.insertBefore(label, form.elements[i])
        form.removeChild(form.childNodes[i + 1]);
    }

}
// for vishClassicForm
checkInput();

function checkInput() {
    let input = document.querySelectorAll('input')
    input.forEach(x => {
    if(x.value && x.type != "submit" && x.id != "userId")
        check(x);
    })
}

function vishClassicFormSpanMoveUp(ths) {
    console.log(ths)
    ths.style.border = "2px solid black";
    let eleSpan = document.querySelector('#' + ths.id + ' + Span');
    // eleSpan.innerHTML = eleSpan.attributes.textAfterEntry.value
    eleSpan.style.top = '-60px';
    eleSpan.style.color = 'black';
    ths.style.color = "black";
}
function vishClassicFormSpanMoveDown(ths) {

    ths.style.border = "2px solid grey";
    let eleSpan = document.querySelector('#' + ths.id + ' + Span');
    if(ths.value == "") {
        eleSpan.style.top = '-28px';
        // eleSpan.innerHTML = eleSpan.attributes.textBeforeEntry.value
    }
    eleSpan.style.color = 'gray';
    ths.style.color = "grey";

}
function check(ths) {

    console.log("hello")
    moveUp(ths);
    // if(!ths.value)
    moveDown(ths);
    
}

// to select an element
function select(ele) {
    return document.querySelector(ele);
}