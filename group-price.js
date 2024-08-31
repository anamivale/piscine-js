function groupPrice(params) {
        const priceRegex = /([A-Z]{3}|\$|£|€)(\d+)\.(\d{2})/g;
        const result = [];
        let match;
        while ((match = priceRegex.exec(params)) !== null) {
            result.push([match[0], match[2], match[3]]);
        }
        return result;
    
}
