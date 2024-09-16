export default function InputY({ y, setY }: { y: string; setY: (x:string) => void }) {
	return (
		<div>
			<label htmlFor="translateY">TranslateY (px)</label>
			<input type="number" name="translateY" className="input" value={y} onChange={(e) => setY(e.target.value)}/>
		</div>
	);
}
