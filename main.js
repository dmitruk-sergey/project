function creatBlock() {
let box = document.querySelector('.box') 
let newBlock = document.createElement('div')
newBlock.classList = ('mini')
box.append(newBlock)}
    
function creatBlock2() {
for(let i= 1; i<=3; i++)
{let box = document.querySelector('.box') 
let newBlock = document.createElement('div')
newBlock.classList = ('mini')
box.append(newBlock)}
}