import React , { useState }from 'react';
import "../styles/Gallery.css"

const photos = [
  { src: 'https://www.chalkbeat.org/resizer/v2/GNUG75EUT5HCXBEWD3RHDQDDYI.jpg?auth=cab448e0f324e1a0aea4a4f7ca4bd21b8bf1f27cbba24a9475501165be1a0a53&smart=true&width=1600&height=900', alt: 'Students presenting their science projects.' },
  { src: 'https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg', alt: 'Students performing in the cultural fest.' },
  { src: 'https://www.signalsaz.com/wp-content/uploads/2020/06/Back-to-school-classroom-students-teacher.jpg', alt: 'A glimpse of our interactive classrooms.' },
  { src: 'https://www.booktrust.org.uk/globalassets/images/news-and-features/blogs-2021/09.-september/promote-your-school/promote-your-school-16x9-4.jpg?w=1200&h=675&quality=70&anchor=middlecenter', alt: 'Students reading and studying in the school library.' },
];

const videos = [
  { src: 'school_tour.mp4', alt: 'Virtual tour of Springdale Public School.' },
  { src: 'annual_function.mp4', alt: 'Highlights from the Annual Function 2023.' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => handleTabClick('photos')}
        >
          Photos
        </button>
        <button
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => handleTabClick('videos')}
        >
          Videos
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'photos' && (
          <div className="photos">
            {photos.map((photo, index) => (
              <div key={index} className="photo-item">
                <img src={photo.src} alt={photo.alt} />
                <p>{photo.alt}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'videos' && (
          <div className="videos">
            {videos.map((video, index) => (
              <div key={index} className="video-item">
                <video controls>
                  <source src={video.src} type="video/mp4" />
                </video>
                <p>{video.alt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="view-all">
        <a href="#">View All</a>
      </div>
    </div>
  );
};

export default Gallery;