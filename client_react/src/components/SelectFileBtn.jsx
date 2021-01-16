import React from "react";
import * as HttpService from "../service";

default export class SelectFileBtn extends React.Component {
	state = {
		file: null,
	};

	render() {
		return (
			<div>
        <input type="file" 
          accept="image/png, image/jpeg"
					onChange={this.handleSelectFile}
				/>
				<button onClick={this.handleSubmit}>
          submit
        </button>
			</div>
		);
	}

	handleSelectFile = (event) => this.setState({ file: event.target.files });
	handleSubmit = async () => {
		let formData = new FormData();
		formData.append("temp", this.state.file[0], this.state.file[0].name);
		await HttpService.uploadFile(formData);
	};
}

