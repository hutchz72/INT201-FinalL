//65130500072 Name:Varittorn Siriwatcharakul
function addNewProduct() {
    let productInput = document.getElementById('product-input')
    const newDiv = document.createElement('div')
    const productvalue = document.getElementById('product-input').value
    newDiv.setAttribute('id', productInput.value)
    newDiv.setAttribute('class', 'product-item')
    const Parent = document.getElementById('product-list')
    const pEle = document.createElement('p')
    const pele = Parent.appendChild(pEle)
    const removeBut = document.createElement('button')
    removeBut.setAttribute('id', 'Go-remove')
    removeBut.textContent = 'Remove'
    const addbutton = document.getElementById('add-button')
    const removeButton = Parent.appendChild(removeBut)
    pEle.textContent = productvalue
    removeButton.addEventListener('click', removeProduct)
    addbutton.addEventListener('click', () => productInput.value ="")
}

function removeProduct(productId) {
    const remove = document.getElementByname('p')
    remove.removeChild('p')
}

function removeAllProduct() {
    const parent = document.getElementById('product-list')
    const body = document.body
    body.removeChild(parent)
    const divtwo = document.createElement('div')
    divtwo.setAttribute('id', 'product-list')
    body.insertBefore(divtwo)
}

function registerEvent() {
    document.getElementById('add-button').addEventListener('click', addNewProduct)
    document.getElementById('removeAll-button').addEventListener('click', removeAllProduct)
}

registerEvent()
