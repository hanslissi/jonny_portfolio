import React, { useState } from 'react';

const AboutMeTitle = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value, 10));
    };

    return (
        <h1>
            <span>About </span>
            <span className="relative">
                Me

            </span>
        </h1>
    );
}

export default AboutMeTitle;