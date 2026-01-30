const { 
    formatName, 
    capitaliseFirst,
    formatMediumsAndSurfaces,
} = require("../src/utils/utils.js");

describe("Given a name as a string, surrplant all underscores with spaces", () => {
    test("Given 'Geoff_Bailey', return Geoff Bailey", () => {
        const string = "Geoff_Bailey";
        expect(formatName(string)).toBe("Geoff Bailey");
    });
});

describe("Given a string with no spaces, capitalise the first letter", () => {
    test("Given 'oils', return 'Oils'", () => {
        const string = "oils";
        expect(capitaliseFirst(string)).toBe("Oils");
    });
});

describe("Given an array of mediums, return replacing underscores with spaces - 2nd last suffix of ' & ', all previous suffix of ', ', last has no suffix", () => {
    test("Confirm the input array is not mutated", () => {
        const array = ["art_art", "art_art_art_art", "art"];
        formatMediumsAndSurfaces(array);
        expect(array).toEqual(["art_art", "art_art_art_art", "art"]);
    });
    test("Given ['Mixed_Media'], return ['Mixed Media']", () => {
        const array = ["Mixed_Media"];
        expect(formatMediumsAndSurfaces(array)).toEqual(["Mixed Media"]);
    });
    test("Given ['Oils'], return ['Oils']", () => {
        const array = ["Oils"];
        expect(formatMediumsAndSurfaces(array)).toEqual(["Oils"]);
    });
    test("Given ['Oils', 'Mixed_Media', 'Art_Art_Art'], return ['Oils, ', 'Mixed Media & ', 'Art Art Art']", () => {
        const array = ["Oils", "Mixed_Media", "Art_Art_Art"];
        expect(formatMediumsAndSurfaces(array)).toEqual(["Oils, ", "Mixed Media & ", "Art Art Art"]);
    });
    test("Given ['Watercolours', 'Engraving', 'Oils', 'Mixed_Media', 'Art_Art_Art'], return ['Oils, ', 'Mixed Media & ', 'Art Art Art']", () => {
        const array = ["Watercolours", "Engraving", "Oils", "Mixed_Media", "Art_Art_Art"];
        expect(formatMediumsAndSurfaces(array)).toEqual(["Watercolours, ", "Engraving, ", "Oils, ", "Mixed Media & ", "Art Art Art"]);
    });
});