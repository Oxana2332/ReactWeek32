import './textArea.css';

function TextArea({ newText, setNewText, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<textarea
				className="textarea"
				onChange={(e) => setNewText(e.target.value)}
				value={newText}
				cols="30"
				rows="10"
			/>
			<button className="button">Отправить</button>
		</form>
	);
}

export default TextArea;
