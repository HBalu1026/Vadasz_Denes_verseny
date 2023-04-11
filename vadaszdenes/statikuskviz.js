var tomb = []

var neumann=[
    {
        kerdes:"Mikor született Neumann János?",
        valasz1:"1903",
        valasz2:"1905",
        valasz3:"1909",
        jo:"1903"
    },
    {
        kerdes:"Ki volt Neumann János?",
        valasz1:"Matematikus, a számítógép-elmélet és a kvantummechanika megalapítója volt.",
        valasz2:"Kémikus, a periodikus rendszer és a fénytörés elméletének megalapítója volt.",
        valasz3:"Matematikus, a lézeres nyomtató megalkotója és ő rendszerezte alapvető geometriai képletekt.",
        jo:"Matematikus, a számítógép-elmélet és a kvantummechanika megalapítója volt."
    },
    {
        kerdes:"Milyen területeken ért el jelentős eredményeket a matematikában?",
        valasz1:"Véletlenszerűség, játékelmélet, gazdasági matematika és hálózatelmélet",
        valasz2:"Hangtechnika, gravitációs elmélet, és fénytörés.",
        valasz3:"Adatbeküldési eszközök fejlesztése, és építészet.",
        jo:"Véletlenszerűség, játékelmélet, gazdasági matematika és hálózatelmélet"
    },
    {
        kerdes:"Hol dolgozott Neumann János a második világháború után?",
        valasz1:"Az amerikai Los Alamos-i Nemzeti Laboratóriumban.",
        valasz2:"A Google-nél fejlesztette a keresőmotort.",
        valasz3:"A Nasa-nal röppályákat számolt.",
        jo:"Az amerikai Los Alamos-i Nemzeti Laboratóriumban."
    },
    {
        kerdes:"Mi volt Neumann János vezető szerepe az első digitális számítógép megtervezésekor?",
        valasz1:"Ő maga fejlesztette ki a bináris számrendszer használatát a számítógépekben.",
        valasz2:"Ő végezte el a fizikai feladatok jelentős részét.",
        valasz3:"Ő fejlesztette ki és valósította meg az alapvető logikai műveleteket.",
        jo:"Ő maga fejlesztette ki a bináris számrendszer használatát a számítógépekben."
    }
]

var jedlik = [
    {
        kerdes:"Mikor született Jedlik Ányos?",
        valasz1:"1800",
        valasz2:"1803",
        valasz3:"1805",
        jo:"1800"
    },
    {
        kerdes:"Milyen iskolában tanult Jedlik Ányos?",
        valasz1:"Az Eötvös József Főgimnáziumban tanult, majd Bécsben, a Rajnai Polytechnikumban folytatta tanulmányait.",
        valasz2:"A Fazekas Mihály Gimnáziumban tanult, és a Budapesti ELTE informatikai karán folytatta tanulmányait.",
        valasz3:"A Tóth Árpád középiskolában tanult, és a Pározsi CY Cergy Paris Université-n folytatta tanulmányait.",
        jo:"Az Eötvös József Főgimnáziumban tanult, majd Bécsben, a Rajnai Polytechnikumban folytatta tanulmányait."
    },
    {
        kerdes:"Milyen találmányokat és felfedezéseket köszönhetünk Jedlik Ányosnak?",
        valasz1:"Elektromos motor, a magneto-optikus rotáció és az első porlasztófej.",
        valasz2:"Robbanó motor, mikrofon, és a telefonközpont.",
        valasz3:"Fényképezőgép, forrasztó, és a ledszalag.",
        jo:"Elektromos motor, a magneto-optikus rotáció és az első porlasztófej."
    },
    {
        kerdes:"Milyen elismerést kapott Jedlik Ányos életműve?",
        valasz1:"A Magyar Tudományos Akadémia tagjává választották.",
        valasz2:"Nobel díjat kapott érte.",
        valasz3:"Oscar díjra jelölték.",
        jo:"A Magyar Tudományos Akadémia tagjává választották."
    },
    {
        kerdes:"Milyen szerepet játszott Jedlik Ányos a közoktatás terén?",
        valasz1:"Az ő javaslatára vezették be az elemi fizikát a magyar középiskolák tantervébe.",
        valasz2:"Ő vezettette be a kötelező biológia oktatását a középiskolákba.",
        valasz3:"Az ő javaslata volt a kötelező ének oktatása az általános iskolák tantervébe.",
        jo:"Az ő javaslatára vezették be az elemi fizikát a magyar középiskolák tantervébe."
    }
]

