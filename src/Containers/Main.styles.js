//here we are basically making an object which will be passed in the style object wherever we are going to use it
let styles = {
    appContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        color: "white",
    },
    contaier: {
        borderRadius: "15px",
        width: "40%",
        textAlign: "center",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
        color: "black",
    },
    titleStyle: {
        fontWeight: "bold",
        textAlign: "center",
    },
    inputWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
};
export default styles;