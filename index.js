play = document.querySelector(".play_arrow")
prev = document.querySelector(".prev")
forw = document.querySelector(".forw")
aud = document.querySelector(".aud")
search = document.querySelector(".search_input")
body = document.querySelector(".bodyd")
left = document.querySelector(".hero-left")
img = document.querySelector(".hero-right img")
img_name = document.querySelector(".cont h1")
grad = document.querySelector(".grad")

// let ls = ["Gansta's Paradise","Starboy","No Idea x Tell Em","Moonlight","Blinding Lights"]

play.addEventListener("click", function (){
    if (play.innerText == "play_arrow"){
        play.innerText = "pause"
        aud.play()
    }
    else{
        play.innerText = "play_arrow"
        aud.pause()
    }
})

prev.addEventListener("click", function(){
    aud.load()
    if (play.innerText == "play_arrow"){
        play.innerText = "pause"
        aud.play()
    }
    else{
        aud.play()
    }
})

forw.addEventListener("click", function(){
    aud.load()
    if (play.innerText == "play_arrow"){
        play.innerText = "pause"
        aud.play()
    }
    else{
        aud.play()
    }
})

names = ["That's What I Like","24K Magic","What's Up Danger","Blinding Lights","Die for You","The Hills","Starboy","Thriller","They Don't Care About Us"]
num = []
ap = document.querySelectorAll(".detail")
for (let index1 = 0; index1 < ap.length; index1++) {
    newNames = [...names].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0,names.length)
    for (let index = 0; index < names.length; index++) {
        fig = document.createElement("figure")
        imgso = document.createElement("img")
        imgso.setAttribute("src","src/covers/"+newNames[index]+".jpg")
        imgso.setAttribute("alt","Song")
        fig.setAttribute("class","figs")
        figcap = document.createElement("figcaption")
        figcap.append(`${newNames[index]}`)
        fig.append(imgso,figcap)
        ap[index1].append(fig)
    }
}

figs = document.querySelectorAll(".figs")

for(var i = 0;i < figs.length;i++){
    figs[i].firstChild.addEventListener("click", function(e){
        a = e.target.nextSibling.innerText
        img.removeAttribute("src")
        img.setAttribute("src","src/covers/"+a+".jpg")
        img_name.innerText = a
        grad.style.backgroundImage = "url(\"./src/covers/"+a+".jpg\")"
    })
}