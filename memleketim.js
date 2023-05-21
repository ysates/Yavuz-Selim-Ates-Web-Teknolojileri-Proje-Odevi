const kaydır = document.querySelectorAll('.kaydırıcı');
const sağ = document.getElementById('sağ');
const sol = document.getElementById('sol');
const otomatik = true;
const aralıkvakti = 20000;
let aralıkkaydır;

const sağKaydır = () => 
{
    const baslangıcKaydır = document.querySelector('.baslangıc');
    baslangıcKaydır.classList.remove('baslangıc');

    if(baslangıcKaydır.nextElementSibling)
    {
        baslangıcKaydır.nextElementSibling.classList.add('baslangıc');
    }
    else 
    {
        kaydır[0].classList.add('baslangıc');
    }
}

const solKaydır = () => 
{
    const baslangıcKaydır = document.querySelector('.baslangıc');
    baslangıcKaydır.classList.remove('baslangıc');

    if(baslangıcKaydır.previousElementSibling)
    {
        baslangıcKaydır.previousElementSibling.classList.add('baslangıc');
    }
    else 
    {
        kaydır[kaydır.length -1].classList.add('baslangıc');
    }
}

sağ.addEventListener('click', () =>
{
    sağKaydır();
    if (otomatik)
{
    clearInterval(aralıkkaydır);
    aralıkkaydır = setInterval(sağKaydır, aralıkvakti);
}
})

sol.addEventListener('click', () =>
{
    solKaydır();
    if (otomatik)
    {
        clearInterval(aralıkkaydır);
        aralıkkaydır = setInterval(sağKaydır, aralıkvakti);
    }
})

if (otomatik)
{
    aralıkkaydır = setInterval(sağKaydır, aralıkvakti);
}