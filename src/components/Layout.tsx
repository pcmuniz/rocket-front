import './global.css';

export const metadata = {
    title: 'E-commerce',
    description: 'React'
};

function RootLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <nav className="fixed">

                </nav>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout