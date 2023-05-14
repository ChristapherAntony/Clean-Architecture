const createErrorClass = (name, statusCode) => {
    return class extends Error {
      constructor(message) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
      }
    };
  };
  
  export const ERROR = {
    HttpError: createErrorClass('HttpError', 500),
    CategoryExistsError: createErrorClass('CategoryExistsError', 409),
    ProductExistsError: createErrorClass('ProductExistsError', 409),
    UserExistsError: createErrorClass('UserExistsError', 409),
    NotFoundError: createErrorClass('NotFoundError', 404),
    BadRequestError: createErrorClass('BadRequestError', 400),
    InvalidInputError: createErrorClass('InvalidInputError', 422),
    CategoryNotFoundError: createErrorClass('CategoryNotFoundError', 404),
    CategoryHasProductsError: createErrorClass('CategoryHasProductsError', 409),
  };
  


// export const ERROR = {
//     HttpError: class HttpError extends Error {
//         constructor(message, statusCode) {
//             super(message);
//             this.statusCode = statusCode;
//         }
//     },
//     CategoryExistsError: class CategoryExistsError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = 'CategoryExistsError';
//             this.statusCode = 409;
//         }
//     },
//     ProductExistsError: class ProductExistsError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = 'ProductExistsError';
//             this.statusCode = 409;
//         }
//     },
//     UserExistsError: class UserExistsError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = 'UserExistsError';
//             this.statusCode = 409;
//         }
//     },
//     NotFoundError: class NotFoundError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = 'NotFoundError';
//             this.statusCode = 404;
//         }
//     },
//     BadRequestError: class BadRequestError extends Error {
//         constructor(message) {
//             super(message);
//             this.name = 'BadRequestError';
//             this.statusCode = 400;
//         }
//     }
// };
