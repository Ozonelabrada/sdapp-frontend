import React from "react";

const useForm = (initialState, callback = ()=> {}) => {
    const [state, setState] = React.useState(initialState);

    //create useCallback hook to handle update state
    const handleChange = React.useCallback(
        event => {
            const { name, value } = event.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
            callback()
        },
        [setState, callback]
    );
    return [state, handleChange, setState];
}

export default useForm;