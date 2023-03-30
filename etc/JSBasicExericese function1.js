function greet(countryCode){
  switch (countryCode) {
    case 'en': return 'Hi'
    case 'fr': return 'Salut'
    case 'pt': return 'Ola'
    case 'de': return 'Hallo'
    case 'sv': return 'Hej'
    case 'af': return 'Haiii'
  }
  
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'



function extractLanguage(locale) {
  return locale.split('_')[0];
}
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'


function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
  
  
               
}
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'


function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  
  switch (region) {
    case 'US': return 'Hey';
    case 'GB': return 'Hello';
    case 'AU': return 'HOwdy';
      default : return greet(language);
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'