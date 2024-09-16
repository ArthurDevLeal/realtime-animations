export default function Scale({ scale, setScale }: { scale: string; setScale: (x: string) => void }) {
	return (
		<div>
			<label htmlFor="scale">Scale</label>
			<input
				type="number"
				name="scale"
				className="input"
				value={scale}
				onChange={(e) => (parseInt(e.target.value) < 0 ? setScale("0") : setScale(e.target.value))}
			/>
		</div>
	);
}
