import './ConnectWithMe.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
export default function ConnectWithMe() {
    return (
        <div className="connect-with-me-wrapper">
            <h1 className='c-w-m-header'>Connect With Me!</h1>
           <a target="_blank" className='git-link' href="https://github.com/NickGentryBJJ"><BsGithub/></a>
            <a target="_blank" className='linked-in-link' href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/"><BsLinkedin/></a>
        </div>
    )
}