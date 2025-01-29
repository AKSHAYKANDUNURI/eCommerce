import React from 'react';
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
       <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
            Absolutely love this dress! The fit is perfect, and the fabric is so soft and comfortable. The design is elegant yet versatile, making it suitable for various occasions. Received so many compliments when I wore it. Highly recommend!
            </p>
            
            <p>
            This dress exceeded my expectations! The quality of the material is fantastic, and the attention to detail in the design is remarkable. It fits like a dream and flatters my figure beautifully. I wore it to a special event, and I felt confident and elegant all night. Definitely my new favorite in my wardrobe!
            </p>
        </div>
       </div>
    );
};

export default DescriptionBox;
