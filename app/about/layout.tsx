export default function AboutLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="grid place-content-center h-screen">
            <p>(from about layout)</p>
            {children}
        </div>
    )
}