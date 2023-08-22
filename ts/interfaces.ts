interface Validate { 
    isValid(value: string | number);
}
class EmailValidator implements Validate,Message { 
    isValid(value: string | number) {
        console.log("validating email")
    }
    message(msg: string): string {
        return msg;
    }
}
interface Message { 
    message(msg: string): string;
}