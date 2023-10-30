import './styles/Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum'

export const Header = () => {
    return (
        <div className="header">
            <IconButton onClick={() => console.log('User Avatar')}>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>
            <img src="../../public/React-logo.svg" alt="React Icon" className='header_logo' />
            <IconButton onClick={() => console.log('Message')}>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}
