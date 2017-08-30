/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png'
'http://imgur.com/n19BXfZ.png'
'http://imgur.com/VBwQmzA.png'
'http://imgur.com/nawDxVv.png'
-------------------------------------------------- */
const images = [
	'http://imgur.com/9itd49u.png',
	'http://imgur.com/n19BXfZ.png',
	'http://imgur.com/VBwQmzA.png',
	'http://imgur.com/nawDxVv.png'
]

class App extends React.Component {

	constructor() {
        super();
        this.state = {
			currentImageIndex: 0,
		}
    }

	imageChanger(direction){


		if(direction === "previous"){
			if(this.state.currentImageIndex !== 0){
				this.setState({
					currentImageIndex: this.state.currentImageIndex - 1,
				})
			}
		} else if (direction === "next") {
			if(this.state.currentImageIndex !== images.length - 1){
				this.setState({
					currentImageIndex: this.state.currentImageIndex + 1
				})
			}
		}

	}
	
	
	render() {
		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button
						disabled={this.state.currentImageIndex === 0 ? true : false}
						onClick={()=>{this.imageChanger("previous")}}
					>
						Previous
					</button>

			      	<span>{this.state.currentImageIndex + 1} of {images.length}</span>					  
			      	<button
						disabled={this.state.currentImageIndex === images.length - 1 ? true : false}
						onClick={()=>{this.imageChanger("next")}}
					>
						Next
					</button>
			    </div>
				<div>
					<img src={images[this.state.currentImageIndex]} />
				</div>
			</div>			
		)
	}



}

ReactDOM.render(<App />, document.getElementById('app'));