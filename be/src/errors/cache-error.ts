import { CustomError } from "./custom-error";

export class CacheError extends CustomError {
    statusCode: number = 500;

    constructor(message: string = 'Cache operation failed') {
        super(message);
        this.message = message;

        Object.setPrototypeOf(this, CacheError.prototype); 
    }

    serializeError() {
        return {
            message: this.message
        }
    }

}