import React, {Component} from 'react';
import {VideoTool} from "react-annotation-tool"
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

class Demo extends Component {
	constructor(props){
		super(props)
		this.state = {result: null}
	}

	handleSubmit = r =>{
		this.setState({
			result: r
		})
	}


	render() {
		const {result} = this.state
		const previewNotices = ["Cells' body range.", "The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>show up</u> (if applicable)."]
		const annotations = [ { "id": "jswwe8vl", "name": "jswwe8vl", "label": "3-2", "color": "rgba(0,4,255,1)", "trajectories": [ { "id": "jswwe8vj", "name": "jswwe8vj", "x": 110.5, "y": 266, "width": 60.5, "height": 62, "time": 0.202962662337662, "status": "Show" }, { "id": "jswwerd4", "name": "jswwerd4", "x": 117.5, "y": 273, "width": 67.5, "height": 60, "time": 0.3348269333333333, "status": "Show" }, { "id": "jswwfy46", "name": "jswwfy46", "x": 117.5, "y": 264, "width": 62.5, "height": 60, "time": 0.648538961038961, "status": "Show" } ], "children": [], "parent": "jswwc3se" }, { "id": "jswwe8vk", "name": "jswwe8vk", "label": "3-1", "color": "rgba(0,4,255,1)", "trajectories": [ { "id": "jswwe8vj", "name": "jswwe8vj", "x": 79, "y": 231, "width": 56.5, "height": 59, "time": 0.202962662337662, "status": "Show" }, { "id": "jswwetcn", "name": "jswwetcn", "x": 74, "y": 216, "width": 61.5, "height": 74, "time": 0.3348269333333333, "status": "Show" }, { "id": "jswwf0su", "name": "jswwf0su", "x": 79, "y": 224, "width": 56.5, "height": 60, "time": 0.4524497777777778, "status": "Show" } ], "children": [], "parent": "jswwc3se" }, { "id": "jswwck44", "name": "jswwck44", "label": "4-2", "color": "rgba(0,4,255,1)", "trajectories": [ { "id": "jswwck42", "name": "jswwck42", "x": 268, "y": 230.5, "width": 67, "height": 64.5, "time": 0.064448051948052, "status": "Show" }, { "id": "jswwcsx5", "name": "jswwcsx5", "x": 276, "y": 232.5, "width": 67, "height": 64.5, "time": 0.11937937777777778, "status": "Show" }, { "id": "jswwd49m", "name": "jswwd49m", "x": 276, "y": 226.5, "width": 68, "height": 70.5, "time": 0.1634536, "status": "Show" }, { "id": "jswwdvqn", "name": "jswwdvqn", "x": 276, "y": 214.5, "width": 82, "height": 82.5, "time": 0.237337662337662, "status": "Show" }, { "id": "jswwepmx", "name": "jswwepmx", "x": 276, "y": 211.5, "width": 68, "height": 85.5, "time": 0.3348269333333333, "status": "Show" }, { "id": "jswwf3uh", "name": "jswwf3uh", "x": 276, "y": 245.5, "width": 55, "height": 51.5, "time": 0.4524497777777778, "status": "Show" }, { "id": "jswwi0at", "name": "jswwi0at", "x": 286, "y": 252.5, "width": 45, "height": 44.5, "time": 0.607792207792208, "status": "Show" }, { "id": "jswwhh2e", "name": "jswwhh2e", "x": 276, "y": 245.5, "width": 55, "height": 51.5, "time": 0.6875, "status": "Hide" } ], "children": [], "parent": "jswwc78h" }, { "id": "jswwck43", "name": "jswwck43", "label": "4-1", "color": "rgba(0,4,255,1)", "trajectories": [ { "id": "jswwck42", "name": "jswwck42", "x": 239, "y": 275, "width": 56, "height": 52.5, "time": 0.064448051948052, "status": "Show" }, { "id": "jswwcton", "name": "jswwcton", "x": 243, "y": 276, "width": 56, "height": 52.5, "time": 0.11937937777777778, "status": "Show" }, { "id": "jswwd30l", "name": "jswwd30l", "x": 233, "y": 276, "width": 66, "height": 61.5, "time": 0.1634536, "status": "Show" }, { "id": "jswwdu7z", "name": "jswwdu7z", "x": 212, "y": 276, "width": 87, "height": 77.5, "time": 0.237337662337662, "status": "Show" }, { "id": "jswwegu1", "name": "jswwegu1", "x": 204, "y": 276, "width": 95, "height": 81.5, "time": 0.26695253333333335, "status": "Show" }, { "id": "jswwenyl", "name": "jswwenyl", "x": 213, "y": 278, "width": 86, "height": 79.5, "time": 0.3348269333333333, "status": "Show" }, { "id": "jswwglnf", "name": "jswwglnf", "x": 228, "y": 264.5852976277977, "width": 78.54577008436382, "height": 81.91470237220233, "time": 0.597849025974026, "status": "Show" }, { "id": "jswwfqig", "name": "jswwfqig", "x": 213, "y": 262, "width": 95, "height": 95.5, "time": 0.648538961038961, "status": "Show" }, { "id": "jswwhkq0", "name": "jswwhkq0", "x": 213, "y": 262, "width": 95, "height": 95.5, "time": 0.8460632888888889, "status": "Hide" } ], "children": [], "parent": "jswwc78h" }, { "id": "jswwbsll", "name": "jswwbsll", "label": "1", "color": "rgba(0,4,255,1)", "trajectories": [ { "id": "jswwbsll", "name": "jswwbsll", "x": 50, "y": 52, "width": 125, "height": 121, "time": 0, "status": "Show" }, { "id": "jswwcc88", "name": "jswwcc88", "x": 65, "y": 58, "width": 110, "height": 115, "time": 0.0640827922077922, "status": "Show" }, { "id": "jswwcxzy", "name": "jswwcxzy", "x": 65, "y": 64, "width": 104, "height": 96, "time": 0.11937937777777778, "status": "Show" }, { "id": "jswwda6q", "name": "jswwda6q", "x": 76, "y": 73, "width": 87, "height": 79, "time": 0.1634536, "status": "Show" }, { "id": "jswwdxbu", "name": "jswwdxbu", "x": 92, "y": 84, "width": 65, "height": 59, "time": 0.237337662337662, "status": "Show" }, { "id": "jswwex5k", "name": "jswwex5k", "x": 97, "y": 80, "width": 65, "height": 59, "time": 0.3348269333333333, "status": "Show" } ], "children": [], "parent": "" }, { "id": "jswwc0xw", "name": "jswwc0xw", "label": "2", "color": "rgba(227,0,255,1)", "trajectories": [ { "id": "jswwc0xw", "name": "jswwc0xw", "x": 235, "y": 82, "width": 92, "height": 86, "time": 0, "status": "Show" }, { "id": "jswwcvfg", "name": "jswwcvfg", "x": 239, "y": 86, "width": 77, "height": 76, "time": 0.11937937777777778, "status": "Show" }, { "id": "jswwd6lc", "name": "jswwd6lc", "x": 250, "y": 95, "width": 64, "height": 62, "time": 0.1634536, "status": "Show" }, { "id": "jswwe0cl", "name": "jswwe0cl", "x": 256, "y": 99, "width": 49, "height": 47, "time": 0.237337662337662, "status": "Show" }, { "id": "jswwekgo", "name": "jswwekgo", "x": 256, "y": 99, "width": 55, "height": 52, "time": 0.26695253333333335, "status": "Show" }, { "id": "jswwewez", "name": "jswwewez", "x": 264, "y": 94, "width": 55, "height": 52, "time": 0.3348269333333333, "status": "Show" }, { "id": "jswwfg26", "name": "jswwfg26", "x": 258, "y": 89, "width": 61, "height": 57, "time": 0.525852272727273, "status": "Show" }, { "id": "jswwhxtk", "name": "jswwhxtk", "x": 272.69335097585184, "y": 108.36850810453195, "width": 44.97088984452528, "height": 40.30301025471383, "time": 0.607792207792208, "status": "Hide" }, { "id": "jswwfua2", "name": "jswwfua2", "x": 280, "y": 118, "width": 37, "height": 32, "time": 0.648538961038961, "status": "Show" }, { "id": "jswwh89v", "name": "jswwh89v", "x": 280, "y": 118, "width": 37, "height": 32, "time": 0.672646103896104, "status": "Hide" } ], "children": [], "parent": "" }, { "id": "jswwc3se", "name": "jswwc3se", "label": "3", "color": "rgba(227,0,255,1)", "trajectories": [ { "id": "jswwc3se", "name": "jswwc3se", "x": 84, "y": 234, "width": 91, "height": 90, "time": 0, "status": "Show" }, { "id": "jswwe8vj", "name": "jswwe8vj", "x": 84, "y": 234, "width": 91, "height": 90, "time": 0.202962662337662, "status": "Split" } ], "children": [ "jswwe8vk", "jswwe8vl" ], "parent": "" }, { "id": "jswwc78h", "name": "jswwc78h", "label": "4", "color": "rgba(255,219,0,1)", "trajectories": [ { "id": "jswwc78h", "name": "jswwc78h", "x": 239, "y": 234, "width": 90, "height": 89, "time": 0, "status": "Show" }, { "id": "jswwck42", "name": "jswwck42", "x": 239, "y": 234, "width": 90, "height": 89, "time": 0.064448051948052, "status": "Split" } ], "children": [ "jswwck43", "jswwck44" ], "parent": "" } ]

		return (
			<Container className="py-3">
				<h1 className="display-4  text-center">Video Tool</h1>
				<Row className="py-3" style={{background: "rgb(246, 246, 246)"}}>
		      		<Col>
						<VideoTool onSubmit={this.handleSubmit}
											 url={"https://cildata.crbs.ucsd.edu/media/videos/15793/15793_web.mp4"}
											 annotationWidth={400}
											 annotations = {annotations}
											 previewNotices = {previewNotices}
											 />
					</Col>
		    </Row>
				<Row className="my-3">
		    		<Col>
						<Card>
							<CardBody>
								<CardTitle>Output</CardTitle>
								<CardText>{JSON.stringify(result, null, 2)}</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default Demo;