var teller = [
    {
        kerdes:"Mikor született Teller Ede?",
        valasz1:"1908",
        valasz2:"1910",
        valasz3:"1899",
        jo:"1908"
    },
    {
        kerdes:"Hol folytatta tanulmányait Teller Ede a gimnázium elvégzése után?",
        valasz1:"A Budapesti Műszaki Egyetemen.",
        valasz2:"A Bécsi műszaki egyetemen.",
        valasz3:"A Debreceni egyetemen.",
        jo:"A Budapesti Műszaki Egyetemen."
    },
    {
        kerdes:"Miért emigrált az Egyesült Államokba Teller Ede?",
        valasz1:"A náci üldözés elől menekült.",
        valasz2:"A fejlettebb technológiai lehetőségek elérése érdekében.",
        valasz3:"Jobb fizetésért cserébe.",
        jo:"A náci üldözés elől menekült."
    },
    {
        kerdes:"Milyen területeken dolgozott Teller Ede a hidrogénbomba sikere után?",
        valasz1:"Környezetvédelem, űrkutatás és számítógépes technológiák.",
        valasz2:"Mezőgazdaság, biológia és fénytechnikus.",
        valasz3:"Meteorológia, játékfejlesztés és termelés menedzsment.",
        jo:"Környezetvédelem, űrkutatás és számítógépes technológiák."
    },
    {
        kerdes:"Mi volt a Manhattan Terv?",
        valasz1:"A Manhattan Terv az atombomba fejlesztésére irányuló titkos program volt.",
        valasz2:"A Manhattam Tervel egy újabb gazdasági világválságot szerettek volna elkerülni.",
        valasz3:"A Manhattam Terv az alapjaiban akarta megváltoztatni a számítástechnikát.",
        jo:"A Manhattan Terv az atombomba fejlesztésére irányuló titkos program volt."
    }
]

var eötvös = [
    {
        kerdes:"Mikor született Eötvös Lóránd?",
        valasz1:"1848",
        valasz2:"1830",
        valasz3:"1839",
        jo:"1848"
    },
    {
        kerdes:"Mi volt Eötvös Lóránd szakterülete?",
        valasz1:"Fizika és geofizika.",
        valasz2:"Matematika és számítástechnika",
        valasz3:"Biológia és földrajz",
        jo:"Fizika és geofizika."
    },
    {
        kerdes:"Hol tanult Eötvös Lóránd?",
        valasz1:"Budapesti Egyetemen és Berlini Egyetemen.",
        valasz2:"Debreceni Egyetemen és Párizsi Egyetemen.",
        valasz3:"Szegedi Egyetemen és Bécsi Egyetemen.",
        jo:"Budapesti Egyetemen és Berlini Egyetemen."
    },
    {
        kerdes:"Mit fejlesztett ki Eötvös Lóránd, amely ma is világszerte használatos mérőeszköz?",
        valasz1:"Az Eötvös-féle ingát.",
        valasz2:"A hőmérőt.",
        valasz3:"A mérleget.",
        jo:"Az Eötvös-féle ingát."
    },
    {
        kerdes:"Mi történt Eötvös Lóránddal 1910-ben a Nobel-díjjal kapcsolatban?",
        valasz1:"Megkapta a jelölést, de nem nyerte el a kitüntetést.",
        valasz2:"Megkapta a jelőlést, és megnyerte a díjat.",
        valasz3:"Megkapta a jelölést, de utőlag kiderült hogy csak véletlenül.",
        jo:"Megkapta a jelölést, de nem nyerte el a kitüntetést."
    }
]

