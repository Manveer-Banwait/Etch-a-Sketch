const container = document.querySelector('.grid-container')
const buttonContainer = document.querySelector('.buttons')
const resize = document.createElement('button')
const clear = document.createElement('button')
const erase = document.createElement('button')
buttonContainer.appendChild(resize)
gridGen(16,16)



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
    roundCorners(column)
    const gray = document.querySelectorAll('.box')
    gray.forEach(function(div){
        div.style.background='silver'
    })
        console.log(gray)
}

resize.innerText ="Resize";
resize.addEventListener('click', ()=>{
    let size = prompt("Enter a size (1-100)")
    if (size>100){
        while (size>100){
            size = prompt("Only between 1-100")
        }
       
    }
    const boxContainer = container.querySelectorAll('div')    

    boxContainer.forEach(function(div) {
        div.remove();
    })     
    gridGen(size,size)
   
})

function draw(){
const box = document.querySelectorAll('.box')
box.forEach((div)=>{
    div.addEventListener('mouseover', ()=>{
        div.style.background =  'black'       
    })
})
}

function roundCorners(position){
    const roundBox = document.querySelectorAll('.box')
    console.log(roundBox)
    roundBox[0].style.borderRadius= '50% 0% 0% 0% ';
    roundBox[position-1].style.borderRadius= '0% 50% 0% 0%';
    roundBox[position*position-1].style.borderRadius= '0% 0% 50% 0%';
    roundBox[position*position-position].style.borderRadius= '0% 0% 0% 50%';
}
 




