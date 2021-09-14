# HTTP Status Codes
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes  
I've noted below the most common HTTP Status Codes for quick reference.  

## 1xx - Informational Response
An informational response indicates that the request was received and understood. It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response. The message consists only of the status line and optional header fields, and is terminated by an empty line.  

## 2xx - Success
This class of status codes indicates the action requested by the client was received, understood, and accepted.  

200 - 'OK' - Standard response for successful HTTP requests.  
202 - 'Accepted' - The request has been accepted for processing, but the processing has not been completed.  

## 3xx - Redirections
301 - Redirect - This and all future requests should be directed to the given URI.  

## 4xx - Client Errors
400 - Bad Request - The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).  
401 - Unauthorized - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.  
403 - Forbidden - The request contained valid data and was understood by the server, but the server is refusing action.  
404 - Not Found - The requested resource could not be found but may be available in the future.  
408 - Request Timeout - The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait."  
451 - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.  

## 5xx - Server Errors
500 - Internal Server Error - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.  
502 - Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server.  
503 - Service Unavailable - The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.  
504 - Gateway Timeout - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.  