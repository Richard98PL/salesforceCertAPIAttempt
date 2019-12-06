function myFunction(){
    let div = document.getElementById("result");
    
    let link = "http://certification.secure.force.com/certificationsite/services/apexrest/credential?searchString=";
    let IDPiotr = "tIIO/SJ+dSo2SWgXFUW7b5tNdsmyRajbKp0PMnJCizGscFNuhJwiI8elmiwcf;+bu";
    let ID = "whCXOIEC2E+2kpxO14AWUEZO7op3wz6vqGohfpGp80jnQkvwJ8CCRRWVs3DG0hA7";
    let IdPietrekDziwne = "nUpdVuAKL00gfg6BN+S90VKR3fYT+c0XgIh5C6/BgXg+A9KH+4JTQfGKQzQ8c/0M";
    
    let http_request = new XMLHttpRequest();
    http_request.open("GET", "https://cors-anywhere.herokuapp.com/"+link+IdPietrekDziwne);
    http_request.send();
    
    http_request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let answer = JSON.parse(this.response);
            let innerJsonResponse = JSON.parse(answer.data[0].jsonResponse);
            console.log(innerJsonResponse.data[0].RelatedCertificationStatus.records);
            innerJsonResponse.data[0].RelatedCertificationStatus.records.forEach(element => {
                div.innerHTML += element.ExternalCertificationTypeName;
                div.innerHTML += "  -> " + element.CertificationDate + "<br />";
            });
        }
    }  
}


