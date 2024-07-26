import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

const VideoFooter = () => {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h3>@nabendu</h3>
                <p>Windows video editing</p>
                <div className='videoFooter__ticker'>
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>This is a Windows PC</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    )
}
export default VideoFooter