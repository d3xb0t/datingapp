import './styles/SwipeButtons.css'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'

export const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className='leftSwipe' onClick={() => console.log('dislike')}>
                <CloseIcon />
            </IconButton>
            <IconButton className='rightSwipe' onClick={() => console.log('like')}>
                <FavoriteIcon />
            </IconButton>
        </div>
    )
}

