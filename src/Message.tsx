// creating new component

// PascalCasing -> first letter of each word should be in capital
function Message() {
    // JSX: JavaScript XML code -> with this we can easily describe the UI of our app with HTML and JS
    const name = 'Indira';
    if(name)
    return <h1>Hello {name}</h1>;

    return <h1>Hello World</h1>;
}

export default Message;