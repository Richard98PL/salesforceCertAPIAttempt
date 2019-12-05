function myFunction(){
    let div = document.getElementById("result");

    
    let link = "http://certification.secure.force.com/certificationsite/services/apexrest/credential?searchString=";
    let ID = "whCXOIEC2E+2kpxO14AWUEZO7op3wz6vqGohfpGp80jnQkvwJ8CCRRWVs3DG0hA7";
    let link2 = "https://certification.secure.force.com/certificationsite/services/apexrest/credential?searchString=rysiek.rogalski@gmail.com";

    let http_request = new XMLHttpRequest();
    http_request.open("GET", "https://cors-anywhere.herokuapp.com/"+link+ID);
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

