class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode=10000, code=400) {
      super()
      this.error_code = errorCode
      this.code = code
      this.msg = msg
    }
  }
  
  class ParameterException extends HttpException{
    constructor(msg, errorCode){
      super(400, msg='参数错误', errorCode=10000);
    }
  }
  
module.exports={
    HttpException,
    ParameterException,
}