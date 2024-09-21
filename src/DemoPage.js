import React, { useState, useEffect } from 'react';
import './DemoPage.css';

const DemoPage = () => {
  const avgAttention = 40;
  const avgDistraction = 60;

  const overallFeedback = {
    attention: avgAttention,
    distraction: avgDistraction,
    good: "Clear and concise points, logical flow of content, and relevant visuals are consistent strengths that help in maintaining audience interest and understanding.",
    wrong: "Too much text, small font sizes, lack of visual hierarchy, and disorganized layouts are common issues across the slides, making it difficult for the audience to quickly grasp key points and stay engaged.",
    improvement: "Reduce text and use bullet points, increase font sizes, enhance visual hierarchy with bold text and color highlights, improve layout organization, and incorporate interactive elements to boost engagement."
  };


  const slideFeedback = [
    {
      slide: 1,
      attention: 70,
      distraction: 30,
      timestamp: "09:00",
      image: "assets/1.png",
      good: "The slide features a relevant image and clear title, which helps in maintaining a moderate level of engagement.",
      wrong: "The slide suffers from too much text, small fonts, and a lack of visual hierarchy, potentially causing disengagement.",
      improvement: "Reducing text, increasing font size, and introducing bullet points or infographics could enhance clarity and engagement.",
      wrongFeedback: [
        "Too Much Text: The slide contains a large block of text which can be overwhelming and difficult to digest quickly, leading to potential disengagement.",
        "Small Fonts: The font size used in the text block is relatively small, making it hard for the audience to read, especially from a distance.",
        "Lack of Visual Hierarchy: The text does not employ varied font sizes or styles to differentiate between the title, subtitles, and body, which can make it difficult to scan and understand key points quickly."
      ],
      goodFeedback: [
        "Engaging Visuals: The image of a boardroom meeting is relevant to the topic and adds a visual element that can help in explaining the concept of directors in a company.",
        "Clear and Concise Title: The title is prominently displayed and clearly communicates the subject of the slide, which is effective in guiding the audience's understanding."
      ],
      improvementFeedback: [
        "Reduce Text Volume: Breaking down the text into bullet points or shorter paragraphs can help in making the content more digestible and engaging.",
        "Increase Font Size: Enlarging the font size would make the text easier to read from a distance, enhancing accessibility for all audience members.",
        "Introduce Bullet Points or Infographics: Using bullet points for key responsibilities or an infographic to depict the role of directors could visually simplify complex information, making it more engaging.",
        "Enhance Visual Hierarchy: Employing different font sizes or styles for headings and subheadings can help in creating a clearer visual hierarchy, guiding the audience through the slide more effectively."
      ]
    },
    {
      slide: 2,
      attention: 80,
      distraction: 20,
      timestamp: "09:08",
      image: "assets/2.png",
      good: "The slide effectively uses a relevant image and clear section headings to aid understanding and maintain interest.",
      wrong: "The slide suffers from too much text, small fonts, and a lack of visual hierarchy, which may reduce clarity and audience engagement.",
      improvement: "Reducing text, increasing font size, and introducing bullet points or visual elements can enhance readability and engagement.",
      wrongFeedback: [
        "Too Much Text: The slide is text-heavy, which can overwhelm the audience and make it difficult to quickly grasp the key points.",
        "Small Fonts: The font size used in the definitions and explanations is relatively small, making it hard for the audience to read, especially from a distance.",
        "Lack of Visual Hierarchy: The slide lacks elements like bolding or color highlights to draw attention to key terms or definitions, which can make it difficult for the audience to focus on the most important information."
      ],
      goodFeedback: [
        "Engaging Visuals: The image used is relevant and reflects the corporate setting, which helps in visualizing the content, thereby maintaining interest.",
        "Clear Section Headings: The headings such as 'Definition', 'Board of Directors', and 'Board Meetings' are clearly marked, which helps in organizing the information and guiding the audience through the slide."
      ],
      improvementFeedback: [
        "Reduce Text: Simplify the content by using bullet points or shorter sentences to make the slide less overwhelming and easier to follow.",
        "Increase Font Size: Enlarging the text would make it more readable for the audience, especially for those further from the screen.",
        "Enhance Visual Hierarchy: Use bolding, color highlights, or larger fonts for key terms and definitions to help them stand out and aid retention.",
        "Introduce More Visuals: Adding more relevant images or diagrams could break up the text and make the slide more visually appealing, thus keeping the audience engaged."
      ]
    },
    {
      slide: 3,
      attention: 60,
      distraction: 40,
      timestamp: "09:16",
      image: "assets/3.png",
      good: "Logical flow and clear segmentation of points are positive aspects, contributing to the 60% engagement level.",
      wrong: "The slide suffers from too much text, small fonts, and a lack of engaging visuals, which may have led to moderate engagement levels.",
      improvement: "Enhance readability by increasing font size, reduce text volume, and incorporate relevant visuals or diagrams to boost engagement.",
      wrongFeedback: [
        "Too Much Text: The slide is text-heavy, which can overwhelm the audience, making it difficult to quickly grasp the key points.",
        "Small Fonts: The font size used in the slide is small, making it hard to read, especially for those at a distance or on smaller screens.",
        "Lack of Engaging Visuals: The slide lacks visual elements that could help illustrate the points being made, making the content less engaging.",
        "Monotonous Slide Design: The slide design is very basic and does not vary much from other slides, which can lead to a lack of visual interest."
      ],
      goodFeedback: [
        "Logical Flow: The content is organized in a numbered format, which helps in understanding the sequence of information.",
        "Clear Segmentation of Points: The use of numbers to delineate different methods of appointment helps in distinguishing between the various categories."
      ],
      improvementFeedback: [
        "Increase Font Size: Making the text larger will help in making the slide easier to read from a distance.",
        "Reduce Text Volume: Summarizing the content into bullet points or shorter paragraphs can help in maintaining the audience's attention.",
        "Incorporate Visuals: Adding relevant images or diagrams can make the information more digestible and visually appealing.",
        "Introduce Variety in Slide Design: Varying the design of the slides can help in keeping the audience engaged throughout the presentation."
      ]
    },
    {
      slide: 4,
      attention: 50,
      distraction: 50,
      timestamp: "09:27",
      image: "assets/4.png",
      good: "The slide has a clear title and uses bullet points, which helps in understanding the structure of the content.",
      wrong: "The slide suffers from too much text, small fonts, and a lack of engaging visuals, which likely contributed to only moderate engagement.",
      improvement: "Enhance the slide by incorporating high-contrast colors, larger fonts, engaging visuals, and interactive elements to boost engagement.",
      wrongFeedback: [
        "Too Much Text: The slide is text-heavy, which can overwhelm the audience, making it difficult to quickly grasp the key points.",
        "Small Fonts: The font size used in the bullet points is relatively small, which can make it hard for the audience to read, especially from a distance.",
        "Lack of Engaging Visuals: The slide primarily uses text without supporting visuals, which can make the content less engaging and harder to remember.",
        "Monotonous Slide Design: The slide layout is very basic and does not vary much from other slides in the presentation, which can lead to disengagement."
      ],
      goodFeedback: [
        "Clear and Concise Points: The use of bullet points helps in breaking down the information, which can aid in better comprehension.",
        "Logical Flow: The points are organized in a logical sequence, which helps in understanding the progression of requirements for directors."
      ],
      improvementFeedback: [
        "Increase Font Size: Enlarging the text will make it easier to read and can help in maintaining the audience's attention.",
        "Introduce High-Contrast Colors: Using colors that stand out against the background can improve readability and visual appeal.",
        "Add Relevant Visuals: Including images or icons related to the content can make the slide more engaging and help in retaining information.",
        "Interactive Elements: Adding a poll or a quick interactive question about the requirements could increase participation and interest.",
        "Reduce Text Quantity: Simplifying the content or spreading it over multiple slides can prevent information overload and keep the audience engaged."
      ]
    },
    {
      slide: 5,
      attention: 40,
      distraction: 60,
      timestamp: "09:35",
      image: "assets/5.png",
      good: "The slide includes relevant images and a logical flow of content, which are positive aspects but overshadowed by design flaws.",
      wrong: "The slide suffers from too much text, poor color contrast, and a disorganized layout, likely causing the low engagement.",
      improvement: "Redesign the slide with better color contrast, less text, and more effective use of visuals to enhance readability and engagement.",
      wrongFeedback: [
        "Too Much Text: The slide is heavily text-laden, which can overwhelm the audience, making it difficult to quickly grasp the key points.",
        "Poor Color Contrast: The use of a light blue background with white text in some areas reduces readability, which can frustrate viewers trying to read the content.",
        "Disorganized Layout: The information is presented in a list format without clear visual distinction between points, making it hard to follow and retain the information."
      ],
      goodFeedback: [
        "Relevant Images: The images used are relevant to the content, potentially aiding in explaining the context about Director Identification Number (DIN).",
        "Logical Flow: The content follows a logical sequence from application to punishment, which helps in understanding the process if one can navigate through the text."
      ],
      improvementFeedback: [
        "Improve Color Contrast: Use darker text on a lighter background or vice versa to enhance readability.",
        "Reduce and Simplify Text: Summarize the points in bullet form and keep each bullet concise for better understanding.",
        "Incorporate Visual Aids: Adding charts or diagrams to illustrate complex processes can make the content more engaging.",
        "Enhance Layout: Introduce more white space or distinct sections for each part of the slide to help guide the audience's eye and make the information easier to digest."
      ]
    }
  ];


  const [showMore, setShowMore] = useState(false);
  const [showSlideAnalysis, setShowSlideAnalysis] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpandRow = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="card full-width-card"> {/* Full width card */}
      <div className="card-body">
        <div className="heatmap-container">
          {loading ? (<h3>Fetching Meeting Analytics</h3>) : (<h3> Meeting Attention HeatMap </h3>)}
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div> {/* Loader icon */}
            </div>
          ) : (
            <div>
              <img src="assets/heatmap.png" alt="Attention Heatmap" className="heatmap-image" />
              <div className="summary">
                <p><strong>Average Attention:</strong> {avgAttention}%</p>
                <p><strong>Average Distraction:</strong> {avgDistraction}%</p>
              </div>
            </div>
          )}
        </div>

        {!loading && (
          <div className="show-more-container">
            <button onClick={() => setShowMore(!showMore)} className="show-more-btn">
              {showMore ? 'Show Less Analysis' : 'Show More Analysis'}
            </button>
          </div>
        )}

        {showMore && (
          <>
            <div className="analysis-section">
              <div className="card wider-card">
                <h4>Overall Presentation Feedback</h4>
                <p><strong>Attention:</strong> {overallFeedback.attention}%</p>
                <p><strong>Distraction:</strong> {overallFeedback.distraction}%</p>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>What was good</th>
                      <th>What was wrong</th>
                      <th>How to improve</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{overallFeedback.good}</td>
                      <td>{overallFeedback.wrong}</td>
                      <td>{overallFeedback.improvement}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="expand-button-section">
                <button className="expand-button" onClick={() => setShowSlideAnalysis(!showSlideAnalysis)}>
                  {showSlideAnalysis ? 'Hide Slide Analysis' : 'Expand to See Slide Analysis'}
                </button>
              </div>

              {showSlideAnalysis && (
                <div className="slide-analysis-container">
                  {slideFeedback.map((slide, index) => (
                    <div key={index} className="card wider-card">
                      <h4>Slide {slide.slide} Feedback</h4>
                      <div className="image-text-container">
                        <img
                          src={slide.image}
                          alt="Slide Image"
                          className="slide-image"
                          onClick={() => handleImageClick(slide.image)}
                        />
                        <div className="slide-details">
                          <p><strong>Timestamp:</strong> {slide.timestamp}</p>
                          <p><strong>Attention:</strong> {slide.attention}%</p>
                          <p><strong>Distraction:</strong> {slide.distraction}%</p>
                        </div>
                      </div>
                      <table className="styled-table">
                        <thead>
                          <tr>
                            <th>What was good</th>
                            <th>What was wrong</th>
                            <th>How to improve</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{slide.good}</td>
                            <td>{slide.wrong}</td>
                            <td>{slide.improvement}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="expand-button-section">
                        <button onClick={() => toggleExpandRow(index)} className="expand-button">
                          {expandedRows[index] ? 'Hide Details' : 'Show More Details'}
                        </button>
                        {expandedRows[index] && (
                          <div className="detailed-card">
                            <h5>Slide {slide.slide} - Detailed Feedback</h5>
                            <div className="feedback-section good-feedback">
                              <h6 className="feedback-header" style={{ color: 'green' }}>What was good:</h6>
                              <ul>
                                {slide.goodFeedback.map((feedback, i) => {
                                  const parts = feedback.split(':');
                                  return (
                                    <li key={i}>
                                      <strong>{parts[0]}</strong>: {parts[1]}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="feedback-section bad-feedback">
                              <h6 className="feedback-header">What was wrong:</h6>
                              <ul>
                                {slide.wrongFeedback.map((feedback, i) => {
                                  const parts = feedback.split(':');
                                  return (
                                    <li key={i}>
                                      <strong>{parts[0]}</strong>: {parts[1]}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="feedback-section improvement-feedback">
                              <h6 className="feedback-header" style={{ color: 'blue' }}>How to improve:</h6>
                              <ul>
                                {slide.improvementFeedback.map((feedback, i) => {
                                  const parts = feedback.split(':');
                                  return (
                                    <li key={i}>
                                      <strong>{parts[0]}</strong>: {parts[1]}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                      <div className="modal-content">
                        <img src={modalImage} alt="Expanded Slide" className="large-image" />
                        <button className="close-modal" onClick={closeModal}>×</button>
                      </div>
                    </div>
                  )}
                </div>

              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoPage;
