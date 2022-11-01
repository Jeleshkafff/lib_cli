export function stringify(znachenie) {
    return JSON.stringify(znachenie).replace(/\"/g, "'")
}