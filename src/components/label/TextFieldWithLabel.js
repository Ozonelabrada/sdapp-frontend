function TextFieldWithLabel(props) {
    return (
        <div>
            <label>
                {props.labelName}
            </label>
            <input type="text" value={props.value} onChange={props.onChange}></input>

        </div>
    )
}

export default TextFieldWithLabel
