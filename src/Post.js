import styled from "styled-components"

const StyledPost = styled.div`
    height: 300px;
    width: 90%;
    margin: 20px;
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
    padding: 5px 20px;
    box-sizing: border-box;
    .pic {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 90%;
        }
    }
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        border-top: 1px rgba(0, 0, 0, 0.1) solid;
        .user {
            display: flex;
            align-items: center;
            .user-pic {
                border-radius: 50%;
                width: 18px;
                height: 18px;
                margin-right: 5px;
                background-size: cover;
            }
            .status {
                font-weight: 700;
                font-size: 13px;
                position: relative;
                top: -1px;
                color: gold;
            }
        }
    }
    img {
        width: 100%;
    }
`

const emotionMap = {
    'happy':        '😀 Happy',
    'angry':        '😡 Angry',
    'neutral':      '🥱 Neutral',
    'surprised':    '😮 Surprised',
    'sad':          '😞 Sad',
    'fearful':      '🙀 Fearful',
    'Disgusted':    '🤮 Disgusted'
}
export default function Post({ post }) {
    
    
    return (
        <StyledPost>
            {/* <img src={post.pictureUrl} alt=""/> */}
            <div className="pic">
                <img src={post.pictureUrl} alt=""/>
            </div>
            <div className="info">
                <div className="user">
                    <div className="user-pic" style={{backgroundImage: `url(${post.profileImageUrl})`}}></div>
                    <div className="name">{post.profileName} <span className='status'>{post.won ? 'WON' : 'LOST'}</span></div>

                </div>
                <div className="emotion">{post.expression ? emotionMap[post.expression] : '🤷'}</div>
            </div>
        </StyledPost>
    )
}