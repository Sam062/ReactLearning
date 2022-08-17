const element = React.createElement(
    "div",
    {
        className: "container",
        align: "center"
    },
    "Welcome to Default Value DIV",
    React.createElement(
        "h2",
        {
            align: "center"
        },
        "INNER H2 Element",
    ),
    React.createElement(
        "p",
        null,
        "This is a para",
    )
)
ReactDOM.render(element,
    document.getElementById("container")
);