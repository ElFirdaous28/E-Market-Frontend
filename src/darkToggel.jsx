import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function DarkToggle() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }, []);

    return (
        <div className="h-full flex items-center justify-center flex-col gap-4 
                    transition-all ease-in-out 
                    bg-background dark:bg-background-dark 
                    text-textMain dark:text-textMain-dark">
            <button
                onClick={toggleTheme}
                className="rounded-full p-2 shadow-md shadow-primary cursor-pointer 
                   text-textMuted dark:text-textMuted-dark 
                   hover:text-primary transition-all ease-in-out">
                {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <div className="text-textMuted dark:text-textMuted-dark">
                {theme === "light"
                    ? "Light mode activated"
                    : "Dark mode activated"}
            </div>

            <div className="text-primary">Hello world</div>

            <div className="bg-surface dark:bg-surface-dark 
                      border-border dark:border-border-dark 
                      border p-4 rounded-lg">
                This is a 'surface' box with a 'border'
            </div>
        </div>
    );
}

export default DarkToggle;
