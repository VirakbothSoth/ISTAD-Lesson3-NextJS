type ButtonStyle = {
    name?: string;
    background?: string;
};

export default function ButtonComponent({ name = "Click me", background = "blue" }: ButtonStyle) {
    return (
        <button
        style={{backgroundColor: background }}
        className="px-4 py-2 m-3 ml-0 rounded-lg">
            {name}
        </button>
    );
}