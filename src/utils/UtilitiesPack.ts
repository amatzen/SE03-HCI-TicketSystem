const dotLongStrings = (allowedLength: number, string: string) => string.length < allowedLength ?
    string :
    string.substr(0, allowedLength - 3) + '...';

export {
    dotLongStrings
}