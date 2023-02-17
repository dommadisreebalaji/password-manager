import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

class PasswordManager extends Component {
  state = {website: '', username: '', password: '', passwordList: [], count: 0}

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  updatePasswordList = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(each => each.id !== id)
    this.setState(prevState => ({
      passwordList: filteredList,
      count: prevState.count - 1,
    }))
  }

  onChangeSearchInput = event => {
    const {passwordList} = this.state
    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({
      passwordList: searchResults,
    })
  }

  render() {
    const {website, username, password, passwordList, count} = this.state
    return (
      <div className="app-container">
        <div className="image-header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
        </div>
        <div className="password-container">
          <form className="add-new-password-card" onSubmit={this.onAddPassword}>
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-image"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-image"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="password-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-image"
            />
          </div>
        </div>
        <div className="password-list-container">
          <div className="password-input-search-container">
            <div className="div">
              <h1 className="password-list-heading">Your Passwords</h1>
              <p className="count"> {count}</p>
            </div>
            <div className="input-container-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input--search-image"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          {passwordList.length > 0 ? (
            <PasswordList
              list={passwordList}
              updatePasswordList={this.updatePasswordList}
              count={count}
            />
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password">No Passwords</p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
