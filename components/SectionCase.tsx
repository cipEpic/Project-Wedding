interface ISectionProps {
	title?: string;
	subtitle?: string;
	dark?: boolean;
	children: React.ReactNode;
}

export default function Section({ title, dark, subtitle, style, className, children, ...props }: ISectionProps & JSX.IntrinsicElements["section"]) {
	return (
		<section className={`${className} py-6 w-full`} {...props}>
			<div className="container">
				{title && (
					<div className="section__heading mb-10 phone:mb-5 slide slide-up relative w-full flex flex-col gap-6 phone:gap-2">
						<h1 data-slide className={`section-heading text-[32px] phone:text-[26px] text-center ${dark ? "text-white" : "text-cs-dark"}`} style={{ fontWeight: '600' }}>
							{title}
						</h1>
						<p className={`section-subheading text-[24px] phone:text-[16px] text-center ${dark ? "text-white" : "text-cs-dark"}`} style={{ fontWeight: '500' }}>{subtitle}</p>
					</div>
				)}
				{children}
			</div>
		</section>
	);
}
