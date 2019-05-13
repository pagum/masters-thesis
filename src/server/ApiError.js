function ApiError({ status, msg, path }) {
  this.status = status;
  this.msg = msg;
  this.path = path;
}

export default ApiError;
