/*
n            i = 0
catsanddog   catsanddog

             i = 1
             c atsanddog

             i = 2
             ca tsanddog


             i = 9
             catsanddo g

f(n) = f(i) + s.substring(i, n), i from 0 to n - 1

f(0) = [[]]

*/
'use strict';

var wordBreak = function(s, wordDict) {
  var results = {};
  for ( var n = 1 ; n < s.length + 1 ; n++ ){
    results[n] = [];
    wordDict.forEach(function(word){
      if (word.length <= n && s.slice(n - word.length, n) === word){
        results[n].push(n - word.length);
      }
    });
  }

  // remove unbreakable results
  Object.keys(results).forEach(function(key){
    results[key] = results[key].filter(function(position){
      return results[position] && results[position].length || position === 0;
    });
  });

  // get possible sentences by dfs
  var output = [];
  var stack = results[s.length]
    .map(function(obj){
      return [obj];
    });
  while (stack.length){
    var path = stack.pop();
    var current = path.slice(-1)[0];
    if (current === 0){
      output.push(path);
      continue;
    }
    results[current]
      .forEach(function(position){
        var tmpPath = path.slice();
        tmpPath.push(position);
        stack.push(tmpPath);
      });
  }
  return output.map(function(positions){
    positions.sort(function(a, b){
      return a - b;
    });
    return positions
      .map(function(position, i){
        return s.slice(position, positions[i + 1]);
      })
      .join(' ');
  });
};

var dict;
var s;

dict = new Set(['cat', 'cats', 'and', 'sand', 'dog', 'ddog']);
s = 'catsanddog';
console.log(wordBreak(s, dict));

dict = new Set(['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa']);
s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
console.log(wordBreak(s, dict));

dict = new Set(['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa']);
s = 'baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
console.log(wordBreak(s, dict));

dict = new Set(['catsanddog']);
s = 'catsanddog';
console.log(wordBreak(s, dict));

