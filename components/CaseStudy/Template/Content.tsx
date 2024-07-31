import Skeleton from "@/components/Skeleton";

export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <Skeleton className="text-xl mb-4" variant="rounded" lineCount={5} multiline={true}>
            <div className="text-xl text-[#777] slide slide-up flex flex-col gap-4 font-medium">{children}</div>
        </Skeleton>
    );
}
