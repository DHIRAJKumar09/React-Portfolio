import './intro.css'
import { FaGithubSquare } from "react-icons/fa";
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import bg from '../../assets/bg-PhotoRoom.png-PhotoRoom.png'
import Resume from './Dhiraj_kumar_resume.pdf'

const Intro =()=>{
    return(
       <div className="intro" id="intro">
       <div className="intro-left" >
       <div className='i-name'>
       <h1 className="hello"> Hy! I Am</h1>
       <span className="intro-name">Dhiraj <span style={{}}>Kumar</span></span>
       <p className="intro-text"> Enthusiastic and highly motivated recent B.Tech graduate in Electronics and Communication Engineering from Maulana Azad College Of Engineering And Technology, equipped with a solid foundation in
          Java development. Eager to launch a career in software development, driven by a commitment to innovation, adaptability, and continuous learning. Proven track record in developing scalable applications
          and solving complex problems. Ready to contribute to dynamic teams with a strong work ethic and a
          passion for continuous growth.
       </p>
       </div>
       <a href='https://www.linkedin.com/in/dhirajkumar09/'>
       <button className='active-btn i-button'>LinkedIn</button>
       </a>
      
       <a href={Resume}>
       <button className=' btn'>Download Resume</button>
       </a>
      
       <div className='i-icons'>
       </div>
       </div>
       <div className="intro-right">
       <img className='intro-img' src={bg}   />
       <div className='img-underline'></div>
       
       </div>
       </div>
    )
}
export default Intro ;