let video=document.querySelector("video");

let contraint={
    video:true,
    audio:true
}
navigator.mediaDevices.getUserMedia(contraint)
.then((stream) =>
{
    video.srcObject=stream;

})
