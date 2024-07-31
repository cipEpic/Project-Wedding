interface ISectionProps {
	title?: string;
	subtitle?: string;
	dark?: boolean;
	children: React.ReactNode;
}

// export default function Section1({ title, dark, subtitle, style, className, children, ...props }: ISectionProps & JSX.IntrinsicElements["section"]) {
//     return (
//       <section className={`${className} py-2 w-full`} {...props}>
//         <div className="">
//           {title && (
//             <div className="section__heading mb-10 slide slide-up relative w-full flex flex-col gap-2">
//               <h1 data-slide className={`type-head-5 font-bold text-[#A3A3A3] proven-heading"}`} style={{ marginLeft: "0.5rem" }} >
//                 {title}
//               </h1>
//               <p className={`type-head-4 font-bold text-[#0A2540] proven-paragraph"}`} style={{ marginLeft: "0.5rem", paddingRight: "10em"}}>{subtitle}</p>
//             </div>
//           )}
//           {children}
//         </div>
//       </section>
//     );
//   }

export default function Section1({ title, dark, subtitle, style, className, children, ...props }: ISectionProps & JSX.IntrinsicElements["section"]) {
    return (
      <section className={`${className} py-2 w-full`} {...props}>
        <div className="">
          {title && (
            <div className="section__heading mb-10 slide slide-up relative w-full flex flex-col gap-2">
              <h1 data-slide className={`type-head-5 font-bold text-[#A3A3A3] proven-heading"}`} >
                {title}
              </h1>
              <p className={`type-head-4 font-bold text-[#0A2540] proven-paragraph"}`}>{subtitle}</p>
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
  