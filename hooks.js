import React, {useState} from 'react';
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (u) => {
        u.preventDefault();

        const newUser = {firstName,lastName,email,password,confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
            <label>Confirm Password: </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
            <input type="submit" value="Create New User"></input>
            <div>
                First Name: {firstName}
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
        
    );
};

export default HookForm;