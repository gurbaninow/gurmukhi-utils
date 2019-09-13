const { expect } = require( 'chai' )

const { toHindi } = require( '../index' )

// Test words
const words = [
  [ 'ਖੋਜ', 'खोज' ],
  [ 'ਹਿਰ', 'हिर' ],
  [ 'ਮਿਲੵਿੋ', 'मिल्यिो' ],
  [ 'ਕੁਲ ਜਨ ਮਧੇ ਮਿਲੵਿੋ ਸਾਰਗ ਪਾਨ ਰੇ ॥', 'कुल जन मधे मिल्यिो सारग पान रे ॥' ],
  [ 'ਤੂ ਪ੍ਰਭ ਦਾਤਾ ਦਾਨਿ ਮਤਿ ਪੂਰਾ ਹਮ ਥਾਰੇ ਭੇਖਾਰੀ ਜੀਉ ॥', 'तू प्रभ दाता दानि मति पूरा हम थारे भेखारी जीउ ॥' ],
  [ 'ਸੋ ਬ੍ਰਹਮੁ ਅਜੋਨੀ ਹੈ ਭੀ ਹੋਨੀ ਘਟ ਭੀਤਰਿ ਦੇਖੁ ਮੁਰਾਰੀ ਜੀਉ ॥੨॥', 'सो ब्रहमु अजोनी है भी होनी घट भीतरि देखु मुरारी जीउ ॥२॥' ],
  [ 'ਜ਼ਨੇ ਪੇਚ ਦਸਤਾਰ ਰਾ ਤਾਬਦਾਦ ॥', 'ज़ने पेच दसतार रा ताबदाद ॥' ],
  [ 'ਸਉਡਿਸਇਸ ਇਸ ਇਸਣੀ ਆਦਿ ਬਖਾਨਿ ਕੈ ॥', 'सउडिसइस इस इसणी आदि बखानि कै ॥' ],
  [ 'ਅਜ਼ੋ ਗਸ਼ਤਾ ਹਰ ਜ਼ੱਰਰਾ ਖ਼ੁਰਸ਼ੈਦ ਤਾਬ ॥੯੬॥', 'अज़ो गशता हर ज़ररा क़ुरशैद ताब ॥९६॥' ],
  [ 'ਹਮਾ ਸਾਇਲਿ ਲੁਤਫ਼ਿ ਹਕ ਪਰਵਰਸ਼ ॥', 'हमा साइलि लुतफ़ि हक परवरश ॥' ],
  [ 'ਸੁ ਬੈਠਿ ਇਕੰਤ੍ਰ ॥੫੭੮॥', 'सु बैठि इकंत्र ॥५७८॥' ],
  [ 'ਇਤਿ ਸ੍ਰੀ ਬਚਿਤ੍ਰ ਨਾਟਕੇ ਮਨੁ ਰਾਜਾ ਕੋ ਰਾਜ ਸਮਾਪਤੰ ॥੧॥੫॥', 'इति स्री बचित्र नाटके मनु राजा को राज समापतं ॥१॥५॥' ],
  [ 'ਢਾਕਨਹਾਰੇ ਪ੍ਰਭੂ ਹਮਾਰੇ ਜੀਅ ਪ੍ਰਾਨ ਸੁਖਦਾਤੇ ॥', 'ढाकनहारे प्रभू हमारे जीअ प्रान सुखदाते ॥' ],
  [ 'ਮੰਤ੍ਰੁ', 'मंत्रु' ],
  [ 'ਤਿਸੁ ਵਿਣੁ ਸਭੁ ਅਪਵਿਤ੍ਰੁ ਹੈ ਜੇਤਾ ਪੈਨਣੁ ਖਾਣੁ ॥', 'तिसु विणु सभु अपवित्रु है जेता पैनणु खाणु ॥' ],
  [ 'ਸੋਢੀ ਸ੍ਰਿਸ੍ਟਿ ਸਕਲ ਤਾਰਣ ਕਉ ਅਬ ਗੁਰ ਰਾਮਦਾਸ ਕਉ ਮਿਲੀ ਬਡਾਈ ॥੩॥', 'सोढी स्रिस्टि सकल तारण कउ अब गुर रामदास कउ मिली बडाई ॥३॥' ],
  [ 'ਭੰਜਨ ਗੜ੍ਹਣ ਸਮਥੁ ਤਰਣ ਤਾਰਣ ਪ੍ਰਭੁ ਸੋਈ ॥', 'भंजन गढ़ण समथु तरण तारण प्रभु सोई ॥' ],
  [ 'ਰਾਗੁ ਗਉੜੀ ਥਿਤੰੀ ਕਬੀਰ ਜੀ ਕੰੀ ॥', 'रागु गउड़ी थितीं कबीर जी कीं ॥' ],
  [ 'ਹੁਕਮੈ ਅੰਦਰਿ. ਸਭੁ ਕੋ; ਬਾਹਰਿ ਹੁਕਮ. ਨ ਕੋਇ ॥', 'हुकमै अंदरि. सभु को; बाहरि हुकम. न कोइ ॥' ],
]

describe( 'toHindi()', () => {
  words.map( ( [ unicode, hindi ] ) => it( `should convert '${unicode}' to '${hindi}'`, () => {
    expect( toHindi( unicode ) ).to.equal( hindi )
  } ) )
} )
