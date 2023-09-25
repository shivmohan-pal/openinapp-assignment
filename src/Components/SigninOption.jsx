
const SigninOption = ({brandIcon,brandName,signin})=>{
  const handleSignin=()=>{
    signin();
  }
return (
    <div className="signin-option" onClick={handleSignin} >
        {brandIcon}
      <span>Sign in with {brandName}</span>
    </div>
)
}

export default SigninOption;