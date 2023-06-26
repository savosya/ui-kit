function stringHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return hash >>> 0; // convert to unsigned 32-bit integer
}

const generateClassNameHash = (packageName, packageVersion, relativeFileName) => stringHash(`${packageName}@${packageVersion}@${relativeFileName}`).toString(36).substr(0, 5);
export