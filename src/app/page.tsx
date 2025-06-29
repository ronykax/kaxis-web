"use client";

export default function Home() {
    const Item = ({
        name,
        url,
        className,
    }: {
        name: string;
        url: string;
        className: string;
    }) => {
        return (
            <button
                className={`cursor-pointer duration-100 ${className}`}
                onClick={() => (window.location.href = url)}
            >
                <span className="block md:-rotate-45">{name}</span>
            </button>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 w-full h-screen text-2xl font-bold">
            <Item
                name="pomodoro"
                url="/pomodoro"
                className="bg-red-400/25 hover:bg-red-400/50"
            />
            <Item
                name="notes"
                url="/notes"
                className="bg-yellow-300/25 hover:bg-yellow-300/50"
            />
            <Item
                name="todo"
                url="/todo"
                className="bg-blue-400/25 hover:bg-blue-400/50"
            />
            <Item
                name="reminders"
                url="/reminders"
                className="bg-purple-500/25 hover:bg-purple-500/50"
            />
        </div>
    );
}
