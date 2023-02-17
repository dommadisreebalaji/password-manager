import './index.css'

const PasswordItem = props => {
  const {item, isShowPassword, updatePasswordList} = props
  const {id, website, username, password} = item
  const passwordText = isShowPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )
  const onDeletePassword = () => {
    updatePasswordList(id)
  }
  return (
    <li className="list-item">
      <p>
        <h1 className="logo">{username[0]}</h1>
        <div className="user-password-container">
          <p className="website">{website}</p>
          <p className="website">{username}</p>
          <p className="website">{passwordText}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeletePassword}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </p>
    </li>
  )
}

export default PasswordItem
