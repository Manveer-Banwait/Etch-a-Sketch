const container = document.querySelector('.grid-container')
const buttonContainer = document.querySelector('.buttons')
const resize = document.createElement('button')
const clear = document.createElement('button')
const erase = document.createElement('button')
const drawButton = document.createElement('button')
buttonContainer.appendChild(drawButton)
buttonContainer.appendChild(resize)
buttonContainer.appendChild(clear)
buttonContainer.appendChild(erase)
drawButton.innerText="Draw"
clear.innerText="Clear"
resize.innerText ="Resize";
erase.innerText = "Erase"
gridGen(16,16)//initializes the program by invoking a 16 by 16 grid


//generates the grid when 2 numbers are inputted
function gridGen(column, row) {
    for(let i = 0; i< (column *row); i++){

        const div = document.createElement('div')
        div.style.border = '1px solid black'
        div.style.background = 'silver;'
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`
        container.appendChild(div).classList.add('box')
        
        draw()        
    }
    //sends the length of rows, and columns to roundCorners, for rounded edges
    roundCorners(column)

    //gives a silver background to each created div element
    const gray = document.querySelectorAll('.box')
    gray.forEach(function(div){
        div.style.background='silver'
    })
}

//makes background colour silver to convey the illusion of erasing
erase.addEventListener('click', ()=>{

    const eraseBox = container.querySelectorAll('.box')       
    eraseBox.forEach((div)=>{
        div.addEventListener('mouseover', ()=>{
            div.style.background= 'silver'
            erase.style.background= 'green'
        })        
    })   
})

//calls the draw function
drawButton.addEventListener('click', ()=>{   
    draw()
})

//makes every div silver
clear.addEventListener('click', ()=>{
    const clearContainer = container.querySelectorAll('div')
    clearContainer.forEach((div)=>{
    div.style.background='silver';
})
})

//creates, and gives functionality to the resize button
resize.addEventListener('click', ()=>{
    let size = prompt("Enter a size (1-100)")
    // forces user to stay within the alotted grid range of 40
    if (size>40){
        while (size>40){
            size = prompt("Only between 1-40")
        }       
    }

    //removes the previous grid to make space for the new one 
    const boxContainer = container.querySelectorAll('div')    
    boxContainer.forEach(function(div) {
        div.remove();
    })     

    //forwards newly selected size to the gridGen function
    gridGen(size,size)
   
})

//gives mouse hover functionality to the divs within the container
function draw(){
const box = document.querySelectorAll('.box')
box.forEach((div)=>{
    div.addEventListener('mouseover', ()=>{
        div.style.background =  'black'       //changes colour of div on hover
    })
})
}

//corner rounding function
function roundCorners(position){
    const roundBox = document.querySelectorAll('.box')
    //takes `column` as a parameter, and uses it to find `position` of the corners
    roundBox[0].style.borderRadius= '50% 0% 0% 0% ';
    roundBox[position-1].style.borderRadius= '0% 50% 0% 0%';
    roundBox[position*position-1].style.borderRadius= '0% 0% 50% 0%';
    roundBox[position*position-position].style.borderRadius= '0% 0% 0% 50%';
}
 




