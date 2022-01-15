/* Thrown when the underlying platform throws an error that we haven't catch either in 
a port or a use case */
export class UnexpectedError extends Error {}

/*Thrown when the system indicates in any way that you are not  authorized to do this action*/
export class UnauthorizedError extends Error {}

/*Thrown when the server responds in an not expected way (Like internal server error 500)*/
export class ServerError extends Error {}
