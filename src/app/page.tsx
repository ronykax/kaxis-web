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
                className={`cursor-pointer duration-100 ${className} relative group`}
                onClick={() => (window.location.href = url)}
            >
                <div className="border-[12px] border-black/50 duration-100 absolute inset-0 opacity-0 group-hover:opacity-100"></div>
                <span className="block md:-rotate-45 relative [text-shadow:-2px_2px_black]">
                    {name}
                </span>
            </button>
        );
    };

    return (
        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-4 w-full h-screen text-4xl font-bold">
            <Item name="pomodoro" url="/pomodoro" className="bg-red-500" />
            <Item name="notes" url="/notes" className="bg-amber-400" />
            <Item name="todo" url="/todo" className="bg-indigo-600" />
            <Item name="reminders" url="/reminders" className="bg-purple-600" />
        </div>
    );
}
