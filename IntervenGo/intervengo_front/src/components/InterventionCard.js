import './InterventionCardStyles.css'

const InterventionCard = ({id, location, task, action_performed, picture, signature, intervenant, status}) => {

    return (
        <div className="intervention">
            <div className='info'>{id}</div>
            <div className='info'>{location}</div>
            {
                task.length > 20 ?
                <div className='info'>{task.substring(0,20)}...</div>
                :
                <div className='info'>{task}</div>
            }
            {
                action_performed?.length > 20 ?
                <div className='info'>{action_performed.substring(0,20)}...</div>
                :
                <div className='info'>{action_performed}</div>
            }
            {
                picture !== null ? (
                <div className='info'>
                    <img src={picture} className='picture'/>
                </div>
                )
                :
                <div></div>
            }
            <div className='info'>
                <img src={signature} className='signature'/>
            </div>
            <div className='info'>{intervenant}</div>
            <div className='info'>{status}</div>
        </div>
    )
}

export default InterventionCard