dict = new Set(['eaejgdbihfbjjfjhge','gjjbdh','ifccehe','eifegah','bdidfjhgjegghc','ahggjidijgeih','ejbfaabbifbdc','dggfbaagdei','ggefeiidfdgfbheeddc','fiihageia','bghjejad','ifedijjbhdcbh','hgchjaijdgedegefdh','ggfcfggcj','cfbaf','jheeagbeedfbhfe','decfdhcaeeefjbadhi','ajdfi','icfci','gjifegh','bhdidijbeabe','hcfejh','jahagijifhhehachahe','fgcchjedhehfjbhhca','bfbijjhca','ahdbjfcaddic','bficci','gbhjcb','bgabcbjfheigihijeb','eigaidigdfebiic','hhhedfhichebgfg','hfcecigbe','ahdjcfjcbfedhf','bhgbece','bghhjfjjadehegh','bjeficafagfffbfgc','bgjibcedjigdihcbgij','aecdgihaiebf','fdhifehfjbj','dfbdjbdcj','jbffhffbdjbcec','gdddjb','ahijfabgff','hefecijgf','chgabjedhief','iefbhaj','jieejaicg','dgdajcbj','ejjgiefgbhcbbjd','icibccbhaahidfbgfai','cegcifffciihejbhfb','chfiig','haigcecifdg','eiaca','affaie','agjjhgcfa','igiebffdeccgiejjhe','hiagjibdhhjgbai','bbeaaeaeedjhcjfchg','cbfjjfbefdjf','dgdfj','aejccgehfcicdjehbia','jddfid','jcedfdbiibfdfcih','fdggfa','fjhhiigjifajbfjjgic','hdjhehhehi','idbfj','bdfbdbebbcbgafa','idhehcdjeiedjha','cfbebadcbifaggj','hdhajdhfghg','cdaidi','hbcbdadjbiihbjaj','cfiahf','djccbhjecehebdabecd','gcbga','jafbccfgig','fjjiiiibhhhihbffjfb','daiibgdeb','gagdacdbcch','dgjgi','fjeji','dgfihdheijicia','cjeceadjddje','gaiiccf','hijchdggf','dghcieiddfc','fbedhg','hfbbcgf','eeddjiaeehgdfjbi','hjcbcgif','jebbbid','gihhbcaadfagbg','bcjaghcj','cbifhihfceh','iajbhdae','cdeia','iieeheggj','edaadbifbhjf','ajccaibaehhjahebi','ifhebibej','bcjjcheghejfejc','egbaicigdfbfbhfdb','bjdfbgcha','acdcbdgajfcihcieh','bbfcig','cdbeeifihfeafhf','fcefcgdgjjacebee','jifbhabbccecdeecgc','hfcifb','dhdffgc','cggdcfibahdeg','fhdche','fbbeigcbaehggjddhh','gajfe','haijegfdefhh','gdaad','cjdbjfffgijjggedgi','jdhcfahfagfbdecgh','hiidfadcdagbfde','fjihcbe','gceecgcajacchiiddj','baieifbfhajhdddgj','efehcdacadi','eaegjjdj','ibaajbdjeaffc','egabdcfdh','fcfdeedbiacb','bfhdb','hehfcebcgagdiahjjg','bhdee','igafjghicbajbgceg','ficfhj','daffgjegaf','iahagjhgafhagjigia','cecfdjadajeciabd','fggjahfcabiaa','hjdfbebijdafideafh','hffaajejdfdchfhhh','decdcjfh','cjihcfedgdgghbeh','cgacbbdhg','ieadcibijc','jgffggddga','dabbfcdgefhg','ffiicgdjdcacc','haddgf','ggiggfeifbe','ibgiaebahicddae','ebhdffehfchghddb','gffcbhfbfecjebdcia','ifgagacb','fbcjiaj','ieeifigejfgghe','ghbhacf','aaidfcajdidbcbe','fjbigahadb','dbaefdgcbdbbaijgehh','dfacjddbcfb','ibhfcjdbejdcieaceif','baaaijh','ecigeghfcejbcdgh','afegcigjfdghacdijb','efhidceijdifdigaaag','dgceiegdfddedi','eecidabeeic','hbhcefcfjjdehighica','becfihedbfgcfjfei','icgbf','aaciegifcdddbd','bbciijihcd','cjebghhighehbbdf','dfegaigfacdbfhdihdg','hcbhgfggabebiaa','baigha','caegdjghjhhggb','gbebd','hacdgaicija','gcgdhhacfadbadfhdi','fabajhcbiefaciiejbj','fijeacjhdb','bcdei','ffcfdhcbghdcdjiee','iebifabeejfediiib','ggjhihfic','idddhgfhgigibfj','jahjgijedb','gibchei','febehgcijggbiih','iafhibecfj','aechghjfjjdf','gddieha','gfgccbdihjbedhjid','hecgjeffbef','eabhfgbdjbed','cjichifiddjjdaggeed','hfcbfadcefdcbi','ibhecchfhhdgdcaijae','ifddcefaddjha','hiifdhaeg','behcbbgachhjjdg','ddabfjiacegibch','ddfjjd','ibidjabecfhagjd','ehacjadgaac','bajdggfcche','edjjfjf','geffhdfgicjjjiggad','bebafiea','fjdjicah','bbghbigb','ccifcjhaidgfaaefi','ecajeiaah','jfbggfjbdfg','hbfcj','dbaaagefj','jdighbiheeiaai','ejadiadbbiec','djgighed','ifhiifbhchhfagaej','bhgihfabbbebiichc','agadcdaedhgc','iiabh','bafahbajjjc','bdiafifeedg','dbdifaicdjeeddacg','fjfjfeajbhcafj','cccjgadcjdigdgecb','iighhgea','gfecac','idjifbifcaej','idcggjaf','adbjjihic','hagejdbbbegdh','egcaghjfbejbdfgihcb','fdeejdegc','jadiibeghc','hdiicaaecbdgac','gdgcheghca','jfhjaichba','cjjad','ijijciadh','abafeheaacdggfbef','jgfdfcc','bjabegjeib','cghjiecachh','hfifhfcg','gdaddddhbfd','jabcca','chheefijbcahafdffh','eagja','iijfiffbhiihbc','cfbicajif','hbjdchagjeba','cheacade','jbjagcageiaidffc','iiafgcejf','jgjgcbghcdbdb','abejhbcfbghadgcge','iejjejicggcd','jfdjfbbghaa','idija','fgdjea','hhbgfbjgbfcg','hjgjbcchgfahfadiie','ahgffcaeeahicdjaaa','dbhegejadej','fccdaggchahgfffjf','deccdfbefddeafahj','gieehbiceaegggc','ebgjggehdhfagafgd','iecbahgjddfibjajehj','chcbgdfcjjdaahebgc','jhhfffa','cdccde','gebefjaffb','dghaja','hhgafbfiehfchhif','acjegehedagih','fhceibghdhbhdijddb','cbefh','dicjagccfhcae','igjffh','gabjfigggadebhehj','gfacfchaieefdbjceg','iedjegdb','habfaedfifcdji','dihgaifdiceee','gfeihfgjciiaeeciggi','ajgggdhhadde','daeebehaeihcbjfef','ebcjdcfgddfeb','iajfj','hbijcjecehdgia','fifgecgdiiaidjeej','iibhijbfeidcd','aeaaebbgfjadbbbbc','bijadf','cffhbjabddhfhc','dbgbgcigahi','fhbbh','cfbbccgihhhfah','ihadf','cgdecajejbhjahbigfj','iabahjihigedc','difhfhbjhhbgefha','cdgdaaiigafjfgcdagi','hcajbcfdcji','caebaddeb','gjghebjiciebccfidij','beadichfjigjajfgbef','dggcegibbiajaf','fhghef','iheheejajbjegfhigi','iiciiahhbbdbcb','bgfgjdgei','ejidggbgighcjeabb','ffgcfbfdgdd','gjdbajhgfbcedcdic','ceefb','aabdeiidebcibcabhai','agedbdehf','cahbiagahdhh','jieajjfbdbccda','jbdfjhbjgbfjcdhbie','iahbgeddjigbghiagei','gffccb','chdfebiehfd','ccjcgdhfgah','afjjahdefaai','aiecjhjcbfbcgaef','ecidhgfdiidfgbe','ahjgabgccaaehicbag','fjabdaahhi','cgagjfbifcfjbieai','cjifcijhiij','ibhahbiebfhbag','jgijdfjjcg','jaaehh','acbiib','hgafbd','eddcehedbb','gfcchfgdffgbaab','ifdegjgebcjbd','fijejhebhfhjfid','hfiae','jfdadjdffbcciihaeec','jjiafcff','fddihhbhhi']);
s = 'dgjgiacbiibfjjiiiibhhhihbffjfbiefbhajhefecijgfhcfejhcfbaf';
console.log(wordBreak(s, dict));
