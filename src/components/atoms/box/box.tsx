interface BoxProps {
    className?: string;
}

export default function Box({ className }: BoxProps) {
    return (
        <div className={`w-full h-full border border-gray-500 border-opacity-30 ${className || ''}`} >
        </div>
    );
}