export default function Header() {
    return (
        <header style={{ background: "#0070f3", color: "white", padding: "10px" }}>
            <h1>Groupbook</h1>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/features">Features</a>
            </nav>
        </header>
    );
}
