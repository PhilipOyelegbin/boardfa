// inventory access for a user
var token = sessionStorage.getItem("token")

function inventory() {
  fetch("https://boardfa.vercel.app/api/v1/inventory", {
    headers: {
    'Content-Type': 'application/json',
    "Authorization": token
    },
  })
  .then(resp => resp.json())
  .then(data => {
    if(data.inventory <= 0) {
      document.getElementById('inventories').innerHTML = "Inventory is empty"
    } else {
      const inventoryContainer = document.getElementById('inventories');
      let inventoryHTML = '';
      data?.inventory && data?.inventory.map(list => {
        inventoryHTML += `
          <div class="inventory-item" key=${list._id}>
            <div class="inventory-header">
              <h4>${list.product_name}</h4>
              <p>${list.price}</p>
            </div>
            <p>${list.description}</p>
          </div>
        `
      })
      inventoryContainer.innerHTML = inventoryHTML
    }
  })
}

// create a new inventory
document.getElementById('inventoryForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const product_name = document.querySelector("#product_name").value;
  const price = document.querySelector("#price").value;
  const description = document.querySelector("#description").value;

  const inventoryData = {product_name, price, description}

  fetch("https://boardfa.vercel.app/api/v1/inventory", {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    "Authorization": token
    },
    body: JSON.stringify(inventoryData)
  }).then(resp => {
    if(resp.status !== 201) {
      return alert(`Error: ${resp.statusText}`);
    }
    return alert(`Message: ${resp.statusText}`)
  })
});
