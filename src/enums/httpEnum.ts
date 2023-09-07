/**
 * @description:Request result set
 */
export enum ResultEnum {
	SUCCESS = 0,
	ERROR = -1,
	TIMEOUT = 401,
	TYPE = 'success'
}

/**
 * @description:Request Method
 */
export enum RequestEnum {
	GET = 'GET',
	POST = 'POST',
	DELETE = 'DELETE',
	PUT = 'PUT'
}


/**
 * @description:Request contentType
 */
export enum ContentTypeEnum {
	// json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
