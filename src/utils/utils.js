const formatName = (data) => {
    return data.replaceAll("_", " ");
};

const capitaliseFirst = (data) => {
    return data.slice(0, 1).toUpperCase() + data.slice(1, data.length);
};

const formatMediumsAndSurfaces = (data) => {
    return data.map((element, index) => {
        if(index === data.length - 1){
            return element.replaceAll("_", " ");
        };
        if(index === data.length - 2){
            return element.replaceAll("_", " ") + " & ";
        }
        else {
            return element.replaceAll("_", " ") + ", ";
        };
    });
};

module.exports = {
    formatName,
    capitaliseFirst,
    formatMediumsAndSurfaces,
};