import React, {useRef, useState} from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState(generateRandomString(10));

    const handleCopyClick = () => {
        navigator.clipboard.writeText(password)
            .catch(err => {
                console.error('Failed to copy', err);
            });
    }

    return (
        <div>
            <p>Generated password: {password}</p>
            <button onClick={handleCopyClick}>Copy</button>
            <button onClick={() => setPassword(generateRandomString(10))}>
                Generate
            </button>
        </div>
    );
}

const generateRandomString = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomCharCode = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
        result += String.fromCharCode(randomCharCode);
    }
    return result;
}

export default PasswordGenerator;
