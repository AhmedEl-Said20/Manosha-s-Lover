// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },700);

    },1200);

});


// =========================
// قراءة القصيدة
// =========================

fetch("poem.txt")

.then(response => response.text())

.then(text=>{

    const poem=document.getElementById("poem");

    poem.innerHTML="";

    const lines=text.split(/\r?\n/);

    let delay=0;

    lines.forEach(line=>{

        if(line.trim()==="") return;

        const p=document.createElement("p");

        p.textContent=line;

        p.style.animationDelay=delay+"s";

        poem.appendChild(p);

        delay+=0.12;

    });

})

.catch(()=>{

    document.getElementById("poem").innerHTML=`
        <p style="opacity:1;">
            تعذر تحميل القصيدة.
        </p>
    `;

});


// =========================
// زر الرجوع للأعلى
// =========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =========================
// تأثير الظهور أثناء النزول
// =========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".glass,.card").forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s";

    observer.observe(item);

});


// =========================
// نجوم متحركة
// =========================

for(let i=0;i<40;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(3+Math.random()*6)+"s";

    star.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(star);

}


// =========================
// قلوب عائمة عند الضغط
// =========================

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="24px";

    heart.style.pointerEvents="none";

    heart.style.transition="all 1.2s ease";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120px) scale(1.8)";

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },1200);

});


// =========================
// تغيير عنوان الصفحة
// =========================

const titles=[
    "❤️ إلى أجمل امرأة",
    "💌 أهلاً بكِ",
    "🌹 كل هذا من أجلكِ",
    "✨ أحبك"
];

let index=0;

setInterval(()=>{

    document.title=titles[index];

    index++;

    if(index>=titles.length){

        index=0;

    }

},3000);
