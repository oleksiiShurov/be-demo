export function getRandomEmail(): string {
    return "autotest" + getRandomNumeric(3) + "@gmail.com";
}
export function getRandomNumeric(length: number) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)).toString();
}