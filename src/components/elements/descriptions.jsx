const Descriptions = ({ label, value }) => {
	return (
		<div className="flex gap-2">
			<span className="font-bold w-8">{label}</span>
			<span>:</span>
			<span>{value ? value : '-'}</span>
		</div>
	)
}
export default Descriptions
