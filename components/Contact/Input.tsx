export default function Input({ className, ...props }: JSX.IntrinsicElements["input"]) {
    return <input className={`${className} w-full rounded-sm bg-cs-white-100 px-2 py-2 border-2 border-[#858383]`} {...props} />;
}
