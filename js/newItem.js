// addItem.js

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addItemForm').addEventListener('submit', addItem);
});

function addItem(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const name = document.getElementById('newItemName').value;
    const price = document.getElementById('newItemPrice').value;
    const tier = document.getElementById('newItemTier').value;
    const quality = document.getElementById('newItemQuality').value;
    const quantity = document.getElementById('newItemQuantity').value;
    const enchantment = document.getElementById('newItemEnchantment').value;
    const image = document.getElementById('newItemImage').value;
    const category_id = document.getElementById('newItemCategoryId').value;
    const user_id = document.getElementById('newItemUserId').value;

    const newItem = {
        name,
        price,
        tier,
        quality,
        quantity,
        enchantment,
        image,
        category_id,
        user_id
    };

    fetch('/items/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add new item');
        }
        // Hide the modal
        $('#addItemModal').modal('hide');
        // Refresh page or update UI as needed
        location.reload(); // Reload the page to reflect changes
    })
    .catch(error => console.error('Error adding new item:', error));
}
