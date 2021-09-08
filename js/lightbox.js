const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const videoLight = document.querySelector('.agregar-video');
const contenedorLight = document.querySelector('.imagen-light')
const contenedorVideoLight = document.querySelector('.video-light')



imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})
contenedorVideoLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorVideoLight.classList.toggle('show')
        videoLight.classList.toggle('showVideo')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{
    //console.log(imagen.indexOf("jpg"));
    if(imagen.indexOf("jpg")===9){
        imagenLight.src = imagen;
        videoLight.src="";
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '0';
    }else{
        imagenLight.src ="";
        videoLight.src = imagen;
        contenedorVideoLight.classList.toggle('show')
        videoLight.classList.toggle('showVideo')
        hamburguer.style.opacity = '0';
    }
}
