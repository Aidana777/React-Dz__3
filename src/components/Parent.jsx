import React from "react";
const Parent = () => {
    const [user, setUser] = React.useState({ name: '' });
    const handleInput = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            name: e.target.value,
        });
    };

    return (
        <>
            <h1>Parent</h1>
            <br />
            <input onChange={handleInput} value={user.name} />
            <Child user={user} />
        </>
    );
}

const Child = ({ user }) => (
    <>
        <h2>Child</h2>
        <h1>{user.name}</h1>
    </>
);
export default Parent 