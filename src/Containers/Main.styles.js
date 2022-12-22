//here we are basically making an object which will be passed in the style object wherever we are going to use it
const styles = {
  appContainer: {
    // marginTop: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height: "100vh",
    minHeight: "100vh",
    height: "fit-content",
    backgroundColor: "white",
    color: "white",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  },
  contaier: {
    borderRadius: "15px",
    width: "40%",
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    color: "black",
    // border: "1px solid red",
  },
  titleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins",
    textDecoration: "underline 0.5px black",
    textUnderlineOffset: "10px",
  },
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  seperator: {
    color: "black",
    height: "0.01mm",
    width: "75%",
    marginBottom: "15px",
  },
};
export default styles;
