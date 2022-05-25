const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');

//disable checkbox
checkbox.disabled=true;
submitBtn.disabled=true;


const elements = document.querySelectorAll('.element');
const selectColor = document.getElementById('SelectColor');



//Assign color to elements
elements.forEach(function(element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

/*Something about the above code causes the last element to be the color to be picked. Not really random. */

//Generate random color
function getRandomColor(){

const letter = '0123456789ABCDEF'
let color = '#';
for(let i=0; i<6; i++) {
    color += letter[Math.floor(Math.random() * 16)];

}
return color;
}
//getRandomColor function returns a random hexidecimal with '#' in front of it


//Check if right color
elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            alert('You Are Hooman!');
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success')
        }else{
            alert('Please verify that you are hooman');
            location.reload(true);            
        }
    });
});

