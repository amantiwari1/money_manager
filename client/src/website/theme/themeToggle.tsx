import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './themeContext';


const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2" >
            {theme === 'dark' ? (
                <HiSun
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            ) : (
                <HiMoon
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            )}
        </div>
    );
};

export default Toggle;