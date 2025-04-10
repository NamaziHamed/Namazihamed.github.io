import {persist} from 'zustand/middleware';
import {create} from 'zustand';

interface ThemeState {
    darkMode:boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const useThemeStore = create<ThemeState>()(
persist(
    (set)=>({
        darkMode: false,
        setDarkMode: (darkMode) => set({darkMode})
    }),
    {
        name:'theme-storage'
    }
)
)

export default useThemeStore