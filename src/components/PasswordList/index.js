import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordList extends Component {
  state = {checkBox: false}

  onClickCheckBox = () => {
    this.setState(prevState => ({checkBox: !prevState.checkBox}))
  }

  render() {
    const {list, updatePasswordList, count} = this.props
    const {checkBox} = this.state
    return (
      <div>
        <div className="check-box-container">
          <input
            value={checkBox}
            type="checkbox"
            id="show-passwords"
            className="input-check-box"
            onClick={this.onClickCheckBox}
          />
          <label htmlFor="show-passwords" className="label">
            Show passwords
          </label>
        </div>
        <div className="password-list-item">
          {count > 0 ? (
            <ul className="password-list-items">
              {list.map(each => (
                <PasswordItem
                  key={each.id}
                  item={each}
                  isShowPassword={checkBox}
                  updatePasswordList={updatePasswordList}
                />
              ))}
            </ul>
          ) : (
            <div className="no-password">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordList
