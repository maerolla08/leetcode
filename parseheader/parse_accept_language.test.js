const parse_accept_language = require('./parse_accept_language');
const p4_parse_accept_language = require('./p4_parse_accept_language');

test('parse_accept_language("fr-CA, fr-FR", ["en-US", "fr-FR"]) returns: ["fr-FR"]', () => {
    expect(parse_accept_language("fr-CA, fr-FR", ["en-US", "fr-FR"])).toEqual(["fr-FR"]);
});

test('parse_accept_language("en-US", ["en-US", "fr-CA"]) returns: ["en-US"]', () => {
    expect(parse_accept_language("en-US", ["en-US", "fr-CA"])).toEqual(["en-US"]);
});

test('parse_accept_language("en", ["en-US", "fr-CA", "fr-FR"]) returns: ["en-US"]', () => {
    expect(parse_accept_language("en", ["en-US", "fr-CA", "fr-FR"])).toEqual(["en-US"]);
});

test('parse_accept_language("fr", ["en-US", "fr-CA", "fr-FR"]) returns: ["en-US"]', () => {
    expect(parse_accept_language("fr", ["en-US", "fr-CA", "fr-FR"])).toEqual(["fr-CA", "fr-FR"]);
});

test('parse_accept_language("fr-FR, fr", ["en-US", "fr-CA", "fr-FR"]) returns:  ["fr-FR", "fr-CA"]', () => {
    expect(parse_accept_language("fr-FR, fr", ["en-US", "fr-CA", "fr-FR"])).toEqual(["fr-FR", "fr-CA"]);
});

test('parse_accept_language("en-US, *", ["en-US", "fr-CA", "fr-FR"]) returns:  ["en-US", "fr-CA", "fr-FR"]', () => {
    expect(parse_accept_language("en-US, *", ["en-US", "fr-CA", "fr-FR"])).toEqual(["en-US", "fr-CA", "fr-FR"]);
});

test('parse_accept_language("fr-FR, fr, *", ["en-US", "fr-CA", "fr-FR"]) returns:  ["fr-FR", "fr-CA", "en-US"]', () => {
    expect(parse_accept_language("fr-FR, fr, *", ["en-US", "fr-CA", "fr-FR"])).toEqual(["fr-FR", "fr-CA", "en-US"]);
});

/*****/
test('parse_accept_language("fr-FR;q=1, fr-CA;q=0, fr;q=0.5", ["fr-FR", "fr-CA", "fr-BG"]) returns:  ["fr-FR", "fr-BG", "fr-CA"]', () => {
    expect(p4_parse_accept_language("fr-FR;q=1, fr-CA;q=0, fr;q=0.5", ["fr-FR", "fr-CA", "fr-BG"])).toEqual(["fr-FR", "fr-BG", "fr-CA"]);
});

test('parse_accept_language("fr-FR;q=1, fr-CA;q=0, *;q=0.5", ["fr-FR", "fr-CA", "fr-BG", "en-US"]) returns:   ["fr-FR", "fr-BG", "en-US", "fr-CA"]', () => {
    expect(p4_parse_accept_language("fr-FR;q=1, fr-CA;q=0, *;q=0.5", ["fr-FR", "fr-CA", "fr-BG", "en-US"])).toEqual(["fr-FR", "fr-BG", "en-US", "fr-CA"]);
});