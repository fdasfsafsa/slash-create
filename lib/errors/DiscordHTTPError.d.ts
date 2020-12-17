/// <reference types="node" />
import { ClientRequest, IncomingMessage } from 'http';
/** An HTTP error from a request. */
declare class DiscordHTTPError extends Error {
    /** The client request of the error. */
    readonly req: ClientRequest;
    /** The response from the server. */
    readonly res: IncomingMessage;
    /** The response class from a {@link Server}. */
    readonly response: any;
    /** The status code from the response. */
    readonly code: number;
    /** The response message. */
    readonly message: string;
    /** The error stack. */
    readonly stack: string;
    /**
     * @param req A client request
     * @param res An incoming message from the server
     * @param response Any {@link Server}s response class
     * @param stack The error stack
     */
    constructor(req: ClientRequest, res: IncomingMessage, response: any, stack: string);
    get name(): string;
    private flattenErrors;
}
export default DiscordHTTPError;
