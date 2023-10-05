const UbahWarna = document.getElementById('UbahWarna');

UbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

const AcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
AcakWarna.appendChild(teksTombol);
AcakWarna.setAttribute('type', 'button');
UbahWarna.after(AcakWarna);

AcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

const sliderBirumuda = document.querySelector('input[name=sliderBirumuda]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderOrange = document.querySelector('input[name=sliderOrange]');

sliderBirumuda.addEventListener('input', function(){
    const r = sliderBirumuda.value;
    const g = sliderHijau.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +', 100)';
})

sliderHijau.addEventListener('input', function(){
    const r = sliderBirumuda.value;
    const g = sliderHijau.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +', 100)';
})

sliderOrange.addEventListener('input', function(){
    const r = sliderBirumuda.value;
    const g = sliderHijau.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +', 100)';
})

document.body.addEventListener('mousemove', function(event){
    // console.log(event.clientX);
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});