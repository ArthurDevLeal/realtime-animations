export default function InputX({ x, setX }: { x: string; setX: (x: string) => void }) {
	return (
		<div>
			<label htmlFor="translateX">TranslateX (px)</label>
			<input type="number" name="translateX" className="input" value={x} onChange={(e) => setX(e.target.value)} />
		</div>
	);
}
