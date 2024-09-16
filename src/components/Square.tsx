import { SquareType } from "@/types/SquareType";

export default function Square({ x, y, rotate, scale, opacity }: SquareType) {
	return (
		<div
			style={{
				transform: `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
				opacity: opacity,
			}}
			className="w-24 h-24 bg-blue-500 transition-all duration-500"></div>
	);
}
