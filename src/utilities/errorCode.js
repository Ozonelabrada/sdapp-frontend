const errorCodes = [
  {
    code: "500",
    message: "Internet Connection Lost!",
  },
  {
    code: "204",
    message: "Internet Connection Lost!",
  },
  {
    code: "P2025",
    message: "Record not Found!"

  },
  {
    code:"P2003",
    message: "Failed! Unable to Delete it has child records."
  }
];

export const findError = (code) => {
  const displayError = errorCodes.find(element => element.code === code);
    return displayError ? displayError.message : "Unrecognize error!"
};
