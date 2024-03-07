// linking the element to a constant 
const cursor = document.getElementById('cursor');

// Listens for every mouse move 
document.addEventListener('mousemove', event => {

    let totalMovement = Math.abs(event.movementX) + Math.abs(event.movementY);
    let finalMovement = Math.max(totalMovement / 10, 1)
    cursor.style.transform = `scale(${finalMovement})`;
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px' ;

})
