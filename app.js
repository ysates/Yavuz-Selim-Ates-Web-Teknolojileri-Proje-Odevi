var formGiris = document.querySelector(".form")
var adsoyad = formGiris["adsoyad"];
var eposta = document.querySelector("#eposta");
var mesaj = formGiris["mesaj"];

let gönder = document.querySelector("#gönder")
let temizle = document.querySelector("#temizle")

gönder.addEventListener("click", e=>{

    e.preventDefault()

    const epostaValue = eposta.value
    const adsoyadValue = adsoyad.value.trim()
 
    if ( epostaValue !="" && adsoyadValue != ""){

        if (/[a-zA-Z0-9_]+@[A-Za-z0-9]+\.[a-zA-Z]+/.test(epostaValue) ){

        eposta.value=""
        adsoyad.value=""
        mesaj.value=""
    
        alert("Mesajınız Başarılı Bir Şekilde Alınmıştır.");

        }else{

            eposta.value=""
            alert("Geçerli bir E-posta adresi yazınız.")
        }

    }else{

        alert("Emailiniz ve Adınız Soyadınız kısımlarını doldurunuz.")
        return false;
    }

})

temizle.addEventListener("click", e=>{

    e.preventDefault()

    eposta.value=""
    adsoyad.value=""
    mesaj.value=""
})
