import '../Components/Main_Page/style.css'

export function Main() {
    return (
        <form className='form'>
            <div className='blocker'>
            </div>
             <span className="input-span">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" /></span>
            <div className='blocker_between_forms'></div>
            <span className="input-span">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" id="password" /></span>
                 <div className='blocker_between_forms'></div>
            <span className="span"><a href="#" className='link_buttons'>Forgot password?</a></span>
                <input className="submit" type="submit" defaultValue="Log in" />
            <span className="span">Don't have an account? <a href="#" className='link_buttons'>Sign up</a></span>
        </form>
    )
}