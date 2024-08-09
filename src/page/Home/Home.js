import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './Home.css';
import Content from '../../component/home_page/Content/Content';
import Navbar from '../../component/home_page/Navbar/Navbar';
import Sidebar from '../../component/home_page/Sidebar/Sidebar';
import CardStack from '../../component/new_card/CardStack'
import SideBarElement from '../../component/home_page/Sidebar/SidebarElement';
import ErrorCardStack from '../../component/new_card/error_card/ErrorCardStack';


function HomePage() {

    const [chapters, setChapters] = useState([]);
    const [selectedChapterId, setSelectedChapterId] = useState(null); // Başlangıçta null
    const [wordCards, setWordCards] = useState([]);
    const [error, setError] = useState(null);
    const [chapterName, serChapterName] = useState('Bir Chapter Seçiniz');

    useEffect(() => {
        const fetchChapters = async () => {
            try {
                const response = await axios.get('http://localhost:8080/chapter'); // Tüm chapterları getiren endpoint
                setChapters(response.data);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        };
        fetchChapters();
    }, []);

    useEffect(() => {
        const fetchWordCards = async () => {
            if (selectedChapterId) { // Sadece selectedChapterId belirlendiğinde çalışsın
                try {
                    const response = await axios.get(`http://localhost:8080/chapter/cards?chapter_id=${selectedChapterId}`); // Chapterın kartlarını getiren endpoint
                    setWordCards(response.data);
                } catch (error) {
                    setError(error.message);
                }
            }
        };
        fetchWordCards();
    }, [selectedChapterId]);

    function handleChapterClick(chapterId, chapterName) {
        setSelectedChapterId(chapterId);
        serChapterName(chapterName);
    }

    return (
        <div>
            <Navbar className="navbar" chapterName={chapterName}/>

            <div className="container">
                <Content>
                    {
                        error && <p>Error: {error}</p> // conditional rendering 
                    } 
                    {wordCards.length > 0 ? (<CardStack data={wordCards} />) : (<ErrorCardStack></ErrorCardStack>)}
                </Content>
                <Sidebar>
                    {chapters.map((chapter, index) => (
                        <SideBarElement
                            key={chapter.id}
                            name={chapter.chapterName}
                            onClick={() => handleChapterClick(chapter.id, chapter.chapterName)}
                            index={index}
                        />
                    ))}
                </Sidebar>


            </div>
        </div>
    )
}

export default HomePage;