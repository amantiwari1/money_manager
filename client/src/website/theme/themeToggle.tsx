import React from 'react';
import { ThemeContext } from './themeContext';
import tw from 'twin.macro'
import { Switch } from '@headlessui/react';


const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    let isDark = theme === 'dark'
    const SwitchStyle = [
        tw`relative inline-flex items-center h-6 rounded-full w-11`,
        isDark ? tw`bg-blue-600` : tw`bg-gray-200`
    ]

    const ToggleStyle = [
        tw`inline-block w-4 h-4 transform bg-white rounded-full`,
        isDark ? tw`translate-x-6` : tw`translate-x-1`
    ]

    return (
        <>
            <Switch
                checked={isDark}
                onChange={() => setTheme(isDark ? 'light' : 'dark')}
                css={SwitchStyle}
            >
                <span
                    css={ToggleStyle}
                />
            </Switch>

        </>
    );
};

export default Toggle;