function MainLayout({ children }) {
    return (
        <main className="flex min-h-screen bg-slate-100">
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-6xl
                    flex-col
                    px-6
                    py-8
                "
            >
                {children}
            </div>
        </main>
    );
}

export default MainLayout;