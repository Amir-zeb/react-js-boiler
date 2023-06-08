export default class Utils {
    static generateId() {
        return Math.ceil(Math.random() * 10000000)
    }
    
    static capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
    }   

    static removeUnderscore(str) {
        return str.split('_').join(" ");
    }
}