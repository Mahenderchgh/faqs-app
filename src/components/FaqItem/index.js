// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toGetAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  toGetImage = () => {
    const {isActive} = this.state
    const imgUrl = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img src={imgUrl} className="image" alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-container">
        <div className="item-container">
          <h1 className="question-text">{questionText}</h1>
          {this.toGetImage()}
        </div>
        {this.toGetAnswer()}
      </li>
    )
  }
}

export default FaqItem
