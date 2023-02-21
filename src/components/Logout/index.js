import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <div>
      <button type="button" className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}
export default Logout
