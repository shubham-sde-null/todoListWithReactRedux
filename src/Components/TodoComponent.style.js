const styles = {
    taskContainer: {
        justifyContent: "center",
        display: "flex",
        // width: "550px",
        // border: "1px solid red",
    },
    taskWrapper: {
        display: "flex",
        marginBottom: "12px",
        width: "80%",
        textAlign: "center",
        alignSelf: "center",
        borderRadius: "4px",
        justifyContent: "space-between",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    },
    task: {
        textAlign: "right",
        // textAlign: "center",
        textDecoration: "none",
        paddingLeft: "20px",
        // border: "1px solid red",
        fontSize: "20px",
    },
    iconWrapper: {
        paddingTop: "20px",
    },
    completedIcon: {
        fontSize: "20px",
        color: "springgreen",
    },
    deleteIcon: {
        marginLeft: "15px",
        marginRight: "10px",
        fontSize: "20px",
        color: "red",
    },
};
export default styles;