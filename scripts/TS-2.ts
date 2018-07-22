
var displayedImage = document.querySelector('.displayed-img') as HTMLImageElement;
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay:HTMLDivElement = document.querySelector('.overlay') as HTMLDivElement;

/* Looping through images */
for(var i = 1;i <= 5;i++ ){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    // newImage.addEventListener('click',function(event){
    //     displayedImage.setAttribute('src',(<HTMLImageElement>event.target).getAttribute('src'));
    // });
}

thumbBar.addEventListener('click',function(event){
    console.log((<HTMLElement>event.target).nodeName);
    if(event.target && (<HTMLElement>event.target).nodeName === 'IMG' ){
        displayedImage.setAttribute('src',(<HTMLImageElement>event.target).getAttribute('src'));
    }
});

/* Wiring up the Darken/Lighten button */
var flag = false;
btn.addEventListener('click',function(){
    if(flag){
        btn.textContent = 'Lighten';
        overlay.style.background = 'rgba(0,0,0,0.5)';
    }else{
        btn.textContent = 'Darken';
        overlay.style.background = 'rgba(0,0,0,0)';
    }
    flag = !flag;
});
