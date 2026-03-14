import { Children, isValidElement, ReactNode } from "react"

interface SectionProps {
    children?: ReactNode,
    className?: string,
}

export default function Section({
    children,
    className
}: SectionProps) {
    const childArray = Children.toArray(children);

    const firstH1Index = childArray.findIndex(
        (child) => isValidElement(child) && child.type === "h1"
    );

    const title = firstH1Index !== -1 ? childArray[firstH1Index] : null;

    const content = childArray.filter((_, index) => index !== firstH1Index);

    return (
        <div className="relative inline-flex flex-col w-full">
            { title && <div className="section-title pt-10">{ title }</div> }
            <hr className="w-[calc(100%-0.5rem)] self-center m-4 border-[#464044]" />
            <div className={ `section-content flex flex-col gap-6 ${className}` }>{ content }</div>
        </div>
    );
}