"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 로컬 스토리지에서 테마 상태를 초기화
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (!storedTheme) {
            // 초기값 설정 (기본은 라이트 모드)
            localStorage.setItem("theme", "light");
        } else {
            // 저장된 테마에 따라 상태 업데이트
            const darkMode = storedTheme === "dark";
            setIsDarkMode(darkMode);
            if (darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, []);

    const toggleDarkMode = () => {
        const darkMode = !isDarkMode;
        setIsDarkMode(darkMode);

        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header className="bg-primary text-white shadow py-4 flex flex-col justify-between">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">Finova</h1>
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded shadow"
                >
                    {isDarkMode ? "🌞" : "🌙"}
                </button>
            </div>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <p>© 2024 Finova. All rights reserved.</p>
            </div>
        </header>
    );
}
