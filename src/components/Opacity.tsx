export default function Opacity({ opacity, setOpacity }: { opacity: string; setOpacity: (x: string) => void }) {
	return (
		<div>
			<label htmlFor="opacity">Opacity (0-1)</label>
			<input
				type="number"
				name="rotate"
				className="input"
				value={opacity}
				onChange={(e) => (parseInt(e.target.value) < 0 ? setOpacity("0") : parseInt(e.target.value) >= 1 ? setOpacity("1") : setOpacity(e.target.value))}
			/>
		</div>
	);
}
