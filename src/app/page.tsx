"use client";
import InputX from "@/components/InputX";
import InputY from "@/components/InputY";
import Opacity from "@/components/Opacity";
import Rotate from "@/components/Rotate";
import Scale from "@/components/Scale";
import Square from "@/components/Square";
import { fixValue } from "@/hooks/fixValue";
import { useState } from "react";

export default function Page() {
	const [x, setX] = useState<string>("0");
	const [y, setY] = useState<string>("0");
	const [rotate, setRotate] = useState<string>("0");
	const [scale, setScale] = useState<string>("1");
	const [opacity, setOpacity] = useState<string>("1");

	return (
		<div className="relative w-full h-full flex flex-col justify-center items-center">
			<div className="flex flex-col gap-2 absolute top-0  z-20 p-4">
				<InputX x={x} setX={setX} />
				<InputY y={y} setY={setY} />
				<Rotate rotate={rotate} setRotate={setRotate} />
				<Scale scale={scale} setScale={setScale} />
				<Opacity opacity={opacity} setOpacity={setOpacity} />
			</div>
			<div className="flex justify-center ">
				<Square x={fixValue(x)} y={fixValue(y)} rotate={fixValue(rotate)} scale={fixValue(scale)} opacity={fixValue(opacity, true)} />
			</div>
		</div>
	);
}
