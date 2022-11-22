console.log("Let's get this party started!");

async function getGif(q){
    let api_key = 'gywv6hVYMr8EzqxefLldKGS54W3JNV4l';
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search`,{params:{q, api_key } });
    let index = Math.floor(Math.random()*res.data.data.length);
    let gif = res.data.data[index].images.original.url;

    appendGif(gif);

}

function appendGif(gif){
    $('.gifs').append(`<img src="${gif}" width="200 px" height="250">`);
}

function deleteGif(){
    $('.gifs').empty();
}

$("#Submit").on("click",function(){
    getGif($("#SearchBar").val());
});

$("#Delete").on("click",deleteGif);