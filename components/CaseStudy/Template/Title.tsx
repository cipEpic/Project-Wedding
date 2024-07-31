import Skeleton from "@/components/Skeleton";

interface IProps {
    title: string;
    description: string;
}

export default function Title({ title, description }: IProps) {
    return (
        <div className="heading container flex flex-col gap-2">
            <Skeleton mask={true} variant="rounded">
                <h1 className="text-4xl font-bold text-cs-dark">{title}</h1>
            </Skeleton>
            <Skeleton mask={true} variant="rounded">
                <p className="text-xl font-medium text-[#777]">{description}</p>
            </Skeleton>
        </div>
    );
}
