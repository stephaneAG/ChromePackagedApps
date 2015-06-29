(function(){
    
  neatFramework.JSON.loadJSON("json/testdata.json", function(response){
    jsonResponse = JSON.parse(response); // parse the json fetched from the path passed as argument
    // debug the entire json
    console.log(jsonResponse);
    // debug logs
    console.log(jsonResponse.entity);
    console.log(jsonResponse.siret);
    console.log(jsonResponse.address);
    console.log(jsonResponse.city);
    console.log(jsonResponse.invoiceInternalReference);
    console.log(jsonResponse.invoiceExternalReference);
    console.log(jsonResponse.cgiTva[0]);
    console.log(jsonResponse.location);
    console.log(jsonResponse.dates[0]);
    console.log(jsonResponse.signatureInternalEntity);
    console.log(jsonResponse.signatureExternalEntity);
    console.log(jsonResponse.brandInternalLabel);
    console.log(jsonResponse.brandExternalLabel);
    console.log(jsonResponse.tel1);
    console.log(jsonResponse.tel2);
    console.log(jsonResponse.langs[0]);
    console.log(jsonResponse.designationTexts[0]);
    console.log(jsonResponse.designations[0]);
    console.log(jsonResponse.pricingTexts[0]);
    console.log(jsonResponse.pricing[0]);
    console.log(jsonResponse.payementTexts[0]);
    console.log(jsonResponse.payement[0]);
    console.log(jsonResponse.signatureInternalEntityTexts[0]);
    console.log(jsonResponse.signatureExternalEntityTexts[0]);
    console.log(jsonResponse.brandLabelTexts[0]);

    // DEBUG : make use of "Weld.js"
    //weld(document.querySelector('.entity'), jsonResponse.entity);
    weld(document.querySelectorAll('.entity')[0], jsonResponse.entity);
    weld(document.querySelectorAll('.entity')[1], jsonResponse.entity);
    //weld(document.querySelector('.siret'), jsonResponse.siret);
    weld(document.querySelectorAll('.siret')[0], jsonResponse.siret);
    weld(document.querySelectorAll('.siret')[1], jsonResponse.siret);
    //weld(document.querySelector('.address'), jsonResponse.address);
    weld(document.querySelectorAll('.address')[0], jsonResponse.address);
    weld(document.querySelectorAll('.address')[1], jsonResponse.address);
    //weld(document.querySelector('.city'), jsonResponse.city);
    weld(document.querySelectorAll('.city')[0], jsonResponse.city);
    weld(document.querySelectorAll('.city')[1], jsonResponse.city);
    weld(document.querySelector('.invoiceInternalReference'), jsonResponse.invoiceInternalReference);
    weld(document.querySelector('.invoiceExternalReference'), jsonResponse.invoiceExternalReference);
    //weld(document.querySelector('.cgiTva'), jsonResponse.cgiTva); // array
    weld(document.querySelector('.cgiTva'), jsonResponse.cgiTva[0]); // works fine, but we want an array here ;p
    weld(document.querySelector('.location'), jsonResponse.location);
    weld(document.querySelector('.date'), jsonResponse.dates[0]); // array
    //weld(document.querySelector('.date'), jsonResponse.dates); // array
    weld(document.querySelector('.signatureInternalEntity'), jsonResponse.signatureInternalEntity);
    weld(document.querySelector('.signatureExternalEntity'), jsonResponse.signatureExternalEntity);
    //weld(document.querySelector('.brandInternalLabel'), jsonResponse.brandInternalLabel);
    //weld(document.querySelector('.brandExternalLabel'), jsonResponse.brandExternalLabel);
    weld(document.querySelector('.tel1'), jsonResponse.tel1);
    weld(document.querySelector('.tel2'), jsonResponse.tel2);
    //weld(document.querySelector('.lang'), jsonResponse.langs); // array
    //weld(document.querySelector('.designationText'), jsonResponse.designationTexts); // array
    //weld(document.querySelector('.designation'), jsonResponse.designations); // array
    //weld(document.querySelector('.pricingText'), jsonResponse.pricingTexts); // array
    //weld(document.querySelector('.pricing'), jsonResponse.pricing); // array
    //weld(document.querySelector('.payementText'), jsonResponse.payementTexts); // array
    //weld(document.querySelector('.payement'), jsonResponse.payement); // array
    //weld(document.querySelector('.signatureInternalEntityText'), jsonResponse.signatureInternalEntityTexts); // array
    //weld(document.querySelector('.signatureExternalEntityText'), jsonResponse.signatureExternalEntityTexts); // array
    //weld(document.querySelector('.brandLabelText'), jsonResponse.brandLabelTexts); // array
    
  });
      
})();