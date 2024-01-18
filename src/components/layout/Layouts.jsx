export const PageLayout = ({ children, id }) => {

    return (
        <main id={id} className="min-h-screen page-padding flex flex-col justify-start items-center">
            {children}
        </main>
    )
}

export const SectionLayout = ({ children, id }) => {

    return (
        <section id={id} className="w-full min-h-[100vh] flex flex-col justify-center items-center">
            {children}
        </section>
    )
}

export const CardLayout = ({ children }) => {

    return (
        <div className="w-full">
            {children}
        </div>
    )
}