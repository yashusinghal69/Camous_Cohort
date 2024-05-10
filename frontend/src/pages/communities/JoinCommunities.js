import {React ,useState,useEffect} from 'react'
import CommunityCard from '../../components/cards/communityCard/CommunityCard';
import styles from './Communities.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function JoinCommunity() {
    const navigate = useNavigate();
  
    const [communities, setCommunities] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    
    
    useEffect(() => {
        // Fetch communities from the server
        axios.get('http://localhost:9001/communities')
            .then(response => setCommunities(response.data))
            .catch(error => console.error('Error fetching communities:', error));
    }, []);
 
    const handleCardClick = (id) => {
        
        if (!selectedCards.includes(id) && selectedCards!==null) {
            setSelectedCards([...selectedCards, id]);
        } else {
            setSelectedCards(selectedCards.filter(cardId => cardId !== id));
        }
        // axios.post('/api/communities', newCommunity)
        //     .then(response => {
            //         setCommunities([...communities, response.data]);
            //         setNewCommunity({ name: '', description: '' });
            //     })
            //     .catch(error => console.error('Error adding community:', error));
        };

    const handleDone = () => {
        navigate ('/feed');
    };
    return (
        <div className={styles.div}>
            <h1 className={styles.name} >Choose Your Favorite Communities</h1>
            <div className={styles.cards_box}>
            <div className={styles.community_grid}>
                {communities.map((community,i) => (
                    <CommunityCard key={community.id} count={i} community={community} 
                    isSelected={selectedCards.includes(community._id)}  
                    onClick={() => handleCardClick(community._id)}/>
                ))}
            </div>
            <div className={styles.button_community_flex}> 
            <button className={styles.button_community} onClick={handleDone}>Done</button>
            </div>
            </div>
        </div>
    );
}




