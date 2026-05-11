let xmlString=`<?xml version="1.0" encoding="UTF-8"?>
<tattooSalon>
    <masters>
        <master id="1">
            <name>Ира</name>
           <prof>мастер художественной татуировки</prof>
            <style>работает в стиле японии</style>
            <experience>занимается свой профессией 5 лет</experience>
            <education>закончила художественную академию</education>
        </master>
        <master id="2">
            <name>Аня</name>
            <prof>мастер художественной татуировки</prof>
            <style>работает со стилем тату евротреш</style>
            <experience>занимается свой профессией 10 лет</experience>
            <education>закончила художественную академию</education>
        </master>
        <master id="3">
            <name>Света</name>
           <prof>мастер художественной татуировки</prof>
            <style>работает в  стиле трайбл тату </style>
            <experience>занимается свой профессией 9 лет</experience>
            <education>закончила художественную академию</education>
        </master>
    </masters>
</tattooSalon>
`;
function parseAndDisplayXML() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const masters=xmlDoc.getElementsByTagName("master")
    const cardNames=document.getElementsByClassName("team-card-name")
    const cardProf=document.getElementsByClassName("team-card-prof")
     const cardStyle=document.getElementsByClassName("team-card-style")
      const cardExperience=document.getElementsByClassName("team-card-experience")
       const cardEducation=document.getElementsByClassName("team-card-education")
for(let i=0;i<masters.length;++i){
    const name=masters[i].getElementsByTagName("name")[0].textContent
    const prof=masters[i].getElementsByTagName("prof")[0].textContent
    const style=masters[i].getElementsByTagName("style")[0].textContent
    const experience=masters[i].getElementsByTagName("experience")[0].textContent
    const education=masters[i].getElementsByTagName("education")[0].textContent
    cardNames[i].innerHTML=name;
    cardProf[i].innerHTML=prof;
    cardStyle[i].innerHTML=style;
    cardExperience[i].innerHTML=experience;
    cardEducation[i].innerHTML=education;
}
    
  
    
}

parseAndDisplayXML();