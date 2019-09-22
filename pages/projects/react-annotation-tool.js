import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./react-annotation-tool.css"
import { Container, Row, Col } from 'reactstrap';
const DynamicImageComponent = dynamic(import('../../components/imageAnnotationDemo/ImageAnnotationDemo.js'), {
  ssr: false
})
const DynamicVideoComponent = dynamic(import('../../components/videoAnnotationDemo/VideoAnnotationDemo.js'), {
  ssr: false
})

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
			<div>
				<div className="fixed-top px-3 d-flex justify-content-between">
                    <div className="about-me">
                        <Link href="/">
                            <a><span className="pl-1">about me</span></a>
                        </Link>
                    </div>
                    <div>
    					<a href="https://www.npmjs.com/package/react-annotation-tool">
    						<img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
    					</a>
                    </div>
				</div>
				<DynamicImageComponent />
				<hr/>
                <DynamicVideoComponent />
			</div>
    )
  }
}
