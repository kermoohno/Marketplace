document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    fetchItems();
});

function fetchItems() {
    fetch('/items')
        .then(response => response.json())
        .then(items => {
            console.log("Items fetched:", items);
            const itemsContainer = document.getElementById('items-container');
            
            let itemCardHTML = ""; // Initialize variable to store item card HTML
            
            items.forEach((item, index) => {
                // If index is even, start a new row
                if (index % 2 === 0) {
                    itemCardHTML += `<div class="row mb-4">`;
                }

                // Add HTML for item card
                itemCardHTML += `
                    <div class="col-md-6">
                        <div class="card">  
                            <div class="row justify-content-center align-items-center">
                                <img src="${item.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="Item Image">
                            </div>    
                            <div class="card-body" style="background-color: #EBC8A0">
                                <h5 class="card-title text-center">${item.name}</h5>
                                <div class="row text-center item-info">
                                    <div class="col">
                                        <p class="card-text">Quality: ${item.quality}</p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text">Enchantment: ${item.enchantment}</p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text">Tier: ${item.tier}</p>
                                    </div>
                                </div>
                                <p class="card-text item-price"><i class="fa-solid fa-coins" style="color: #989ea9;"></i> ${item.price}</p>
                                <p class="card-text item-user">Listed to sale by: ${item.user}</p>
                                <div class="text-end">
                                    <button type="button" class="btn btn-primary btn-sm mr-2" onclick="editItem(${item.id}, '${item.name}', '${item.quality}', '${item.enchantment}', '${item.tier}', ${item.price})">Edit</button>
                                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                // If index is odd or it's the last item, close the row
                if (index % 2 !== 0 || index === items.length - 1) {
                    itemCardHTML += `</div>`;
                }
            });

            // Insert item cards HTML into itemsContainer
            itemsContainer.innerHTML = itemCardHTML;
        })
        .catch(error => console.error('Error fetching items:', error));
}

function editItem(id, name, quality, enchantment, tier, price) {
    document.getElementById('itemId').value = id;
    document.getElementById('itemName').value = name;
    document.getElementById('itemQuality').value = quality;
    document.getElementById('itemEnchantment').value = enchantment;
    document.getElementById('itemTier').value = tier;
    document.getElementById('itemPrice').value = price;
    
    $('#editItemModal').modal('show');
}

function deleteItem(id) {
    console.log("Delete button clicked for item with ID:", id);
    fetch(`/items/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }
        // Refresh page or update UI as needed
        location.reload(); // Reload the page to reflect changes
    })
    .catch(error => console.error('Error deleting item:', error));
}

document.getElementById('editItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const id = document.getElementById('itemId').value;
    const name = document.getElementById('itemName').value;
    const quality = document.getElementById('itemQuality').value;
    const enchantment = document.getElementById('itemEnchantment').value;
    const tier = document.getElementById('itemTier').value;
    const price = document.getElementById('itemPrice').value;

    fetch(`/items/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, quality, enchantment, tier, price })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update item');
        }
        // Hide the modal
        $('#editItemModal').modal('hide');
        // Refresh page or update UI as needed
        location.reload(); // Reload the page to reflect changes
    })
    .catch(error => console.error('Error updating item:', error));
});

