interface ISectionProps {
    title?: string;
    subtitle?: string;
    dark?: boolean;
    children: React.ReactNode;
}

export default function SectionCaseContact({ title, dark, subtitle, style, className, children, ...props }: ISectionProps & JSX.IntrinsicElements["section"]) {
    return (
        <section className={`${className} py-6 w-full`} {...props}>
            <div className="container">
                {title && (
                    <div className="section__heading mb-10 phone:mb-5 slide slide-up relative w-full flex flex-col gap-6 phone:gap-2">
                        <h1 data-slide className={`text type-head-2 w-1/3 phone:w-full text-[35px] phone:text-[26px] text-left ${dark ? "text-white" : "text-cs-dark"}`} style={{ fontWeight: '500' }}>
                            {title}
                        </h1>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
