function changeFirstImage(x, image)
{
    if(x==1)
    {
        image.src = 'buttons/Morning.png';
    }

    if(x==2)
    {
        image.src = 'buttons/sunrise-clicked.png';
    }
}

function changeSecondImage(x, image)
{
    if(x==1)
    {
        image.src = 'buttons/Day.png';
    }

    if(x==2)
    {
        image.src = 'buttons/day-clicked.png';
    }
}

function changeThirdImage(x, image)
{
    if(x==1)
    {
        image.src = 'buttons/Night.png';
    }

    if(x==2)
    {
        image.src = 'buttons/sunset-clicked.png';
    }
}

// Function to render your items
// We "call" this function once our fetch method is completed below
// (collection) here is a placeholder (usually called a "parameter") that is the json
const renderItems = (collection) => {
	// Step 1: Decide where we will be inserting HTML into the page
	// We'll store `ul` where the items will be inserted in a variable called collectionList
	const collectionList = document.getElementById('collection');
	
	// Step 2: Iterate through the json/payload we get from the fetch method
	// forEach loops through each item/object in the collection/array
	collection.forEach(item => {
		
		// Option 2) Use “template literals” to create a bundnle of HTML all at once
			// notice the tick marks `` wrapped around everything, with ${variable} used for dynamic content = written in HTML 
			const itemDetails =
				`
					<li  class="list-item" data-typeofmeal="${item.typeofmeal}">
						<img src="${item.posterImage}" class="list-item-image">
						<div class="list-item-content">
                            <p class="name">${item.name}</p>
							<p class="sweetorsavory">Sweet or Savory: <span>${item.sweet_or_savory}</span></p>
							<p class="color">Color: ${item.colour_palette}</p>
							<p class="texture">Texture: ${item.texture}</p>
                            <p class="experience">Experience: ${item.personal_experience}</p>
                            <p class="rating">Rating: ${item.rating}</p>
                            <p class="pairings">Best Pairings: ${item.best_pairings}</p>

						</div>
					</li>
				`;
			
		// Step 4: Insert our new HTML (stored in itemDetails) into the page (before the end the collectionList element )
		collectionList.insertAdjacentHTML('beforeend', itemDetails); 

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }
	})

    // add events on click 

    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('is-active');
      });
    });
  

const filterItems = document.querySelectorAll('.filteritem');

filterItems.forEach(item => {

    item.addEventListener('click', () => {
        // what to do on click 
       const previousActiveButton = document.querySelector('.filteritem.is-active');
       if (previousActiveButton) previousActiveButton.classList.remove('is-active')

       button.classList.add('is-active');

        const buttonMeal = item.getAttribute("data-typeofmeal")
        const buttonState = button.classList.contains('is-active')


if (buttonState == false || buttonMeal == 'All') {

    const hiddenListItems = document.querySelectorAll('.list-item.is-hidden');
    hiddenListItems.forEach(item => {
            item.classList.remove ('is-hidden');
        }); 
} else { 

    listItems.forEach(item => {
        if (item.dataset.meal != buttonMeal) {
            item.classList.add('is-hidden')
        } else {
            item.classList.remove('is-hidden')
        }
    }
        )
}
    
})

})
}


// This is where we tie everything together
// Fetch gets your JSON file…
fetch('data.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		console.log(collection)
		renderItems(collection)
})