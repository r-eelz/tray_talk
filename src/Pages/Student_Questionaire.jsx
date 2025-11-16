
import "../Components/Student_Questionaire_Page/style.css"

export function Student_Questionaire() {
    return (
        <div>
            <div style={{height: "200px"}} className="extend_block"></div>
            <div className="article-feedback-container">
                  <div style={{height: "15px"}} className="extend_block"></div>
            <div className="article-feedback-heading">Did you eat your school lunch today?</div>
            <li className="article-feedback-wrapper">
                        <input className="input" id="yes" defaultValue="yes" name="article" type="radio" />
                        <label className="article-feedback" htmlFor="yes"> Yes </label>
                        <input className="input" id="some" defaultValue="some" name="article" type="radio" />
                        <label className="article-feedback" htmlFor="some"> Some </label>
                        <input className="input" id="no" defaultValue="no" name="article" type="radio" />
                        <label className="article-feedback" htmlFor="no"> No </label>
            </li>
            <div className="wavy_span"></div>
      </div>
        </div>
    )
}