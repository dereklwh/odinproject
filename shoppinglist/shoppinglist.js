const item = document.querySelector('#item');
const itemButton = document.querySelector('#addItemButton');
const list = document.querySelector('#shoppingList');

itemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteButton = document.createElement('button');
    itemText.textContent = item.value;
    deleteButton.textContent = 'Delete'

    newItem.appendChild(itemText);
    newItem.appendChild(deleteButton);
    
    list.appendChild(newItem);

    item.value = ''; // Clears the input field

    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    });
});