var irinyi = [
    {
        kerdes:"Mikor született Irinyi János?",
        valasz1:"1817",
        valasz2:"1800",
        valasz3:"1823",
        jo:"1817"
    },
    {
        kerdes:"Ki volt Irinyi János?",
        valasz1:"Magyar vegyész és mérnök volt.",
        valasz2:"Irinyi János.",
        valasz3:"Fizikus és biológus volt.",
        jo:"Magyar vegyész és mérnök volt."
    },
    {
        kerdes:"Milyen problémákat oldott meg Irinyi a biztonsági gyufával?",
        valasz1:"A gyújtószálakkal kapcsolatos problémákat pl.: kémiai robbanások.",
        valasz2:"Sokkal egyszerűbben lehetett meggyújtani.",
        valasz3:"Nem égette meg az embert.",
        jo:"A gyújtószálakkal kapcsolatos problémákat pl.: kémiai robbanások."
    },
    {
        kerdes:"Milyen műszaki és ipari találmányokat fejlesztett még Irinyi?",
        valasz1:"Irinyi kiemelkedő találmánya a forrasztópáka volt.",
        valasz2:"Legnagyobb találmánya a gőzgép volt.",
        valasz3:"Leg ismertebb találmánya a mikrofon volt.",
        jo:"Irinyi kiemelkedő találmánya a forrasztópáka volt."
    },
    {
        kerdes:"Mennyire jelentős Irinyi János munkássága a mai napig?",
        valasz1:"Irinyi János találmányai és felfedezései ma is hasznosak az ipari és kémiai területeken.",
        valasz2:"Irinyi efktette le a kvantumfizika alapjait.",
        valasz3:"Irinyinek köszönhetően jelentős fejlődések történnek a mai napig az orvostudományban.",
        jo:"Irinyi János találmányai és felfedezései ma is hasznosak az ipari és kémiai területeken."
    }
]

var randomSzam = 0
var sorrend=[]  

function sorsol(index){
    if (index == 0) {
        tomb = neumann
    }
    else if (index == 1) {
        tomb = jedlik
    }
    else if (index == 2) {
        tomb = teller
    }
    else if (index == 3) {
        tomb = eötvös
    }
    else if (index == 4) {
        tomb = irinyi
    }
    
    do{
     randomSzam = Math.floor(Math.random() * tomb.length);
    }
    while (sorrend.includes(randomSzam))
    //alert(randomSzam)
    document.getElementById("kerdes").innerHTML = tomb[randomSzam].kerdes
    sorrend.push(randomSzam)
    let sz=''
    sz+='<input type="radio"  name="v1"  id="val1" value="'+tomb[randomSzam].valasz1+'">'+tomb[randomSzam].valasz1+'<br>'
    sz+='<input type="radio" name="v1" id="val2" value="'+tomb[randomSzam].valasz2+'">'+tomb[randomSzam].valasz2+'<br>'
    sz+='<input type="radio" name="v1" id="val3" value="'+tomb[randomSzam].valasz3+'">'+tomb[randomSzam].valasz3+'<br>'
    document.getElementById("valasz").innerHTML = sz
    document.getElementById("inditas").innerHTML = ""
    document.getElementById("kovetkezo").innerHTML = '<button onclick="bekuld()">következő</button>'
    
    //style hozzáadása a kérdések div-hez
    document.getElementById("kerdes").style.border = "#333 3px solid";
    document.getElementById("kerdes").style.borderRadius = "9px";
    document.getElementById("kerdes").style.backgroundColor = "rgba(51, 51, 51, 0.6)";
    document.getElementById("kerdes").style.boxShadow = "#111 1px 1px"

    //style hozzáadása a válaszok div-hez
    //document.querySelectorAll("#valasz").style.backgroundColor = "rgb(1,1,1)";
    
}

var eredmeny = 0

function bekuld(){    
    if (document.getElementById("val1").checked) {
       if ( document.getElementById("val1").value == tomb[randomSzam].jo)
       {
        eredmeny++
       }
    }
    else if (document.getElementById("val2").checked) {
        if ( document.getElementById("val2").value == tomb[randomSzam].jo)
        {
         eredmeny++
        }
    }
    else if (document.getElementById("val3").checked) {
        if ( document.getElementById("val3").value == tomb[randomSzam].jo)
        {
         eredmeny++
        }
    }
    if (sorrend.length == tomb.length) {
        alert("Gratulálunk az eredményedhez! Az elért pontszám: " + eredmeny)
        document.getElementById("kviz").innerHTML = '<button><a href="statikuskviz.html" id="visszatolt">Új kvízt töltök ki</a></button>'
    }
    else{
        sorsol()
    }
}