
const Avatar = ({src ,onClick}) =>{
return (
    <div className="avatar" onClick={onClick}>
        <img src={src} alt="avatar-img" />
    </div>
)
}

export default Avatar;