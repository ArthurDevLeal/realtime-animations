export default function Rotate({ rotate, setRotate }: { rotate: string; setRotate: (x: string) => void }) {
	return (
		<div>
			<label htmlFor="rotate">Rotate (deg)</label>
			<input type="number" name="rotate" className="input" value={rotate} onChange={(e) => setRotate(e.target.value)} />
		</div>
	);
}
